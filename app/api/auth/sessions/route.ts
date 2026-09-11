import { NextResponse, type NextRequest } from 'next/server';
import { listSessions, revokeSession } from '@/src/lib/sessions';
import { edgeCheckRequest } from '@/src/lib/auth-edge';
import { isAuthEnabled } from '@/src/lib/auth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function authorised(request: NextRequest): boolean {
  if (!isAuthEnabled()) return true;
  return edgeCheckRequest(request);
}

export async function GET(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ sessions: listSessions() });
}

export async function DELETE(request: NextRequest) {
  if (!authorised(request)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }
  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 });
  }
  const removed = revokeSession(id);
  return NextResponse.json({ ok: true, removed });
}