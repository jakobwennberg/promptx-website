import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'BERG AI',
  description: 'Experts in AI Solutions',
  icons: {
    // regular favicons (multiple sizes allowed)
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      '/favicon.ico', // classic fallback
    ],
    // iOS / iPadOS home-screen icon
    apple: '/apple-touch-icon.png',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-light">
        {children}
      </body>
    </html>
  )
}