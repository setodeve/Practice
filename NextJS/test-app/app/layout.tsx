"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'
import SessionProvider from '@/components/provider/SessionProvider'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <RecoilRoot>{children}</RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  )
}
