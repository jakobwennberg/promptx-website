import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedLogos } from "@/components/AnimatedLogos"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700">
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-blue-800/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <span className="text-2xl font-bold text-white">PromptX</span>
            <span className="text-2xl font-light text-white ml-1">Academy</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#courses">
              Courses
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium text-white hover:underline underline-offset-4" href="#blog">
              Blog
            </Link>
            <Button className="bg-white text-blue-700 hover:bg-blue-50" variant="secondary">
              Contact Us
            </Button>
          </nav>
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <p className="text-sm font-semibold tracking-wide text-white uppercase">Welcome to</p>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-7xl/none">
              Experts in
              <br />
              Prompt Engineering
            </h1>
            <p className="max-w-[600px] text-white md:text-xl">
              Combining deep technical expertise with creativity, we transform your AI interactions into business value.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Trusted by Industry Leaders</h2>
          <AnimatedLogos />
        </div>
      </section>
    </div>
  )
}

