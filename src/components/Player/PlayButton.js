import React, { useRef } from 'react'
import { OrbitControls } from 'drei'

export default function PlayButton() {
    let audio = new Audio("./alone.mp3")
    const start = () => {
        audio.play();
    }
    // const stop = () => {
    //     audio.pause()
    // }
    const ref = useRef()
    return (
        <>
            {/* <pointLight position={[-4, -11, 1.9]} intensity={2} /> */}
            <group ref={ref}>
                <pointLight color="white" intensity={0} position={[-4, -11, 1.9]}>
                    <pointLight color="red" position={[3.5, 8, 11.9]} intensity={3} />
                    <pointLight shadowMap color="red" position={[5, 0, 5]} intensity={4} />

                    <ambientLight color="#34526f" intensity={2} />
                    <mesh onClick={start} position={[5, 5, 5]}>
                        <boxBufferGeometry attach="geometry" args={[2.1, 0.9, 1]} />
                        <meshBasicMaterial attach="material" transparent={true} opacity={0.5} color="red" />
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
                    </mesh>
                </pointLight>
            </group>
        </>
    )
}
