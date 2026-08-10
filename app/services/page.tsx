import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { CtaSection } from '@/components/home/cta'
import { ServiceProcess } from '@/components/service-process'
import { ServicesGrid } from '@/components/services-grid'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Yuslove Logistics services: parcel delivery, door-to-door, same-day, interstate, corporate logistics, warehouse distribution, e-commerce and scheduled delivery across Nigeria.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumb="Services"
        title="Logistics solutions for every need"
        description="Whether you are shipping a single parcel or managing a complex supply chain, we have a dependable, tailored service ready for you."
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="A complete range of delivery services"
            description="Premium, secure and flexible logistics services designed around the way you do business."
          />
          <ServicesGrid />
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, seamless process"
            description="From booking to doorstep, we make logistics effortless in four straightforward steps."
          />
          <ServiceProcess />
        </div>
      </section>

      <CtaSection />
    </>
  )
}
