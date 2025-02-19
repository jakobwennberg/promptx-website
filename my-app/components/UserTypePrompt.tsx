/*
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from 'next/navigation'

export function UserTypePrompt() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Skip the prompt on thank you pages and contact page
    if (pathname.includes('thank-you') || pathname === '/contact') {
      return
    }

    // Check if user has already made a choice
    const userType = localStorage.getItem('promptx-user-type')
    if (!userType && pathname === '/') {
      setIsOpen(true)
    }
  }, [pathname])

  const handleChoice = (type: 'individual' | 'company') => {
    localStorage.setItem('promptx-user-type', type)
    setIsOpen(false)
    if (type === 'individual') {
      router.push('/individual')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full m-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to PromptX Academy</h2>
        <p className="text-gray-600 mb-6">Are you an individual or a company?</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={() => handleChoice('individual')} 
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            Individual
          </Button>
          <Button 
            onClick={() => handleChoice('company')} 
            variant="default"
            className="bg-slate-800 hover:bg-slate-900 text-white px-8"
          >
            Company
          </Button>
        </div>
      </div>
    </div>
  )
}
*/
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function UserTypePrompt() {
  const router = useRouter()

  useEffect(() => {
    // Get the current path
    const path = window.location.pathname
    
    // Only redirect if we're on the root path
    if (path === '/') {
      // For now, always route to the business version
      // We can easily change this back to show the prompt later
      router.push('/')
    }
  }, [router])

  // Return null as we don't need to render anything for now
  return null
}