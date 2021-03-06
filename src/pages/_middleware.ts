import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.SECRET,
  });

  if (
    req.page.name === '/login' ||
    req.page.name === '/api/auth/[...nextauth]'
  ) {
    return NextResponse.next();
  }

  if (!session) {
    return NextResponse.redirect(`${process.env.NEXT_APP_BASE_URL}/login`);
  }

  return NextResponse.next();
}
