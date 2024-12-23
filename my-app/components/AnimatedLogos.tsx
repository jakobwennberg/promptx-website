'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"

const logos = [
  {
    src: "/logos/openai.svg",
    alt: "OpenAI",
    width: 160,
    height: 80
  },
  {
    src: "/logos/github.svg",
    alt: "GitHub",
    width: 160,
    height: 80
  },
  {
    src: "/logos/huggingface.svg",
    alt: "Hugging Face",
    width: 160,
    height: 80
  },
  {
    src: "/logos/midjourney.svg",
    alt: "Midjourney",
    width: 160,
    height: 80
  }
]

export function AnimatedLogos() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return
    
    // Clone the scroller content for smooth infinite scroll
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-12 py-8"
      >
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="w-40 h-20 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              width={logo.width}
              height={logo.height}
            />
          </div>
        ))}
      </div>
    </div>
  )
}