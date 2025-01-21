'use client'

import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { motion, AnimatePresence } from 'framer-motion'
import { Ring } from './components/ring'
import { Content } from './components/content'

export default function Portfolio() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen w-full bg-gradient-to-b from-purple-900 via-purple-800 to-blue-900 overflow-auto">
      <Canvas >
        <Environment preset="night" />
        <Ring />
      </Canvas>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Content />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

