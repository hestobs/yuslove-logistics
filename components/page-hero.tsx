import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  description: string
  breadcrumb: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary pt-28 pb-16 text-primary-foreground sm:pt-32 sm:pb-20">
      <div className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-gold/10 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <nav className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-gold">{breadcrumb}</span>
          </nav>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
