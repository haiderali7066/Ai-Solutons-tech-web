import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const _geist = Geist({
  subsets: ['latin'],
})

const _geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AI Solution Technologies - Enterprise AI Services',
  description:
    'Leading provider of AI solutions for enterprise transformation. Intelligent systems, consulting, and custom AI implementations.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="dark"
      suppressHydrationWarning
    >
      <body className="bg-background text-white font-sans antialiased overflow-x-hidden w-full min-h-screen flex flex-col">
        
        <Navigation />

        <main className="flex-1 w-full overflow-hidden">
          {children}
        </main>

        <Footer />

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}