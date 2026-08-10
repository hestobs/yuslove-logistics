'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, AtSign, Share2, Music2, Send, MapPin } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { navLinks, site } from '@/lib/site'

const footerServices = [
  'Parcel Delivery',
  'Interstate Logistics',
  'Express Delivery',
  'Corporate Logistics',
  'Warehouse Distribution',
]

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
    setTimeout(() => setDone(false), 3500)
  }

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.tagline} Dependable logistics, courier and delivery solutions across Nigeria.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="#" label={`Instagram ${site.socials.instagram}`}>
                <AtSign className="size-4" />
              </SocialIcon>
              <SocialIcon href="#" label={`Twitter ${site.socials.twitter}`}>
                <Share2 className="size-4" />
              </SocialIcon>
              <SocialIcon href="#" label={`TikTok ${site.socials.tiktok}`}>
                <Music2 className="size-4" />
              </SocialIcon>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Services</h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Get In Touch</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-gold" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary break-all">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-gold" />
                  <a href={`tel:${site.whatsapp}`} className="hover:text-primary">
                    {site.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 shrink-0 text-gold" />
                  <span>Nationwide, Nigeria</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Newsletter</h3>
              <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  aria-label="Email address for newsletter"
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-3 focus:ring-ring/30"
                />
                <Button type="submit" size="icon" className="h-10 w-10 shrink-0" aria-label="Subscribe">
                  <Send className="size-4" />
                </Button>
              </form>
              {done && <p className="mt-2 text-xs text-gold">Thanks for subscribing!</p>}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 {site.name}. All Rights Reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for speed, safety &amp; trust.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-foreground/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  )
}
