'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

export function Ring() {
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Generate random particles
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < 300; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 15
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [])

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2
      ringRef.current.rotation.x += delta * 0.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.15
      ring2Ref.current.rotation.y += delta * 0.1
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05
      particlesRef.current.rotation.x -= delta * 0.03
    }
  })

  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0.5} 
        fade 
        speed={0.5}
      />
      
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#8b5cf6"
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Torus
          ref={ringRef}
          args={[4, 0.4, 32, 100]}
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
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Torus
          ref={ring2Ref}
          args={[5, 0.2, 32, 100]}
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

