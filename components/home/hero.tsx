'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const badges = [
  { icon: ShieldCheck, label: 'Secure Handling' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: MapPin, label: 'Nationwide' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-logistics.png"
          alt="Yuslove Logistics fleet of delivery trucks on the highway at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081026]/95 via-[#0b1836]/85 to-[#0b1836]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060b1c] via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
          >
            Delivering Trust. Moving Excellence.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Fast, Reliable &amp; Secure{' '}
            <span className="text-gold">Logistics Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            Yuslove Logistics provides dependable logistics, courier, transportation and delivery
            services across Nigeria. We are committed to safe handling, timely delivery, and
            outstanding customer satisfaction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              render={<Link href="/contact" />}
              className="h-12 gap-2 px-7 text-base shadow-lg shadow-primary/30"
            >
              Get Started
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              render={<Link href="/contact" />}
              className="h-12 gap-2 border-white/30 bg-white/5 px-7 text-base text-white backdrop-blur-sm hover:bg-white/15 hover:text-white dark:border-white/30 dark:bg-white/5"
            >
              <Phone className="size-4" />
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-white/85">
                <b.icon className="size-4 text-gold" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            className="h-2 w-1 rounded-full bg-gold"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
