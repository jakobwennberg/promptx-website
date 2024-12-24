import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "Build an AI web-app with RAG implementation",
    description: "Learn how to create a powerful AI-driven web application using Retrieval-Augmented Generation (RAG) techniques.",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Fundamentals of Prompt Engineering",
    description: "Master the art of crafting effective prompts for various AI models and applications.",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Advanced NLP Techniques",
    description: "Dive deep into Natural Language Processing techniques and their applications in AI.",
    level: "Advanced"
  }
]

export default function IndividualCoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Our Courses</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{course.level}</span>
                </div>
                <Link 
                  href={course.id === 1 ? "/individual/courses/rag-implementation" : "/individual/courses/coming-soon"}
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}