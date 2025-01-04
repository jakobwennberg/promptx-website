import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserTypePrompt } from "@/components/UserTypePrompt"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromptX Academy',
  description: 'Experts in Prompt Engineering',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserTypePrompt />
        {children}
      </body>
    </html>
  )
}

