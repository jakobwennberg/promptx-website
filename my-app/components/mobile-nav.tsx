import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MobileNavProps {
  isOpen: boolean
}

export function MobileNav({ isOpen }: MobileNavProps) {
  return (
    <div 
      className={cn(
        "fixed inset-0 top-16 bg-[#0a192f] z-50 lg:hidden transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <nav className="flex flex-col space-y-4 p-4">
        <Link 
          className="text-base font-medium text-white" 
          href="/courses"
        >
          Courses
        </Link>
        <Link 
          className="text-base font-medium text-white" 
          href="/newsletter"
        >
          Newsletter
        </Link>
        <Link 
          className="text-base font-medium text-white" 
          href="/about"
        >
          About
        </Link>
        <Link href="/contact">
          <Button 
            className="w-full bg-white text-blue-950 hover:bg-blue-50 justify-center" 
            variant="secondary"
          >
            Contact Us
          </Button>
        </Link>
      </nav>
    </div>
  )
}