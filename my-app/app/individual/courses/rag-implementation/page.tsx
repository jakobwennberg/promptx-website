'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { EnrollmentModal } from "@/components/EnrollmentModal"

export default function RAGImplementationCoursePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEnrollClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSubmitEmail = (email: string) => {
    // Here you would typically send the email to your backend
    console.log(`Enrolling email: ${email}`)
    // For now, we'll just close the modal
    setIsModalOpen(false)
    // You might want to show a success message here
    alert("Thank you for enrolling! We'll send course details to your email soon.")
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
        <Link href="/individual/courses" className="inline-flex items-center text-white hover:text-purple-200 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Build an AI web-app with RAG implementation</h1>
            <p className="text-gray-600 mb-6">Learn how to create a powerful AI-driven web application using Retrieval-Augmented Generation (RAG) techniques.</p>
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-purple-600">Intermediate</span>
              <span className="text-sm font-medium text-purple-600">8 weeks</span>
            </div>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Course Overview</h2>
            <p className="text-gray-600 mb-6">This course will guide you through the process of building a web application that leverages the power of Retrieval-Augmented Generation (RAG). You'll learn how to combine the strengths of large language models with external knowledge bases to create more accurate and context-aware AI applications.</p>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">What You'll Learn</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Understanding RAG architecture and its benefits</li>
              <li>Setting up a knowledge base for retrieval</li>
              <li>Implementing efficient retrieval mechanisms</li>
              <li>Integrating retrieved information with language models</li>
              <li>Building a user-friendly web interface for your RAG application</li>
              <li>Optimizing performance and handling edge cases</li>
              <li>Deploying your RAG-powered web application</li>
            </ul>
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">Prerequisites</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Basic understanding of Python programming</li>
              <li>Familiarity with web development concepts</li>
              <li>Knowledge of fundamental machine learning concepts</li>
            </ul>
            <Button onClick={handleEnrollClick} className="w-full bg-purple-600 text-white hover:bg-purple-700">
              Enroll Now
            </Button>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 bg-purple-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <p className="text-sm text-white/70">PromptX Academy is your gateway to mastering AI and prompt engineering.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/individual/courses" className="text-sm text-white/70 hover:text-white">Courses</Link></li>
                <li><Link href="/individual/resources" className="text-sm text-white/70 hover:text-white">Resources</Link></li>
                <li><Link href="/individual/newsletter" className="text-sm text-white/70 hover:text-white">Newsletter</Link></li>
                <li><Link href="/individual/blog" className="text-sm text-white/70 hover:text-white">Blog</Link></li>
                <li><Link href="/individual/contact" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <p className="text-sm text-white/70">Email: support@promptxacademy.com</p>
              <p className="text-sm text-white/70">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                  <Link key={social} href="#" className="text-white/70 hover:text-white">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white/70 hover:bg-white rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/70">&copy; 2024 PromptX Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <EnrollmentModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitEmail}
      />
    </div>
  )
}

