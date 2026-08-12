'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function AuthForm({ mode }: { mode: 'sign-in' | 'sign-up' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')
  const isSignUp = mode === 'sign-up'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const response = await fetch('/api/auth/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error)
      setStatus('sent')
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return <div className="rounded-3xl border border-gold/40 bg-card p-8 text-center shadow-sm"><CheckCircle2 className="mx-auto size-10 text-gold" /><h1 className="mt-4 font-serif text-3xl font-bold">Check your inbox</h1><p className="mt-3 text-sm text-muted-foreground">We sent a secure sign-in link to <strong className="text-foreground">{email}</strong>. It expires in 15 minutes.</p></div>
  }

  return <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"><div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Mail className="size-6" /></div><h1 className="mt-5 font-serif text-3xl font-bold text-foreground">{isSignUp ? 'Create your account' : 'Welcome back'}</h1><p className="mt-2 text-sm text-muted-foreground">{isSignUp ? 'Enter your email and we will send a secure sign-up link.' : 'Enter your email to receive a secure sign-in link.'}</p><form onSubmit={handleSubmit} className="mt-7"><label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Email address</label><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="you@example.com" className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none focus:border-primary focus:ring-3 focus:ring-ring/25" />{error && <p className="mt-3 text-sm text-destructive">{error}</p>}<Button type="submit" disabled={status === 'sending'} className="mt-5 h-11 w-full">{status === 'sending' ? 'Sending link…' : 'Email me a secure link'}</Button></form><p className="mt-5 text-center text-sm text-muted-foreground">{isSignUp ? 'Already have an account?' : 'New here?'} <Link href={isSignUp ? '/sign-in' : '/sign-up'} className="font-semibold text-primary hover:underline">{isSignUp ? 'Sign in' : 'Create an account'}</Link></p></div>
}
