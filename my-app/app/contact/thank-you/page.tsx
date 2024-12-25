import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <Header variant="business" />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-blue-950 mb-4">Thank You for Contacting Us!</h1>
            <p className="text-gray-600 mb-6">
              We appreciate you reaching out to PromptX Academy. Our team will review your message and get back to you as soon as possible.
            </p>
            <p className="text-gray-600 mb-6">
              In the meantime, feel free to explore our courses or check out our latest resources.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/courses">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
