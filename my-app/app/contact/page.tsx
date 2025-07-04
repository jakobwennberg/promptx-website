'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { cn } from '@/lib/utils'

type FormErrors = {
  email?: string
  name?: string
  message?: string
  general?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  /* ---------- helpers ---------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.name) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    }

    if (!formData.message) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send message')

      window.location.href = '/contact/thank-you'
    } catch (err) {
      setErrors({
        general:
          err instanceof Error ? err.message : 'An unexpected error occurred'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ---------- render ---------- */

  return (
    <div className="min-h-screen bg-black">
      <Header variant="business" />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-light text-black mb-4">Contact Us</h1>
            <p className="text-gray-600 mb-6 font-light">
              Have a question or want to learn more about our services? Get in
              touch with us!
            </p>

            {errors.general && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errors.general}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* -- name -- */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full font-light',
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 font-light">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* -- email -- */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                  className={cn(
                    'w-full font-light',
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 font-light">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* -- message -- */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                  className={cn(
                    'w-full min-h-[100px] font-light',
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  )}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 font-light">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* -- submit -- */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2"
              >
                {isSubmitting && (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                )}
                <span>{isSubmitting ? 'Sending…' : 'Send Message'}</span>
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
