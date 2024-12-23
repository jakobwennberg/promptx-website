'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedLogos } from "@/components/AnimatedLogos"
import { AnimatedText } from "@/components/AnimatedText"
import { ArrowRight, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Menu } from 'lucide-react'
import { UserTypePrompt } from "@/components/UserTypePrompt"
import { MobileNav } from "@/components/mobile-nav"
import { useMobileMenu } from "@/lib/useMobileMenu"

export default function Home() {
  const { isOpen, toggle } = useMobileMenu()

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
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggle}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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

        {/* Mobile Navigation */}
        <MobileNav isOpen={isOpen} />
      </header>

      <main>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-7xl/none mb-4">
                Experts in
                <br />
                <AnimatedText />
              </h1>
              <p className="mt-4 max-w-[600px] text-base md:text-xl text-white/80">
                Unlock your potential in AI and prompt engineering. Join our community of learners and innovators.
              </p>
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
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-white">
                  How can AI transform your business today?
                </h2>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-base md:text-lg text-white/80">
                  Our mission is to help businesses harness the power of AI and stay ahead in the rapidly evolving digital landscape.
                </p>
                <p className="text-base md:text-lg text-white/80">
                  As AI continues to reshape industries, how will your business adapt and thrive? We combine technical expertise with strategic insight to guide you through your AI journey - wherever you are in the process.
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
                >
                  LEARN MORE <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 bg-[#000435]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-sm text-white/70">&copy; 2024 PromptX Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <UserTypePrompt />
    </div>
  )
}