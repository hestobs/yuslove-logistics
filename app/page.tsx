import { Hero } from '@/components/home/hero'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Stats } from '@/components/home/stats'
import { FeaturedServices } from '@/components/home/featured-services'
import { Testimonials } from '@/components/home/testimonials'
import { Faq } from '@/components/home/faq'
import { CtaSection } from '@/components/home/cta'

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden bg-[#f7f9fd] bg-[radial-gradient(circle_at_8%_24%,rgba(11,61,145,0.09),transparent_28rem),radial-gradient(circle_at_92%_56%,rgba(212,175,55,0.10),transparent_26rem)] dark:bg-background dark:bg-none">
      <Hero />
      <WhyChooseUs />
      <Stats />
      <FeaturedServices />
      <Testimonials />
      <Faq />
      <CtaSection />
    </div>
  )
}
