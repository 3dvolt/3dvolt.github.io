'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function Nav() {
  const pathname = usePathname()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-purple-900/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            diegovolt ⚡
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={cn(
                "text-sm text-white/70 hover:text-white transition-colors",
                pathname === "/" && "text-white"
              )}
            >
              Home
            </Link>
            <Link 
              href="/roadmap" 
              className={cn(
                "text-sm text-white/70 hover:text-white transition-colors",
                pathname === "/roadmap" && "text-white"
              )}
            >
              Projects Timeline
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

