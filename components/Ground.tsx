'use client'

export default function Ground() {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="#6CBF4A" />
    </mesh>
  )
}