import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'

export const metadata: Metadata = { title: 'Create Account' }

export default function SignUpPage() { return <main className="mx-auto max-w-md px-4 py-20 sm:py-28"><AuthForm mode="sign-up" /></main> }
