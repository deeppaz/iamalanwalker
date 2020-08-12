import React, { useContext } from 'react'
import { soundContext } from './DanceFloor';
import { DoubleSide } from 'three';

const Dancer = ({ index }) => {

    const height = useContext(soundContext)[index] / 100;
    return (
        <mesh position={[ 0, 0, Math.max(0, height)]}>
            <ringBufferGeometry attach="geometry" args={[index * .3 + 1.3, index * .3 + 1.2, 6]} />
            <meshToonMaterial
                attach="material"
                color={`hsl(${height * 128},100%, 50%)`}
                transparent
                side={DoubleSide}
            />
        </mesh>
    )
}

export default Dancer
