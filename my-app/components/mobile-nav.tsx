// components/mobile-nav.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
  links: Array<{
    href: string
    label: string
    isButton?: boolean
  }>
  variant?: 'business' | 'individual'
}

export function MobileNav({ isOpen, links, variant = 'business' }: MobileNavProps) {
  const bgColor = variant === 'business' ? 'bg-[#0a192f]' : 'bg-purple-800'
  const buttonColor = variant === 'business'
    ? 'bg-white text-blue-950 hover:bg-blue-50'
    : 'bg-white text-purple-800 hover:bg-purple-100'

  return (
    <div 
      className={cn(
        `fixed inset-0 top-16 ${bgColor} z-50 lg:hidden transition-transform duration-300 ease-in-out`,
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <nav className="flex flex-col space-y-4 p-4">
        {links.map((link, index) => 
          link.isButton ? (
            <Link key={index} href={link.href}>
              <Button 
                className={`w-full ${buttonColor} justify-center`}
                variant="secondary"
              >
                {link.label}
              </Button>
            </Link>
          ) : (
            <Link 
              key={index}
              className="text-base font-medium text-white hover:text-gray-200" 
              href={link.href}
            >
              {link.label}
            </Link>
          )
        )}
      </nav>
    </div>
  )
}