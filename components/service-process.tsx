'use client'

import { Clock3, HeadphonesIcon, PackageCheck, ShieldCheck } from 'lucide-react'

import { Reveal, RevealStagger } from '@/components/reveal'

const process = [
  { icon: PackageCheck, title: 'Book', text: 'Share your pickup and delivery details and receive a transparent quote.' },
  { icon: Clock3, title: 'Pickup', text: 'Our team collects your shipment at a time that works for you.' },
  { icon: ShieldCheck, title: 'Transit', text: 'Goods are handled securely and monitored throughout the journey.' },
  { icon: HeadphonesIcon, title: 'Delivery', text: 'Safe, on-time delivery with support available every step of the way.' },
]

export function ServiceProcess() {
  return (
    <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {process.map((step, i) => {
        const Icon = step.icon

        return (
          <Reveal key={step.title} delay={i * 0.08}>
            <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
              <span className="absolute right-6 top-6 font-serif text-4xl font-bold text-muted/60">
                0{i + 1}
              </span>
              <span className="flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        )
      })}
    </RevealStagger>
  )
}
