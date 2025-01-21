'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Ring } from './ring'

export function SceneWrapper() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-blue-900">
      <Canvas>
        <Environment preset="night" />
        <Ring />
      </Canvas>
    </div>
  )
}

