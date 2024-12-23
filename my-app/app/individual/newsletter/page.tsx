'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

type FormErrors = {
  email?: string;
  name?: string;
  general?: string;
}

export default function IndividualNewsletterPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (name && name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          name, 
          subscriberType: 'individual' 
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      router.push('/individual/newsletter/thank-you')
    } catch (error) {
      setErrors({
        general: error instanceof Error ? error.message : 'An error occurred'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-purple-800/70">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/individual">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ska%CC%88rmavbild%202024-10-01%20kl.%2016.16.01-UAHiAcUQI1BWafa1VhOgOjB1f50onv.png"
                  alt="PromptX Academy"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">PromptX Academy</span>
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/individual/courses">
              Courses
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/individual/resources">
              Resources
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/individual/newsletter">
              Newsletter
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/individual/blog">
              Blog
            </Link>
            <Link href="/individual/courses">
              <Button className="bg-white text-purple-800 hover:bg-purple-100" variant="secondary">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Subscribe to Our Newsletter</h1>
            <p className="text-gray-600 mb-6">Stay updated with the latest in AI and prompt engineering. Get exclusive content, tutorials, and updates delivered straight to your inbox.</p>
            
            {errors.general && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{errors.general}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  disabled={isSubmitting}
                  className={cn(
                    "w-full",
                    errors.email ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name (Optional)
                </label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full",
                    errors.name ? "border-red-500" : "border-gray-300"
                  )}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 bg-purple-900">
        {/* Footer content remains the same */}
      </footer>
    </div>
  )
}
