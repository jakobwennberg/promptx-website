'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { useMobileMenu } from '@/lib/useMobileMenu'
import { MobileNav } from '@/components/mobile-nav'

interface HeaderProps {
  variant?: 'business' | 'individual'
}

export function Header({ variant = 'business' }: HeaderProps) {
  const { isOpen, toggle } = useMobileMenu()

  const links = [{ href: '/contact', label: 'Book a Call', isButton: true }]

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo only */}
          <Link href="/" className="flex items-center">
            <img
              src="/logos/file.svg"
              alt="BERG AI logo"
              className="h-24 w-24 object-contain"
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={toggle}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}>
                <Button className="bg-white text-black hover:bg-gray-200" variant="secondary">
                  {label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <MobileNav isOpen={isOpen} links={links} variant={variant} />
    </>
  )
}
