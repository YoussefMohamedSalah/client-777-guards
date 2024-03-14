import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer'

const font = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '777-Guards',
  description: 'Bird - Simple and powerful notes & docs for teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
