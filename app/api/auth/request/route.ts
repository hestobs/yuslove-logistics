import { NextResponse } from 'next/server'

import { createAuthToken } from '@/lib/auth-token'
import { escapeHtml, sendEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    const normalizedEmail = typeof email === 'string' ? email.trim().toLowerCase() : ''
    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    const origin = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin
    const token = createAuthToken(normalizedEmail)
    const url = `${origin}/api/auth/verify?token=${encodeURIComponent(token)}`
    await sendEmail({
      to: normalizedEmail,
      subject: 'Your Yuslove Logistics sign-in link',
      text: `Use this secure link to sign in: ${url}\n\nThis link expires in 15 minutes.`,
      html: `<p>Use the secure link below to sign in to Yuslove Logistics.</p><p><a href="${escapeHtml(url)}">Sign in securely</a></p><p>This link expires in 15 minutes.</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Magic link email failed:', error)
    return NextResponse.json({ error: 'We could not send a sign-in link. Please try again later.' }, { status: 500 })
  }
}
