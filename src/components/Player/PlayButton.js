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
                <pointLight color="red" intensity={1} position={[-4, -11, 1.9]}>
                    <mesh onClick={start} position={[5, 5, 5]}>
                        <sphereBufferGeometry attach="geometry" color="yellow" args={[0.5, 2, 1]} />
                        <meshBasicMaterial attach="material" color="red" />
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
