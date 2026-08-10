import type React from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingActions } from '@/components/floating-actions'
import { Chatbot } from '@/components/chatbot'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yuslove-logistics.vercel.app'),
  title: {
    default: 'Yuslove Logistics | Delivering Trust. Moving Excellence.',
    template: '%s | Yuslove Logistics',
  },
  description:
    'Yuslove Logistics provides fast, reliable and secure logistics, courier, transportation and delivery services across Nigeria. Safe handling, timely delivery, outstanding customer satisfaction.',
  keywords: [
    'logistics Nigeria',
    'courier service',
    'parcel delivery',
    'interstate delivery',
    'express delivery',
    'warehouse distribution',
    'Yuslove Logistics',
  ],
  authors: [{ name: 'Yuslove Logistics' }],
  openGraph: {
    title: 'Yuslove Logistics | Delivering Trust. Moving Excellence.',
    description:
      'Fast, reliable and secure logistics solutions across Nigeria. Parcel delivery, corporate logistics, interstate and express delivery.',
    type: 'website',
    locale: 'en_NG',
    siteName: 'Yuslove Logistics',
    images: [{ url: '/images/hero-logistics.png', width: 1200, height: 630, alt: 'Yuslove Logistics fleet' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuslove Logistics | Delivering Trust. Moving Excellence.',
    description: 'Fast, reliable and secure logistics solutions across Nigeria.',
    images: ['/images/hero-logistics.png'],
    creator: '@hestobs',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingActions />
          <Chatbot />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
