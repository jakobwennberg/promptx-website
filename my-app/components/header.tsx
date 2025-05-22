// components/header.tsx
'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useMobileMenu } from "@/lib/useMobileMenu"
import { MobileNav } from "@/components/mobile-nav"

interface HeaderProps {
  variant?: 'business' | 'individual'
}

export function Header({ variant = 'business' }: HeaderProps) {
  const { isOpen, toggle } = useMobileMenu()
  
  const bgColor = variant === 'business' 
    ? 'bg-[#0a192f]' 
    : 'bg-purple-800'
    
  const buttonColor = variant === 'business'
    ? 'bg-white text-blue-950 hover:bg-blue-50'
    : 'bg-white text-purple-800 hover:bg-purple-100'

  const getLinks = () => {
    if (variant === 'business') {
      return [
        { href: '/courses', label: 'Courses' },
        { href: '/newsletter', label: 'Newsletter' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact Us', isButton: true }
      ]
    }
    return [
      { href: '/individual/courses', label: 'Courses' },
      { href: '/individual/resources', label: 'Resources' },
      { href: '/individual/newsletter', label: 'Newsletter' },
      { href: '/individual/blog', label: 'Blog' },
      { href: '/individual/courses', label: 'Get Started', isButton: true }
    ]
  }

  const links = getLinks()

  return (
    <>
      <header className={`sticky top-0 z-50 w-full ${bgColor}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href={variant === 'business' ? '/' : '/individual'}>
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ska%CC%88rmavbild%202024-10-01%20kl.%2016.16.01-UAHiAcUQI1BWafa1VhOgOjB1f50onv.png"
                  alt="PromptX"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-white">PromptX</span>
            </div>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggle}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {links.map((link, index) => 
              link.isButton ? (
                <Link key={index} href={link.href}>
                  <Button className={buttonColor} variant="secondary">
                    {link.label}
                  </Button>
                </Link>
              ) : (
                <Link
                  key={index}
                  className="text-sm font-medium text-white hover:underline underline-offset-4"
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isOpen} links={links} variant={variant} />
    </>
  )
}