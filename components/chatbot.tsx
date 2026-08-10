'use client'

import { FormEvent, useRef, useState } from 'react'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

import { site } from '@/lib/site'

type Message = {
  id: number
  role: 'assistant' | 'user'
  text: string
}

const suggestions = ['Track a shipment', 'Get a quote', 'Where do you deliver?', 'Business hours']

function getReply(question: string) {
  const normalized = question.toLowerCase()

  if (normalized.includes('track') || normalized.includes('shipment') || normalized.includes('parcel')) {
    return 'For a live shipment update, please send your tracking or waybill number to our support team on WhatsApp. We will check it for you right away.'
  }
  if (normalized.includes('quote') || normalized.includes('price') || normalized.includes('cost')) {
    return 'We can prepare a tailored quote. Send us the pickup location, destination, parcel size or weight, and preferred delivery time on WhatsApp.'
  }
  if (normalized.includes('where') || normalized.includes('deliver') || normalized.includes('coverage')) {
    return 'We provide logistics and delivery services across Nigeria, including same-day options in major cities and interstate delivery nationwide.'
  }
  if (normalized.includes('hour') || normalized.includes('open') || normalized.includes('time')) {
    return 'Our office hours are Monday–Friday, 8:00 AM–6:00 PM, and Saturday, 9:00 AM–4:00 PM. We are closed on Sundays, with urgent support available through WhatsApp.'
  }
  if (normalized.includes('service')) {
    return 'We offer parcel delivery, door-to-door delivery, same-day delivery, interstate logistics, business logistics, warehousing, pickup, e-commerce, and scheduled deliveries.'
  }

  return 'I can help with delivery services, tracking, pricing, coverage, and business hours. For a detailed request, our team is available on WhatsApp.'
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', text: 'Hi! I’m the Yuslove Logistics assistant. How can I help today?' },
  ])
  const nextId = useRef(2)

  const sendMessage = (text: string) => {
    const question = text.trim()
    if (!question) return

    setMessages((current) => [
      ...current,
      { id: nextId.current++, role: 'user', text: question },
      { id: nextId.current++, role: 'assistant', text: getReply(question) },
    ])
    setInput('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <section
          aria-label="Yuslove Logistics chat assistant"
          className="mb-3 flex h-[min(34rem,calc(100vh-8rem))] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        >
          <header className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
                <Bot className="size-5" />
              </span>
              <div>
                <p className="font-semibold">Yuslove Assistant</p>
                <p className="text-xs text-primary-foreground/75">Typically replies instantly</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-md p-1.5 transition-colors hover:bg-primary-foreground/15"
            >
              <X className="size-5" />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/35 p-4">
            {messages.map((message) => (
              <p
                key={message.id}
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.role === 'assistant'
                    ? 'rounded-tl-sm bg-card text-foreground shadow-sm'
                    : 'ml-auto rounded-tr-sm bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </p>
            ))}

            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    className="rounded-full border border-primary/20 bg-card px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-border bg-card p-3">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <label className="sr-only" htmlFor="chat-message">
                Ask a question
              </label>
              <input
                id="chat-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about a delivery..."
                className="min-w-0 flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
                disabled={!input.trim()}
              >
                <Send className="size-4" />
              </button>
            </form>
            <a
              href={`https://wa.me/${site.whatsappIntl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-xs font-medium text-primary hover:underline"
            >
              Need a person? Chat on WhatsApp
            </a>
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={isOpen}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
      >
        {isOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>
    </div>
  )
}
