import React from 'react'
import { TextureLoader } from 'three'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { draco } from 'drei'

import Yek from '../../img/Drone_baseColor.png'
import Se from '../../img/Drone_Screen_emissive.png'

export default function Model({ url }) {
  const { nodes, materials } = useLoader(GLTFLoader, url, draco())
  const texture = useLoader(TextureLoader, Yek)
  const texture3 = useLoader(TextureLoader, Se)
  return (
    <group rotation={[-Math.PI / 11, 11, 15]} position={[0, 1, 3]} scale={[7, 7, 7]}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh castShadow receiveShadow geometry={nodes.Screen_0.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture3} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Drone_light_0.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Drone_light_1.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Drone_Guns_0.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Drone_Body_0.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Drone_Body_1.geometry} material={materials.scene}>
          <meshPhysicalMaterial attach="material" map={texture} />
        </mesh>
      </group>
    </group>
  )
}
