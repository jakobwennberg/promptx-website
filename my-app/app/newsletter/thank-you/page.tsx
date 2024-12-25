import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsletterThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <Header variant="business" />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-blue-950 mb-4">Thank You for Subscribing!</h1>
            <p className="text-gray-600 mb-6">
              We're excited to have your company join our community. You'll now receive our latest updates, insights, and exclusive content straight to your inbox.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
