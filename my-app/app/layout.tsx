import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserTypePrompt } from "@/components/UserTypePrompt"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromptX Academy',
  description: 'Experts in Prompt Engineering',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
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