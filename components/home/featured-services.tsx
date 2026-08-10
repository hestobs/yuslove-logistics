'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredServices } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { RevealStagger } from '@/components/reveal'
import { Button } from '@/components/ui/button'

export function FeaturedServices() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Services"
          title="Everything you need to move with confidence"
          description="From single parcels to full corporate supply chains, our services are engineered for reliability at every step."
        />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </RevealStagger>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            render={<Link href="/services" />}
            className="h-11 gap-2 px-6 text-base"
          >
            View All Services
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
