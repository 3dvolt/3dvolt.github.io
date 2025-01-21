'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, Float, Stars, Points, Point } from '@react-three/drei'
import * as THREE from 'three'

export function Scene() {
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Generate random particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 25
      const y = (Math.random() - 0.5) * 25
      const z = (Math.random() - 0.5) * 25
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.3
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <>
      <Stars 
        radius={300} 
        depth={100} 
        count={7000} 
        factor={6} 
        saturation={0.5} 
        fade 
        speed={0.5}
      />
      
      <Points ref={particlesRef} positions={particles} stride={3}>
        <pointsMaterial
          size={0.05}
          color="#8b5cf6"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </Points>

      <Float
        speed={1.4}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Torus
          ref={ringRef}
          args={[6, 0.6, 32, 100]}
          position={[0, 0, 0]}
          rotation={[0.5, 0, 0]}
        >
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#6b46c1"
            emissiveIntensity={0.8}
          />
        </Torus>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Torus
          ref={ring2Ref}
          args={[8, 0.3, 32, 100]}
          position={[0, 0, 0]}
          rotation={[0.2, 0.5, 0]}
        >
          <meshStandardMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.2}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
          />
        </Torus>
      </Float>
    </>
  )
}

