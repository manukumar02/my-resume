import { serialize } from 'cookie';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    NextResponse.json({ result: 'Method not allowed' }, { status: 405 });
  }

  const payload = await req.json();

  if (process.env.PROTECT_LOCK === payload.lock) {
    const cookie = serialize('password', 'lock', {
      path: '/',
      httpOnly: true,
    });

    const response = NextResponse.json(
      {
        result: 'Authenticated',
        success: true,
      },
      {
        status: 201,
      }
    );

    response.cookies.set('lock', cookie);
    return response;
  } else {
    const response = NextResponse.json(
      { result: 'Invalid lock', success: false },
      { status: 404 }
    );
  }
}
