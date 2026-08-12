import { NextResponse } from 'next/server'

import { escapeHtml, sendEmail } from '@/lib/email'
import { site } from '@/lib/site'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const fields = ['name', 'email', 'phone', 'subject', 'message'] as const
    if (body.website || fields.some((field) => typeof body[field] !== 'string' || !body[field].trim())) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }

    const { name, email, phone, subject, message } = Object.fromEntries(
      fields.map((field) => [field, body[field].trim().slice(0, field === 'message' ? 5000 : 200)]),
    ) as Record<(typeof fields)[number], string>
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL || site.email,
      replyTo: email,
      subject: `[Website] ${subject}`,
      text: `New website message\n\nFrom: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\n${message}`,
      html: `<h2>New website message</h2><p><strong>From:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Phone:</strong> ${escapeHtml(phone)}<br><strong>Subject:</strong> ${escapeHtml(subject)}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form email failed:', error)
    return NextResponse.json({ error: 'We could not send your message. Please try again or contact us by WhatsApp.' }, { status: 500 })
  }
}
