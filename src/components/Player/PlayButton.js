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
            <pointLight position={[0, 10, -10]} intensity={2} />
            <group ref={ref}>
                <pointLight color="red" intensity={3} position={[1, 8, 5]}>
                    <mesh onClick={start}  position={[0, 0, 0]}>
                        <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
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
