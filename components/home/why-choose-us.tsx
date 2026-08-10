'use client'

import { motion } from 'framer-motion'
import { whyChooseUs } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { RevealStagger } from '@/components/reveal'

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Logistics built on trust and precision"
          description="We combine speed, security and genuine care to deliver an experience that keeps businesses and individuals coming back."
        />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f) => (
            <motion.div
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                <f.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
