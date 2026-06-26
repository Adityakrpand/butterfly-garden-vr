'use client'

import { OrbitControls } from '@react-three/drei'

import Trees from './Trees'
import Grass from './Grass'
import Butterfly from './Butterfly'
import Ground from './Ground'
import Lights from './Lights'
import Sky from './Sky'

export default function Scene() {
  return (
    <>
      <Sky />
      <Lights />
      <Grass />
      <Ground />
       <Trees />
      <Butterfly />

      <OrbitControls
        enablePan={false}
        minDistance={3}
        maxDistance={8}
        maxPolarAngle={Math.PI / 2.1}
      />
    </>
  )
}