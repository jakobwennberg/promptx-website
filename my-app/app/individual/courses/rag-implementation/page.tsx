'use client'

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { EnrollmentModal } from "@/components/ui/enrollment-modal"

export default function RAGImplementationCoursePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const courseDetails = {
    id: 1,
    name: "Build an AI web-app with RAG implementation"
  }

  const handleEnrollClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      {/* Header section remains the same */}
      <main className="container mx-auto px-4 py-12">
        <Link href="/individual/courses" className="inline-flex items-center text-white hover:text-purple-200 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">{courseDetails.name}</h1>
            <p className="text-gray-600 mb-6">Learn how to create a powerful AI-driven web application using Retrieval-Augmented Generation (RAG) techniques.</p>
            
            {/* Course content sections remain the same */}
            
            <Button 
              onClick={handleEnrollClick} 
              className="w-full bg-purple-600 text-white hover:bg-purple-700"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </main>

      <EnrollmentModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        courseId={courseDetails.id}
        courseName={courseDetails.name}
      />

      {/* Footer section remains the same */}
    </div>
  )
}