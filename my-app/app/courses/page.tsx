import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "AI Strategy for Businesses",
    description: "Learn how to develop and implement AI strategies that drive business growth and innovation.",
    level: "Intermediate"
  },
  {
    id: 2,
    title: "Enterprise-Scale Machine Learning",
    description: "Master the techniques for deploying and managing machine learning models at scale in enterprise environments.",
    level: "Advanced"
  },
  {
    id: 3,
    title: "AI Ethics and Governance",
    description: "Explore the ethical considerations and governance frameworks for responsible AI implementation in business.",
    level: "All Levels"
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <Header variant="business" />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Our Courses for Businesses</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden h-[300px] relative">
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-blue-950 mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="text-sm text-gray-500">
                  <span>{course.level}</span>
                </div>
                <div className="absolute bottom-6 right-6">
                  <Link href="/courses/coming-soon">
                    <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}