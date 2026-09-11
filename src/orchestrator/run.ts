import { runCinestudioPipeline } from './run-graph';
import { loadConfig } from '@/src/db/configs';
import { createRun, getRun, updateRun } from '@/src/db/runs';
import { ProviderNotConfiguredError, RunCancelledError } from '@/src/lib/errors';
import { logger, setCurrentRunId, clearCurrentRunId } from '@/src/lib/logger';

const log = logger('orchestrator/run');

export interface StartRunInput {
  prompt?: string;
  productionId: string;
  runIdForResume?: string;
}

export interface StartRunResult {
  runId: string;
  status: 'queued';
}

const inflight = new Map<string, Promise<unknown>>();
const abortControllers = new Map<string, AbortController>();

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_STARTS = 5;
const recentStartTimestamps: number[] = [];

export class ConcurrencyCapExceededError extends Error {
  constructor(public readonly cap: number) {
    super(`Max concurrent runs cap of ${cap} reached`);
    this.name = 'ConcurrencyCapExceededError';
  }
}

export class RunRateLimitExceededError extends Error {
  constructor(public readonly retryAfterSeconds: number) {
    super(`Run start rate limit exceeded; retry after ${retryAfterSeconds}s`);
    this.name = 'RunRateLimitExceededError';
  }
}

function checkRateLimit(now: number): void {
  while (recentStartTimestamps.length > 0 && now - recentStartTimestamps[0]! > RATE_WINDOW_MS) {
    recentStartTimestamps.shift();
  }
  if (recentStartTimestamps.length >= RATE_MAX_STARTS) {
    const oldest = recentStartTimestamps[0]!;
    const retryAfter = Math.max(1, Math.ceil((RATE_WINDOW_MS - (now - oldest)) / 1000));
    throw new RunRateLimitExceededError(retryAfter);
  }
}

export function getMaxConcurrentCap(): number {
  const raw = process.env.CINESTUDIO_MAX_CONCURRENT_RUNS;
  const n = raw ? Number(raw) : 3;
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 3;
}

export function getInflightCount(): number {
  return inflight.size;
}

export function startRun(input: StartRunInput): StartRunResult {
  if (!input.productionId) {
    throw new Error('productionId is required to start a run.');
  }
  const now = Date.now();
  if (!input.runIdForResume) {
    checkRateLimit(now);
  }
  if (inflight.size >= getMaxConcurrentCap()) {
    throw new ConcurrencyCapExceededError(getMaxConcurrentCap());
  }
  let runId: string;
  let prompt: string;

  if (input.runIdForResume) {
    const existing = getRun(input.runIdForResume);
    if (!existing) throw new Error(`Run ${input.runIdForResume} not found`);
    runId = existing.id;
    prompt = existing.prompt;
    log.info('run_resume', { runId, promptLength: prompt.length });
  } else {
    if (!input.prompt || input.prompt.trim().length < 5) {
      throw new Error('Prompt must be at least 5 characters.');
    }
    runId = createRun(input.prompt, input.productionId);
    prompt = input.prompt;
    recentStartTimestamps.push(now);
  }

  const controller = new AbortController();
  abortControllers.set(runId, controller);

  const promise = (async () => {
    setCurrentRunId(runId);
    try {
      const config = loadConfig();
      if (!config.textProvider.enabled) {
        throw new ProviderNotConfiguredError(config.textProvider.provider);
      }
      log.info('run_started', { runId, productionId: input.productionId, promptLength: prompt.length });
      const result = await runCinestudioPipeline({
        runId,
        prompt,
        config,
        abortSignal: controller.signal,
      });
      log.info('run_finished', { runId, status: result.status });
    } finally {
      clearCurrentRunId();
    }
  })().catch((err) => {
    if (controller.signal.aborted) {
      log.info('run_aborted', { runId });
      return;
    }
    const message = err instanceof Error ? err.message : String(err);
    log.error('run_crashed', { runId, err: message });
    try {
      updateRun(runId, { status: 'failed', last_error: message });
    } catch (persistErr) {
      log.error('run_crash_persist_failed', {
        runId,
        err: persistErr instanceof Error ? persistErr.message : String(persistErr),
      });
    }
  });

  inflight.set(runId, promise);
  void promise.finally(() => {
    inflight.delete(runId);
    abortControllers.delete(runId);
  });
  return { runId, status: 'queued' };
}

export function isRunInflight(runId: string): boolean {
  return inflight.has(runId);
}

export async function awaitRun(runId: string): Promise<unknown> {
  const p = inflight.get(runId);
  if (!p) throw new Error(`Run ${runId} not found`);
  return p;
}

export function cancelRun(runId: string): boolean {
  const ctrl = abortControllers.get(runId);
  if (!ctrl) return false;
  ctrl.abort(new RunCancelledError(runId));
  return true;
}
