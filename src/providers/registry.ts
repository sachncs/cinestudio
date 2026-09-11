import type { TextProviderConfig } from '@/src/types';

export type TextProviderId = TextProviderConfig['provider'];

const IMPLEMENTED: ReadonlySet<TextProviderId> = new Set(['minimax']);

export function isProviderImplemented(provider: TextProviderId): boolean {
  return IMPLEMENTED.has(provider);
}

export function implementedTextProviders(): TextProviderId[] {
  return Array.from(IMPLEMENTED);
}