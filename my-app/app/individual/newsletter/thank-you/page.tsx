import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsletterThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">Thank You for Subscribing!</h1>
            <p className="text-gray-600 mb-6">
              We're excited to have you join our community. You'll now receive our latest updates, insights, and exclusive content straight to your inbox.
            </p>
            <Link href="/individual">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
