'use client'

import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedLogos } from "@/components/AnimatedLogos"
import { AnimatedText } from "@/components/AnimatedText"
import { ArrowRight, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import { UserTypePrompt } from "@/components/UserTypePrompt"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <Header />

      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-7xl/none">
                Experts in
                <br />
                <AnimatedText />
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-16 lg:py-24 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedLogos />
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  How can AI transform your business today?
                </h2>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg text-white/80">
                  Our mission is to help businesses harness the power of AI and stay ahead in the rapidly evolving digital landscape.
                </p>
                <p className="text-lg text-white/80">
                  As AI continues to reshape industries, how will your business adapt and thrive? We combine technical expertise with strategic insight to guide you through your AI journey - wherever you are in the process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl mb-12">What We Offer</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-950 text-xl mb-3">AI Training & Keynote Sessions</h4>
                <p className="text-gray-600">
                  <span className="font-medium block mb-2">Master AI and Prompt Engineering with Experts</span>
                  We offer practical and inspiring AI training tailored for businesses and organizations. Our keynotes and workshops provide the knowledge and tools needed to effectively integrate AI into your daily work.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-950 text-xl mb-3">AI Strategy & Implementation</h4>
                <p className="text-gray-600">
                  <span className="font-medium block mb-2">Turn AI into a Competitive Advantage</span>
                  We help businesses identify and implement AI solutions that save time, boost productivity, and drive innovation. From strategic planning to hands-on AI integration, we ensure AI works for your business.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-950 text-xl mb-3">Hands-on Workshops & Coaching</h4>
                <p className="text-gray-600">
                  <span className="font-medium block mb-2">Learn How to Use AI in Practice</span>
                  Our interactive workshops equip you and your team with the skills to maximize AI's potential. Whether you're a beginner or already using AI, we customize our sessions to deliver immediate business value.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-950 text-xl mb-3">AI Networking & Community</h4>
                <p className="text-gray-600">
                  <span className="font-medium block mb-2">Be Part of the AI Future</span>
                  Join our network to connect with industry leaders and AI professionals. Gain exclusive insights, access real-world case studies, and stay ahead in the fast-moving world of AI.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                  Real-World Impact
                </h2>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-lg text-white/80">
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">Licab AB</h4>
                <p className="text-white/80 mb-4">Automated client meeting summaries reducing post-meeting documentation time by 75%</p>
                <div className="text-white/60">
                  <p className="text-sm">• Implemented AI meeting assistant</p>
                  <p className="text-sm">• 100+ hours saved monthly</p>
                  <p className="text-sm">• 98% accuracy in summary generation</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">Eureka Creative Agency</h4>
                <p className="text-white/80 mb-4">AI upskilling program for content team resulting in ~3x faster campaign creation</p>
                <div className="text-white/60">
                  <p className="text-sm">• 10 team members trained</p>
                  <p className="text-sm">• ROI achieved within 2 months</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h4 className="text-xl font-semibold text-white mb-4">EGH Bygg AB</h4>
                <p className="text-white/80 mb-4">Customer service automation leading to 24/7 support capability and 15-minute response times</p>
                <div className="text-white/60">
                  <p className="text-sm">• 80% queries automated</p>
                  <p className="text-sm">• 65% cost reduction</p>
                  <p className="text-sm">• Customer satisfaction up by 45%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-950 sm:text-4xl md:text-5xl mb-8">Ready to Start Your AI Journey?</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Get in touch with us to learn more about our courses and how we can help your business leverage AI. Our team of experts is ready to guide you through your AI transformation journey.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 text-white hover:bg-blue-700 h-14 px-12 text-xl">
                  Contact Us Now <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-[#000435]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">About Us</h4>
              <p className="text-sm text-white/70">
                PromptX Academy is your partner in AI innovation and education.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/courses" className="text-sm text-white/70 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/newsletter" className="text-sm text-white/70 hover:text-white">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-white/70 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/70 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <p className="text-sm text-white/70">Email: info@promptxacademy.com</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-white/70 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <LinkedIn className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/70 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/70">
              &copy; 2024 PromptX Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <UserTypePrompt />
    </div>
  )
}