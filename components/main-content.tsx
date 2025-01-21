'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Content } from './content'

export function MainContent() {
  const [showContent, setShowContent] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen w-full overflow-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Content />
      </motion.div>
    </div>
  )
}

