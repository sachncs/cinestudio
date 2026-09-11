import { NextResponse } from 'next/server';
import {
  getInflightCount,
  getMaxConcurrentCap,
} from '@/src/orchestrator/run';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  return NextResponse.json({
    inflight: getInflightCount(),
    cap: getMaxConcurrentCap(),
  });
}