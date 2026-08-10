import Link from 'next/link'
import { Truck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2.5', className)} aria-label="Yuslove Logistics home">
      <span className="relative flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm ring-1 ring-gold/40 transition-transform group-hover:scale-105">
        <Truck className="size-5" strokeWidth={2.25} />
        <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-gold ring-2 ring-background" />
      </span>
      <span className={cn('flex flex-col leading-none', textClassName)}>
        <span className="font-serif text-lg font-bold tracking-tight text-foreground">Yuslove</span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold">Logistics</span>
      </span>
    </Link>
  )
}
