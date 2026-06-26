'use client'

export default function Grass() {
  return (
    <>
      {Array.from({ length: 250 }).map((_, i) => {
        const x = (Math.random() - 0.5) * 80
        const z = (Math.random() - 0.5) * 80

        return (
          <mesh
            key={i}
            position={[x, 0.15, z]}
            rotation={[0, Math.random() * Math.PI, 0]}
          >
            <boxGeometry args={[0.04, 0.3, 0.04]} />
            <meshStandardMaterial color="#2e8b57" />
          </mesh>
        )
      })}
    </>
  )
}