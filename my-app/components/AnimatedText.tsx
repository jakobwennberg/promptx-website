'use client'

import React, { useState, useEffect } from 'react'

const phrases = ["Prompt Engineering", "AI Integration", "AI Solutions"]

export function AnimatedText() {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState(phrases[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
        if (displayText.length === 1) {
          setIsDeleting(false)
          setIndex((prev) => (prev + 1) % phrases.length)
        }
      }, 50)
    } else {
      const currentPhrase = phrases[index]
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, index, isDeleting])

  return (
    <span className="inline-block min-w-[300px]">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  )
}

