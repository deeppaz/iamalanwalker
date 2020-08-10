import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'


export default function Model({ url }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco())
  return (
    <group rotation={[-Math.PI / 1, 30, 0]} position={[-15, -3, 0]} scale={[6, 6, 6]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.01, 0.01, 0.01]}>
        <mesh castShadow receiveShadow geometry={nodes.Drone_Guns_0.geometry} material={materials.Bilbord_Material__36} />
        <mesh castShadow receiveShadow geometry={nodes.Drone_Guns_1.geometry} material={materials.Bilbord_Material__37} />
      </group>
    </group>
  )
}