"use client"

import { useRef } from "react"
import { Float, Sphere, Icosahedron } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[0.8, 32, 32]} position={[-3, 1.5, -3]}>
          <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
        </Sphere>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <Icosahedron args={[1, 0]} position={[3, -1, -4]}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </Icosahedron>
      </Float>

      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
        <Sphere args={[0.5, 32, 32]} position={[2, 2.5, -2]}>
          <meshStandardMaterial color="#ffffff" metalness={0.95} roughness={0.05} />
        </Sphere>
      </Float>

      <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.3}>
        <Icosahedron args={[0.6, 0]} position={[-2, -1.5, -3]}>
          <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
        </Icosahedron>
      </Float>
    </group>
  )
}
