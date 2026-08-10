import {
  Package,
  Building2,
  MapPinned,
  Zap,
  Truck,
  Warehouse,
  DoorOpen,
  CalendarClock,
  ShoppingCart,
  Timer,
  ShieldCheck,
  Wallet,
  Globe2,
  Users,
  Headphones,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export type Feature = { icon: LucideIcon; title: string; description: string }
export type Service = { icon: LucideIcon; title: string; description: string }

export const whyChooseUs: Feature[] = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Optimised routes and a responsive fleet get your shipments moving without delay.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe Handling',
    description: 'Every parcel is handled with care and tracked end-to-end for total peace of mind.',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Transparent, competitive rates with no hidden charges — premium service, fair cost.',
  },
  {
    icon: Globe2,
    title: 'Nationwide Coverage',
    description: 'From Lagos to every corner of Nigeria, we deliver where your business needs to be.',
  },
  {
    icon: Users,
    title: 'Professional Team',
    description: 'Trained, courteous logistics experts committed to getting it right the first time.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    description: 'Real people, ready to help you around the clock, whenever you need us.',
  },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Deliveries' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Business Partners' },
  { value: 99, suffix: '%', label: 'On-Time Delivery' },
]

export const featuredServices: Service[] = [
  {
    icon: Package,
    title: 'Parcel Delivery',
    description: 'Reliable pickup and delivery of parcels of every size, handled with care.',
  },
  {
    icon: Building2,
    title: 'Corporate Logistics',
    description: 'Tailored supply-chain solutions that keep your business moving efficiently.',
  },
  {
    icon: MapPinned,
    title: 'Interstate Delivery',
    description: 'Seamless movement of goods between states, safely and on schedule.',
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description: 'Time-critical shipments delivered at speed, when every minute counts.',
  },
  {
    icon: Truck,
    title: 'Pickup & Delivery',
    description: 'Convenient door-to-door pickup and drop-off tailored to your schedule.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Distribution',
    description: 'Secure storage and streamlined distribution from our managed facilities.',
  },
]

export const allServices: Service[] = [
  {
    icon: Package,
    title: 'Parcel Delivery',
    description: 'Fast, safe delivery of parcels of any size with real-time tracking and careful handling.',
  },
  {
    icon: DoorOpen,
    title: 'Door-to-Door Delivery',
    description: 'We collect from your doorstep and deliver directly to the recipient — effortless and secure.',
  },
  {
    icon: Timer,
    title: 'Same-Day Delivery',
    description: 'Urgent shipment? We move it within the same day so you never miss a deadline.',
  },
  {
    icon: MapPinned,
    title: 'Interstate Logistics',
    description: 'Dependable long-haul transport of goods across every state in Nigeria.',
  },
  {
    icon: Building2,
    title: 'Business Logistics',
    description: 'Scalable logistics support designed around the unique needs of your business.',
  },
  {
    icon: Users,
    title: 'Corporate Logistics',
    description: 'Enterprise-grade supply-chain management with dedicated account handling.',
  },
  {
    icon: Warehouse,
    title: 'Warehouse Distribution',
    description: 'Secure warehousing, inventory management and efficient distribution networks.',
  },
  {
    icon: Truck,
    title: 'Pickup Services',
    description: 'Flexible, scheduled pickups that fit seamlessly into your operations.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Delivery',
    description: 'Last-mile delivery built for online sellers — fast, trackable and customer-friendly.',
  },
  {
    icon: CalendarClock,
    title: 'Scheduled Delivery',
    description: 'Plan deliveries in advance with precise, reliable time-window scheduling.',
  },
]

export const coreValues: Feature[] = [
  { icon: ShieldCheck, title: 'Integrity', description: 'We do the right thing, honestly and transparently, every single time.' },
  { icon: Truck, title: 'Reliability', description: 'Consistent, dependable service you can build your business around.' },
  { icon: Users, title: 'Customer Satisfaction', description: 'Your experience is at the heart of every decision we make.' },
  { icon: Rocket, title: 'Excellence', description: 'We hold ourselves to the highest standards in everything we deliver.' },
  { icon: Zap, title: 'Innovation', description: 'We embrace smarter tools and processes to serve you better.' },
  { icon: ShieldCheck, title: 'Accountability', description: 'We take ownership and stand behind every shipment we handle.' },
]

export const testimonials = [
  {
    quote:
      'Yuslove Logistics transformed how we ship to our customers. Fast, reliable and always professional — they feel like part of our team.',
    name: 'Amaka Okafor',
    role: 'Founder, Bloom Boutique',
  },
  {
    quote:
      'Their interstate delivery is a game changer for our distribution. Every shipment arrives safely and on time, without fail.',
    name: 'Chidi Nwosu',
    role: 'Operations Lead, NorthGate Trading',
  },
  {
    quote:
      'Excellent customer support and transparent pricing. I always know exactly where my parcels are. Highly recommended.',
    name: 'Fatima Bello',
    role: 'E-commerce Seller',
  },
]

export const faqs = [
  {
    question: 'What areas do you deliver to?',
    answer:
      'We provide nationwide coverage across every state in Nigeria, including same-day options within major cities and reliable interstate logistics.',
  },
  {
    question: 'How can I track my shipment?',
    answer:
      'Once your parcel is picked up, our team keeps you updated at every stage. Reach out via WhatsApp or email at any time for a real-time status update.',
  },
  {
    question: 'Do you handle fragile or high-value items?',
    answer:
      'Absolutely. Every shipment is handled with care, and fragile or high-value items receive specialised packaging and secure handling throughout transit.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Simply contact us through the form on our Contact page, WhatsApp, or email with your pickup and delivery details, and we will send you a transparent, competitive quote.',
  },
  {
    question: 'What are your business hours?',
    answer:
      'We operate Monday to Friday, 8:00 AM – 6:00 PM, Saturday 9:00 AM – 4:00 PM, and are closed on Sundays. Our support line is available 24/7 for urgent enquiries.',
  },
]
