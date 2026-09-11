import { z } from 'zod';
import { invokeStructuredAgent } from './invoke';
import { listAgentStatesForRun } from '@/src/db/agent-state';
import type { TextProviderConfig } from '@/src/types';

export const PRODUCTION_COORDINATOR_SYSTEM_PROMPT = `You are the Production Coordinator. You track unresolved dependencies between agents.
Given a list of agent outputs and their status, identify:
- blockingIssues: agents waiting on others
- unresolvedDependencies: { from, to, reason }
- nextBestAction: a single recommended next step
Be terse and concrete.`;

export const CoordinatorReportSchema = z.object({
  blockingIssues: z.array(z.string()),
  unresolvedDependencies: z.array(
    z.object({
      from: z.string(),
      to: z.string(),
      reason: z.string().min(10),
    }),
  ),
  nextBestAction: z.string().min(10),
});
export type CoordinatorReport = z.infer<typeof CoordinatorReportSchema>;

export interface CoordinatorInput {
  agentStatuses: { agentId: string; status: 'pending' | 'running' | 'done' | 'failed' }[];
  unresolved: { kind: string; message: string }[];
}

export async function invokeProductionCoordinator(
  cfg: TextProviderConfig,
  input: CoordinatorInput,
  runId?: string,
): Promise<CoordinatorReport> {
  const statuses = runId ? collectStatuses(runId, input.agentStatuses) : input.agentStatuses;
  const { output } = await invokeStructuredAgent<CoordinatorReport>({
    agentId: 'production_coordinator',
    cfg: { ...cfg, temperature: 0.3 },
    systemPrompt: PRODUCTION_COORDINATOR_SYSTEM_PROMPT,
    userPrompt: JSON.stringify({ ...input, agentStatuses: statuses }, null, 2),
    schema: CoordinatorReportSchema,
    temperature: 0.3,
  });
  return output;
}

function collectStatuses(
  runId: string,
  fallback: CoordinatorInput['agentStatuses'],
): CoordinatorInput['agentStatuses'] {
  try {
    const rows = listAgentStatesForRun(runId);
    if (rows.length === 0) return fallback;
    return rows.map((r) => ({
      agentId: r.agentId,
      status: r.state === 'done' ? 'done' : r.state === 'failed' ? 'failed' : r.state === 'running' ? 'running' : 'pending',
    }));
  } catch {
    return fallback;
  }
}
