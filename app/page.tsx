import { Hero } from '@/components/home/hero'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Stats } from '@/components/home/stats'
import { FeaturedServices } from '@/components/home/featured-services'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'
import { CtaSection } from '@/components/home/cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Stats />
      <FeaturedServices />
      <Testimonials />
      <Faq />
      <CtaSection />
    </>
  )
}
