import type { Metadata } from 'next'
import { Mail, Phone, AtSign, Share2, Music2, Clock, MapPin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Yuslove Logistics. Request a quote, ask a question or book a delivery via our contact form, WhatsApp, email or social channels.',
}

const contactItems = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'WhatsApp', value: site.whatsapp, href: `https://wa.me/${site.whatsappIntl}` },
  { icon: AtSign, label: 'Instagram', value: site.socials.instagram, href: '#' },
  { icon: Music2, label: 'TikTok', value: site.socials.tiktok, href: '#' },
  { icon: Share2, label: 'Twitter (X)', value: site.socials.twitter, href: '#' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        breadcrumb="Contact"
        title="Let's talk logistics"
        description="Have a shipment to move or a question for our team? Reach out and we'll respond promptly with the answers you need."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Left: form */}
            <Reveal>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Fill in the form and our team will get back to you within one business day.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Right: info */}
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-6">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground">Contact Information</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{site.name}</p>
                  <ul className="mt-6 space-y-4">
                    {contactItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="group flex items-center gap-4"
                        >
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <item.icon className="size-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {item.label}
                            </span>
                            <span className="block truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                              {item.value}
                            </span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-2">
                    <Clock className="size-5 text-gold" />
                    <h3 className="font-serif text-xl font-bold text-foreground">Business Hours</h3>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {site.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between border-b border-border/60 pb-3 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-semibold text-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map placeholder */}
          <Reveal className="mt-12">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/50 shadow-sm">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.5]"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative flex min-h-64 flex-col items-center justify-center gap-3 p-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="size-7" />
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground">Our Office Location</h3>
                <p className="max-w-md text-sm text-muted-foreground">
                  A dedicated office location map will be available here soon. In the meantime, reach
                  us anytime via WhatsApp or email.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
