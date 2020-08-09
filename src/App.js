import React, { Suspense} from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'

//components
import Model from './components/Model/Model'
import Loading from './components/Loadings/Loading'

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>
        I AM
        <br />
        <span>ALAN WALKER</span>
      </h1>
      <Canvas shadowMap camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.75} />
        <pointLight intensity={1} position={[-10, -25, -10]} />
        <spotLight
          castShadow
          intensity={2.25}
          angle={0.2}
          penumbra={1}
          position={[25, 25, 25]}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <fog attach="fog" args={['#cc7b32', 16, 20]} />
        <Suspense fallback={null}>
          <Model url="scene-draco2.gltf" />
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
      </Canvas>
      <div className="layer" />
      <Loading />
      <a href="https://github.com/deeppaz/iamalanwalker" className="top-left" children="Github" />
      {/* <a href="https://twitter.com/0xca0a" className="top-right" children="Twitter" />
      <a href="https://github.com/drcmda/react-three-fiber" className="bottom-left" children="+ react-three-fiber" /> */}
    </>
  )
}