'use client'

import { Canvas } from '@react-three/fiber'
import Scene from '@/components/Scene'

export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <Scene />
      </Canvas>
    </main>
  )
}