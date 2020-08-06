import React from 'react';
import './App.scss';

import { Canvas } from 'react-three-fiber';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach="geometery" args={[1, 1, 1]} />
          
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
