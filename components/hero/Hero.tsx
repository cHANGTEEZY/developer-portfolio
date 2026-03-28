"use client"

import { Canvas } from "@react-three/fiber"
import ComputerModal from "./ComputerModal"
import { OrbitControls } from "@react-three/drei"

const Hero = () => {
  return (
    <div className="w-fullborder h-[min(70vh,900px)] border">
      <Canvas
        className="touch-none"
        camera={{ position: [2.2, 1.2, 4.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <ComputerModal />
        <OrbitControls enableDamping makeDefault />
      </Canvas>
    </div>
  )
}

export default Hero
