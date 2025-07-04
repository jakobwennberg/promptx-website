import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header variant="business" />
      
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 text-center">
            <h1 className="text-3xl font-light text-black mb-4">Thank You for Contacting Us!</h1>
            <p className="text-gray-600 mb-6 font-light">
              We appreciate you reaching out to BERG AI. Our team will review your message and get back to you as soon as possible.
            </p>
            <p className="text-gray-600 mb-6 font-light">
              In the meantime, feel free to explore more about our AI solutions.
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <Button variant="outline" className="border-black text-black hover:bg-gray-100 font-light">
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