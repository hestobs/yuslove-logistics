'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'
import { AnimatedCounter } from '@/components/animated-counter'

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20">
      <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 size-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-4xl font-bold tracking-tight text-gold sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/80 sm:text-base">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
