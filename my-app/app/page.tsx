import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AnimatedLogos } from "@/components/AnimatedLogos"
import { AnimatedText } from "@/components/AnimatedText"
import { ArrowRight, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import { UserTypePrompt } from "@/components/UserTypePrompt"

export default function Home() {
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
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl xl:text-6xl/none">
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

      <section className="w-full py-12 md:py-24 bg-blue-950/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-white mb-8">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link href="#project-1" className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project 1"
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent p-6 flex items-end">
                <h3 className="text-xl font-semibold text-white">AI Implementation Strategy</h3>
              </div>
            </Link>
            <Link href="#project-2" className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Project 2"
                width={600}
                height={400}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent p-6 flex items-end">
                <h3 className="text-xl font-semibold text-white">Custom AI Solutions</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

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

