import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/AnimatedText"
import { ArrowRight } from 'lucide-react'

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-7xl/none">
                Master
                <br />
                <AnimatedText />
              </h1>
              <p className="mt-4 max-w-[600px] text-white/80 md:text-xl">
                Unlock your potential in AI and prompt engineering. Join our community of learners and innovators.
              </p>
              <Link href="/individual/courses">
                <Button className="mt-8 bg-white text-purple-800 hover:bg-purple-100" size="lg">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-800/50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">Featured Courses</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
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
              ].map((course) => (
                <div key={course.id} className="group relative overflow-hidden rounded-lg bg-purple-900/50 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-white/80 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center text-sm text-white/70 mb-4">
                    <span>{course.level}</span>
                  </div>
                  <Link 
                    href={course.id === 1 ? "/individual/courses/rag-implementation" : "/individual/courses/coming-soon"}
                    className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Why Choose PromptX Academy?
                </h2>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg text-white/80">
                  Our courses are designed by industry experts to give you practical, cutting-edge skills in AI and prompt engineering.
                </p>
                <p className="text-lg text-white/80">
                  Join a vibrant community of learners, participate in workshops, and get personalized feedback on your projects.
                </p>
                <Link 
                  href="#learn-more" 
                  className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
                >
                  LEARN MORE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}