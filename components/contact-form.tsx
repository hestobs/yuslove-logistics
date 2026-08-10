'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Adeyemi', full: false },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', full: false },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '0803 000 0000', full: false },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', full: false },
] as const

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/40 bg-card p-10 text-center shadow-sm"
      >
        <span className="flex size-16 items-center justify-center rounded-full bg-gold/15 text-gold">
          <CheckCircle2 className="size-9" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-bold text-foreground">Message received!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to Yuslove Logistics. Our team will get back to you within one
          business day.
        </p>
        <Button variant="outline" className="mt-6 h-10 px-5" onClick={() => setSent(false)}>
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={cn(f.full && 'sm:col-span-2')}>
            <label htmlFor={f.name} className="mb-1.5 block text-sm font-semibold text-foreground">
              {f.label}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              required
              placeholder={f.placeholder}
              className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none transition-colors focus:border-primary focus:ring-3 focus:ring-ring/25"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your shipment or enquiry..."
            className="w-full resize-none rounded-xl border border-border bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-3 focus:ring-ring/25"
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 h-12 w-full gap-2 text-base shadow-lg shadow-primary/25">
        Send Message
        <Send className="size-4" />
      </Button>
    </form>
  )
}
