import { createHmac, timingSafeEqual } from 'node:crypto'

type TokenPayload = {
  email: string
  expiresAt: number
}

function secret() {
  const value = process.env.AUTH_SECRET
  if (!value) throw new Error('Authentication is not configured.')
  return value
}

function signature(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('base64url')
}

export function createAuthToken(email: string, lifetimeSeconds = 15 * 60) {
  const payload = Buffer.from(JSON.stringify({ email, expiresAt: Date.now() + lifetimeSeconds * 1000 })).toString('base64url')
  return `${payload}.${signature(payload)}`
}

export function verifyAuthToken(token: string): TokenPayload | null {
  const [payload, providedSignature] = token.split('.')
  if (!payload || !providedSignature) return null

  const expectedSignature = signature(payload)
  const expected = Buffer.from(expectedSignature)
  const provided = Buffer.from(providedSignature)
  if (expected.length !== provided.length || !timingSafeEqual(expected, provided)) return null

  try {
    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString()) as TokenPayload
    return typeof decoded.email === 'string' && decoded.expiresAt > Date.now() ? decoded : null
  } catch {
    return null
  }
}
