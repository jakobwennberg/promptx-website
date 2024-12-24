import { Header } from "@/components/header"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#0a192f] via-[#112a45] to-[#1a365d]">
      <Header variant="business" />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-950 mb-6">About PromptX Academy</h1>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At PromptX Academy, we are dedicated to empowering businesses with cutting-edge AI knowledge and skills. Our mission is to bridge the gap between advanced AI technologies and practical business applications, enabling companies to harness the full potential of artificial intelligence in their operations and strategies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-blue-950 mb-4">What We Offer</h2>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Expert-led courses on AI implementation and strategy</li>
                <li>Customized training programs for businesses of all sizes</li>
                <li>Hands-on workshops on the latest AI tools and technologies</li>
                <li>Consulting services for AI integration in various industries</li>
                <li>Networking opportunities with AI professionals and thought leaders</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Choose PromptX Academy</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Cutting-edge curriculum updated with the latest AI advancements</li>
                <li>Real-world case studies and applications</li>
                <li>Flexible learning options tailored to your business needs</li>
                <li>Ongoing support and resources for continuous learning</li>
                <li>Strong focus on ethical AI practices and responsible implementation</li>
              </ul>
            </section>

            <section className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-blue-950 mb-4">Ready to Start Your AI Journey?</h2>
              <p className="text-gray-600 mb-6">
                Get in touch with us to learn more about our courses and how we can help your business leverage AI.
              </p>
              <Link href="/contact">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Contact Us Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}