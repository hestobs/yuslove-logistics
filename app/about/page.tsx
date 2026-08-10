import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal, RevealStagger } from '@/components/reveal'
import { Button } from '@/components/ui/button'
import { coreValues } from '@/lib/data'
import { CtaSection } from '@/components/home/cta'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Yuslove Logistics — our story, mission, vision and the core values that drive dependable, secure logistics across Nigeria.',
}

const strengths = [
  'Dedicated team of trained logistics professionals',
  'Nationwide reach with reliable interstate coverage',
  'Transparent pricing with no hidden charges',
  'End-to-end handling with a focus on safety',
  'Responsive 24/7 customer support',
  'Long-term relationships built on honesty and trust',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Yuslove Logistics"
        breadcrumb="About"
        title="Moving Nigeria forward, one delivery at a time"
        description="We are a logistics partner built on trust, speed and a relentless commitment to getting your goods where they need to be — safely and on time."
      />

      {/* Company Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/warehouse-team.png"
                alt="Yuslove Logistics team managing parcels in a modern warehouse"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Our Story
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built on reliability, driven by excellence
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Yuslove Logistics is committed to providing professional, affordable, secure, and
                dependable logistics solutions across Nigeria. We help businesses and individuals
                transport goods safely and efficiently.
              </p>
              <p>
                We build long-term customer relationships through honesty, reliability, and
                excellent service — treating every shipment as if it were our own. From the first
                pickup to the final mile, our team is dedicated to delivering an experience that
                earns your trust again and again.
              </p>
            </div>
            <Button render={<Link href="/services" />} className="mt-7 h-11 gap-2 px-6">
              Explore Our Services
              <ArrowRight className="size-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                text: 'To provide reliable logistics solutions that exceed customer expectations through professionalism, speed, safety, and innovation.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                text: "To become Nigeria's most trusted logistics company, recognized for exceptional customer experience and operational excellence.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-10">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <item.icon className="size-7" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-foreground">{item.label}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                  <span className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-gold/10 blur-2xl" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="The principles behind every delivery"
            description="These values shape our culture and guide the way we serve every customer, every day."
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  <v.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Why Work With Us
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              A logistics partner you can count on
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Choosing Yuslove Logistics means partnering with a team that treats your goods, your
              deadlines and your reputation as their own. Here is what sets us apart:
            </p>
            <ul className="mt-7 space-y-3.5">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-sm leading-relaxed text-foreground/90 sm:text-base">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/images/delivery-fleet.png"
                alt="Yuslove Logistics delivery fleet parked at a distribution center"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
