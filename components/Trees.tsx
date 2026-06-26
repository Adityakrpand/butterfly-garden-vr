'use client'

export default function Trees() {
  const trees = [
    [-8, -8], [-6, 6], [8, -6], [10, 8],
    [-12, 4], [12, -4], [0, 12], [0, -12],
    [-15, -10], [15, 10], [-10, 15], [10, -15]
  ]

  return (
    <>
      {trees.map(([x, z], index) => (
        <group key={index} position={[x, 0, z]}>
          {/* Trunk */}
          <mesh position={[0, 1, 0]}>
            <cylinderGeometry args={[0.2, 0.3, 2, 8]} />
            <meshStandardMaterial color="#8B5A2B" />
          </mesh>

          {/* Leaves */}
          <mesh position={[0, 2.5, 0]}>
            <coneGeometry args={[1.2, 2.5, 8]} />
            <meshStandardMaterial color="#2E8B57" />
          </mesh>
        </group>
      ))}
    </>
  )
}