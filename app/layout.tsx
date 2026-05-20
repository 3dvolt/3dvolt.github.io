import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diego Volt — Full Stack Developer',
  description: 'Full Stack Developer specializing in IoT, 3D Printing, Blockchain & Web Development. Available for freelance projects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
