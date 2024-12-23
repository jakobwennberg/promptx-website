import { useState, useEffect } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size becomes larger than mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggle = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    toggle,
    close
  }
}