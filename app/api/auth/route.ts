import { NextResponse, type NextRequest } from 'next/server';
import {
  buildCookieHeader,
  buildLogoutCookieHeader,
  checkToken,
  getToken,
  isAuthEnabled,
  issueSession,
  logoutSession,
} from '@/src/lib/auth';
import { LoginRequestSchema } from '@/src/lib/validation';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function readCookie(request: NextRequest): string | undefined {
  const raw = request.headers.get('cookie') ?? '';
  for (const part of raw.split(';')) {
    const [k, v] = part.trim().split('=');
    if (k === 'cinestudio_session' && v) return decodeURIComponent(v);
  }
  return undefined;
}

export async function POST(request: NextRequest) {
  try {
    if (!isAuthEnabled()) {
      return NextResponse.json({ ok: true, authEnabled: false });
    }
    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      raw = {};
    }
    const parsed = LoginRequestSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid request' }, { status: 400 });
    }
    if (!checkToken(parsed.data.token)) {
      return NextResponse.json({ error: 'invalid token' }, { status: 401 });
    }
    const userAgent = request.headers.get('user-agent');
    const cookieValue = issueSession(getToken() ?? '', userAgent);
    const response = NextResponse.json({ ok: true });
    response.headers.append('set-cookie', buildCookieHeader(cookieValue));
    return response;
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  logoutSession(readCookie(request));
  const response = NextResponse.json({ ok: true });
  response.headers.append('set-cookie', buildLogoutCookieHeader());
  return response;
}
