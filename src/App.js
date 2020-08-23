import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'

//components
import Model from './components/Model/Model'
import Loading from './components/Loadings/Loading'
import PlayButton from './components/Player/PlayButton'


export default function App() {
  return (
    <>
      <div className="bg" />
      {/* <h1>
        A
        <br />
        <span>W</span>
      </h1> */}

      <Canvas shadowMap camera={{ position: [-10, -10, 15] }}>
        <pointLight color="#3ff0f5" position={[0, 60, -100]} intensity={10} />
        <pointLight color="#34526f" position={[-50, 0, -50]} intensity={2} />
        <ambientLight intensity={5} />
        <pointLight color="#34526f" intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={5}
          angle={4}
          penumbra={1}
          position={[50, 50, 50]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
          color="#34526f"
        />
        <fog attach="fog" args={['#3ff0f5', 13.6, 23]} />
        <Suspense fallback={null}>
          <Model url="scene-draco.gltf" />
        </Suspense>
        {/* control of rotate */}
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          enableDamping
          dampingFactor={0.5}
          rotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <PlayButton />
      </Canvas> 
      <div className="layer" />
      <Loading />

      {/* <a href="https://github.com/deeppaz/iamalanwalker" className="top-left" children="Author/SRC" /> */}
    </>
  )
}