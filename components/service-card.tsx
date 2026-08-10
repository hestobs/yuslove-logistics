'use client'

import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export function ServiceCard({
  icon: Icon,
  title,
  description,
  showLink = true,
}: {
  icon: LucideIcon
  title: string
  description: string
  showLink?: boolean
}) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl"
    >
      <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </span>
      <h3 className="mt-5 font-serif text-xl font-bold text-foreground">{title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {showLink && (
        <Link
          href="/services"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-gold"
        >
          Learn More
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </motion.article>
  )
}
