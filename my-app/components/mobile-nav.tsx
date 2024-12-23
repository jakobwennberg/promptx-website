import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  isOpen: boolean
}

export function MobileNav({ isOpen }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 top-16 bg-[#0a192f]/95 backdrop-blur-sm z-50 lg:hidden">
      <nav className="px-4 py-6 space-y-4">
        <Link 
          className="block text-lg font-medium text-white hover:text-blue-200" 
          href="/courses"
        >
          Courses
        </Link>
        <Link 
          className="block text-lg font-medium text-white hover:text-blue-200" 
          href="/newsletter"
        >
          Newsletter
        </Link>
        <Link 
          className="block text-lg font-medium text-white hover:text-blue-200" 
          href="/about"
        >
          About
        </Link>
        <Link href="/contact">
          <Button className="w-full bg-white text-blue-950 hover:bg-blue-50" variant="secondary">
            Contact Us
          </Button>
        </Link>
      </nav>
    </div>
  )
}