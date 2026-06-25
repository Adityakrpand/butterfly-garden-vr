'use client'

import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <color attach="background" args={['black']} />

        <ambientLight />

        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}