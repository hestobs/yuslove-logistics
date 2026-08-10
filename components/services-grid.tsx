'use client'

import { RevealStagger } from '@/components/reveal'
import { ServiceCard } from '@/components/service-card'
import { allServices } from '@/lib/data'

export function ServicesGrid() {
  return (
    <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {allServices.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </RevealStagger>
  )
}
