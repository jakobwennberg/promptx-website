'use client'

import { useState } from 'react'
import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { EnrollmentModal } from "@/components/ui/enrollment-modal"

export default function RAGImplementationCoursePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const courseDetails = {
    id: 1,
    name: "Build an AI web-app with RAG implementation",
    description: "Learn how to create a powerful AI-driven web application using Retrieval-Augmented Generation (RAG) techniques.",
    modules: [
      {
        title: "Introduction to RAG",
        topics: [
          "Understanding RAG architecture",
          "Benefits and use cases",
          "Setting up your development environment"
        ]
      },
      {
        title: "Building the Backend",
        topics: [
          "API design and implementation",
          "Document processing and indexing",
          "Vector database integration"
        ]
      },
      {
        title: "Frontend Development",
        topics: [
          "React.js fundamentals",
          "UI/UX best practices",
          "Real-time updates and notifications"
        ]
      }
    ]
  }

  const handleEnrollClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main className="container mx-auto px-4 py-12">
        <Link href="/individual/courses" className="inline-flex items-center text-white hover:text-purple-200 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">{courseDetails.name}</h1>
            <p className="text-gray-600 mb-6">{courseDetails.description}</p>
            
            <div className="space-y-8 mb-8">
              {courseDetails.modules.map((module, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h2 className="text-xl font-semibold text-purple-800 mb-3">
                    Module {index + 1}: {module.title}
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
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
        onClose={() => setIsModalOpen(false)}
        courseId={courseDetails.id}
        courseName={courseDetails.name}
      />
    </div>
  )
}