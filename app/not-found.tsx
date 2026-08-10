import Link from 'next/link'
import { Home, PackageX, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden px-4 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 size-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-md text-center">
        <span className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
          <PackageX className="size-10" />
        </span>
        <p className="mt-8 font-serif text-6xl font-bold text-primary sm:text-7xl">404</p>
        <h1 className="mt-3 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          This delivery took a wrong turn
        </h1>
        <p className="mt-3 text-pretty text-muted-foreground">
          The page you are looking for could not be found. Let&apos;s get you back on route.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button render={<Link href="/" />} className="h-11 gap-2 px-6">
            <Home className="size-4" />
            Back to Home
          </Button>
          <Button variant="outline" render={<Link href="/contact" />} className="h-11 gap-2 px-6">
            <ArrowLeft className="size-4" />
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
