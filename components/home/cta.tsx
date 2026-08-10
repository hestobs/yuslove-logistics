'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { site } from '@/lib/site'

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground shadow-xl sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-white/5 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Ready When You Are
              </span>
              <h2 className="mt-5 text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Let&apos;s move your business forward
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Get a fast, transparent quote today and discover why businesses across Nigeria trust
                Yuslove Logistics to deliver.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  render={<Link href="/contact" />}
                  className="h-12 gap-2 bg-gold px-7 text-base text-gold-foreground shadow-lg hover:bg-gold/90"
                >
                  Get Started
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  render={
                    <a href={`https://wa.me/${site.whatsappIntl}`} target="_blank" rel="noopener noreferrer" />
                  }
                  className="h-12 gap-2 border-white/30 bg-white/5 px-7 text-base text-white hover:bg-white/15 hover:text-white dark:border-white/30 dark:bg-white/5"
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
