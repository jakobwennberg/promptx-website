import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
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
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/courses">
              Courses
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/resources">
              Resources
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/newsletter">
              Newsletter
            </Link>
            <Link href="/courses">
              <Button className="bg-white text-purple-800 hover:bg-purple-100" variant="secondary">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Course Coming Soon</h1>
            <p className="text-xl text-gray-600 mb-6">We're working hard to bring you this exciting new course!</p>
            <p className="text-gray-600 mb-8">
              Our team of expert instructors is putting the finishing touches on this course.
              Stay tuned for an immersive learning experience that will enhance your AI and prompt engineering skills.
            </p>
            <Link href="/newsletter">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Get Notified When It's Ready
              </Button>
            </Link>
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
                <li><Link href="/courses" className="text-sm text-white/70 hover:text-white">Courses</Link></li>
                <li><Link href="/resources" className="text-sm text-white/70 hover:text-white">Resources</Link></li>
                <li><Link href="/newsletter" className="text-sm text-white/70 hover:text-white">Newsletter</Link></li>
                <li><Link href="#contact" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <p className="text-sm text-white/70">Email: support@promptxacademy.com</p>
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

