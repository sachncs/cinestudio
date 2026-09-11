import { randomBytes } from 'node:crypto';
import { logger } from '@/src/lib/logger';

const log = logger('auth/sessions');

interface SessionEntry {
  id: string;
  createdAt: string;
  lastSeenAt: string;
  userAgent: string | null;
}

const sessions = new Map<string, SessionEntry>();

const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;

export function createSession(userAgent: string | null): SessionEntry {
  const entry: SessionEntry = {
    id: randomBytes(24).toString('hex'),
    createdAt: new Date().toISOString(),
    lastSeenAt: new Date().toISOString(),
    userAgent,
  };
  sessions.set(entry.id, entry);
  prune();
  return entry;
}

export function touchSession(id: string): SessionEntry | null {
  const entry = sessions.get(id);
  if (!entry) return null;
  entry.lastSeenAt = new Date().toISOString();
  return entry;
}

export function revokeSession(id: string): boolean {
  return sessions.delete(id);
}

export function isSessionValid(id: string | undefined | null): boolean {
  if (!id) return false;
  const entry = sessions.get(id);
  if (!entry) return false;
  const age = Date.now() - Date.parse(entry.createdAt);
  return age <= MAX_AGE_MS;
}

export function listSessions(): SessionEntry[] {
  prune();
  return Array.from(sessions.values()).sort(
    (a, b) => Date.parse(b.lastSeenAt) - Date.parse(a.lastSeenAt),
  );
}

function prune(): void {
  const cutoff = Date.now() - MAX_AGE_MS;
  for (const [id, entry] of sessions) {
    if (Date.parse(entry.createdAt) < cutoff) {
      sessions.delete(id);
      log.info('session_expired', { id });
    }
  }
}