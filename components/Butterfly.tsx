'use client'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Butterfly() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/models/butterfly.glb')

  useFrame(({ clock }) => {
    if (!group.current) return

    const t = clock.getElapsedTime()

    group.current.position.y = 1.5 + Math.sin(t * 2) * 0.25
  })

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={0.02}
      />
    </group>
  )
}

useGLTF.preload('/models/butterfly.glb')