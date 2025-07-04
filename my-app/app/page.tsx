'use client'

import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedLogos } from "@/components/AnimatedLogos"
import { AnimatedText } from "@/components/AnimatedText"
import {
  ArrowRight,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        {/* Hero */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-light tracking-tighter text-white sm:text-5xl xl:text-7xl/none">
              Experts in
              <br />
              <AnimatedText />
            </h1>
          </div>
        </section>

        {/* Partner logos */}
        <section className="w-full py-8 md:py-16 lg:py-24 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-light tracking-wide text-white/70 mb-4 uppercase">
              GENERATIVE AI COMPANIES WE WORK WITH
            </p>
            <AnimatedLogos />
          </div>
        </section>

        {/* Intro copy */}
        <section className="w-full pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-20">
            <h2 className="text-3xl font-light tracking-tighter text-white sm:text-4xl md:text-5xl">
              How can AI transform your business today?
            </h2>
            <div className="space-y-4">
              <p className="text-lg font-light text-white/80">
                Our mission is to help businesses harness the power of AI and stay ahead in the rapidly evolving digital landscape.
              </p>
              <p className="text-lg font-light text-white/80">
                As AI continues to reshape industries, how will your business adapt and thrive? We combine technical expertise with strategic insight to guide you through your AI journey – wherever you are in the process.
              </p>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="w-full pt-12 pb-24 lg:pt-20 lg:pb-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <h2 className="text-3xl font-light tracking-tighter text-white sm:text-4xl md:text-5xl">
                Real-World Impact
              </h2>
              <p className="text-lg font-light text-white/80 lg:pr-16">
                See how we've helped businesses unlock AI-driven efficiency and success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mt-12">
              {[
                {
                  title: 'Licab AB',
                  desc: 'Automated client meeting summaries reducing post-meeting documentation time by 75%',
                  bullets: [
                    'Implemented AI meeting assistant',
                    '100+ hours saved monthly',
                    '98% accuracy in summary generation',
                  ],
                },
                {
                  title: 'Eureka Creative Agency',
                  desc: 'AI upskilling program for content team resulting in ~3× faster campaign creation',
                  bullets: ['10 team members trained', 'ROI achieved within 2 months'],
                },
                {
                  title: 'EGH Bygg AB',
                  desc: 'Customer service automation leading to 24/7 support capability and 15-minute response times',
                  bullets: [
                    '80% queries automated',
                    '65% cost reduction',
                    'Customer satisfaction up by 45%',
                  ],
                },
              ].map((c) => (
                <div key={c.title} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <h4 className="text-xl font-medium text-white mb-4">{c.title}</h4>
                  <p className="text-white/80 mb-4 font-light">{c.desc}</p>
                  <ul className="text-white/60 font-light space-y-1 text-sm list-disc list-inside">
                    {c.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting offer */}
        <section className="w-full py-16 bg-black text-white border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              Hands-on AI Expertise, On Demand
            </h2>
            <p className="mt-4 text-lg font-light text-white/80">
              Get direct access to experienced AI architects and product strategists—for rapid audits,
              model selection, and implementation troubleshooting.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { label: 'Rate', value: '$300/hr', sub: 'one-off or retainer' },
                { label: 'Typical turnaround', value: '< 48 h', sub: 'for urgent issues' },
                { label: 'First call', value: 'Free 20 min', sub: 'so we can scope accurately' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-white/10 rounded-lg p-6">
                  <p className="text-sm uppercase tracking-wider text-white/70">{label}</p>
                  <p className="text-2xl font-semibold text-white mt-2">{value}</p>
                  <p className="text-sm text-white/60">{sub}</p>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <Button className="mt-10 bg-white text-black hover:bg-gray-200 h-14 px-12 text-xl font-light">
                Schedule Free Call <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-white">About Us</h4>
              <p className="text-sm font-light text-white/70">
                BERG AI is your partner in AI innovation and transformation.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-white">Quick Links</h4>
              <Link href="/contact" className="text-sm font-light text-white/70 hover:text-white">
                Contact
              </Link>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-white">Contact Us</h4>
              <p className="text-sm font-light text-white/70">Email: info@bergai.com</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-medium text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: LinkedIn, href: '#' },
                  { icon: Instagram, href: '#' },
                ].map(({ icon: Icon, href }) => (
                  <Link key={href} href={href} className="text-white/70 hover:text-white">
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm font-light text-white/70">
              &copy; 2024 BERG AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
