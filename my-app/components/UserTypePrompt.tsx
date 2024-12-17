'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { useRouter, usePathname } from 'next/navigation'

export function UserTypePrompt() {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const handleChoice = (type: 'individual' | 'company') => {
    setIsOpen(false)
    if (type === 'individual') {
      router.push('/individual')
    }
    // For company, we'll stay on the current page
  }

  if (!isOpen || pathname === '/contact') return null

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to PromptX Academy</h2>
        <p className="text-gray-600 mb-6">Are you an individual or a company?</p>
        <div className="flex justify-center space-x-4">
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

