'use client'

import Image from "next/image"
import { useEffect, useRef } from "react"

const logos = [
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
  "/placeholder-logo.svg",
]

export function AnimatedLogos() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current) return
    
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })
  }, [])

  return (
    <div className="scroller relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div
        ref={scrollerRef}
        className="flex w-max min-w-full shrink-0 animate-scroll flex-nowrap gap-8 py-4"
      >
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="aspect-[2/1] w-40 max-w-none object-contain filter brightness-0 invert opacity-60"
            width={160}
            height={80}
          />
        ))}
      </div>
    </div>
  )
}

