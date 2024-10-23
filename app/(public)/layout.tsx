import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import AuthProvider from '../context/AuthProvider'
import Navbar from '@/components/header/Header'
import { AudioContextProvider } from '@/context/AudioContext'
import MobileNav from '@/components/header/MobileNav'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Studio X',
  description: "More than music",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="custom-scrollbar">

        <AuthProvider>
          <AudioContextProvider>
            {/* <Navbar /> */}
            <main className="h-full">
              {children}
              <MobileNav />
            </main>
          </AudioContextProvider>
        </AuthProvider>

      </body>
      <Analytics />
    </html>
  )
}
