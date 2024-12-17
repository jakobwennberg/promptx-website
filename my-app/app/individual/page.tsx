import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/AnimatedText"
import { ArrowRight } from 'lucide-react'

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-purple-800/70">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
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
              <p className="text-sm text-white/70">Email: info@promptxacademy.com</p>
              
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
    </div>
  )
}

