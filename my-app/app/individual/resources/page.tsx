import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function IndividualResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-purple-800 mb-4">PromptX AI Resources</h1>
            <p className="text-xl text-gray-600 mb-6">Coming Soon</p>
            <p className="text-gray-600 mb-8">
              We're working on curating the best AI resources and tips just for you. 
              Stay tuned for expert insights, tool recommendations, and practical guides 
              to enhance your AI journey.
            </p>
            <Link href="/individual/newsletter">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Subscribe for Updates
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
