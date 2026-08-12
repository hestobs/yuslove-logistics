import { NextResponse } from 'next/server'

import { createAuthToken, verifyAuthToken } from '@/lib/auth-token'

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get('token')
  const payload = token ? verifyAuthToken(token) : null
  const destination = new URL(payload ? '/?signed-in=1' : '/sign-in?error=invalid-link', request.url)
  const response = NextResponse.redirect(destination)

  if (payload) {
    response.cookies.set('yuslove_session', createAuthToken(payload.email, 60 * 60 * 24 * 7), {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  }
  return response
}
