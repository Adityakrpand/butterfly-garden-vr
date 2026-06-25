'use client'

import { OrbitControls } from '@react-three/drei'

import Cube from './Cube'
import Ground from './Ground'
import Lights from './Lights'
import Sky from './Sky'

export default function Scene() {
  return (
    <>
      <Sky />
      <Lights />
      <Ground />
      <Cube />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}