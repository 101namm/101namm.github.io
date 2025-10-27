"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import { PortfolioContent } from "./portfolio-content"
import { FloatingGeometry } from "./floating-geometry"

export function PortfolioScene() {
  return (
    <div className="w-full h-screen relative">
      <Canvas className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <Suspense fallback={null}>
          <Environment preset="night" />
          <FloatingGeometry />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>

      <PortfolioContent />
    </div>
  )
}
