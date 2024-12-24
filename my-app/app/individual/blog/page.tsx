import { Header } from "@/components/header"

export default function IndividualBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-purple-800">
      <Header variant="individual" />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">PromptX Academy Blog</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-purple-800 text-lg">Welcome to our blog! Content coming soon.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

