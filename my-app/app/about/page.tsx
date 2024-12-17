import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-[#0a192f]/70">
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
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/newsletter">
              Newsletter
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="/about">
              About
            </Link>
            <Link href="/contact">
              <Button className="bg-white text-blue-950 hover:bg-blue-50" variant="secondary">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About PromptX Academy</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At PromptX Academy, we are dedicated to empowering businesses with cutting-edge AI knowledge and skills. Our mission is to bridge the gap between advanced AI technologies and practical business applications, enabling companies to harness the full potential of artificial intelligence in their operations and strategies.
            </p>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Expert-led courses on AI implementation and strategy</li>
              <li>Customized training programs for businesses of all sizes</li>
              <li>Hands-on workshops on the latest AI tools and technologies</li>
              <li>Consulting services for AI integration in various industries</li>
              <li>Networking opportunities with AI professionals and thought leaders</li>
            </ul>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              Our team consists of industry veterans, AI researchers, and experienced educators who are passionate about making AI accessible and actionable for businesses. With decades of combined experience in both academia and industry, our experts bring a unique blend of theoretical knowledge and practical insights to every course and consultation.
            </p>
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Choose PromptX Academy</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>Cutting-edge curriculum updated with the latest AI advancements</li>
              <li>Real-world case studies and applications</li>
              <li>Flexible learning options tailored to your business needs</li>
              <li>Ongoing support and resources for continuous learning</li>
              <li>Strong focus on ethical AI practices and responsible implementation</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="w-full py-12 bg-[#000435]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <p className="text-sm text-white/70">PromptX Academy is your partner in AI innovation and education.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/courses" className="text-sm text-white/70 hover:text-white">Courses</Link></li>
                <li><Link href="/newsletter" className="text-sm text-white/70 hover:text-white">Newsletter</Link></li>
                <li><Link href="/about" className="text-sm text-white/70 hover:text-white">About</Link></li>
                <li><Link href="/contact" className="text-sm text-white/70 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <p className="text-sm text-white/70">Email: info@promptxacademy.com</p>
              <p className="text-sm text-white/70">Phone: +1 (555) 123-4567</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/70 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </Link>
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

