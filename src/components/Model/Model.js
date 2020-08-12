import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

export default function Model({ url }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco())

  return (
    <>
      <group rotation={[-Math.PI / 1, 0, 0]} position={[1, -10, 0]} scale={[6, 6, 6]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]}>
          <mesh castShadow receiveShadow geometry={nodes.Drone_0.geometry} material={materials.None} />
        </group>
      </group>
    </>
  )
}