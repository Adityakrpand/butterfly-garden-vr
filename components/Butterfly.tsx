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
  const radius = 3

  const x = Math.cos(t) * radius
  const z = Math.sin(t) * radius

  group.current.position.set(
    x,
    1.5 + Math.sin(t * 2) * 0.25,
    z
  )

  group.current.rotation.y = -t + Math.PI / 2
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