import React,{useRef} from 'react';
// R3F
import {useFrame } from "react-three-fiber";
import {useGLTF} from "drei";


function ModelMaker(props) {
    const gltf = useGLTF(props.url);
    gltf.scene.clone(true);
    gltf.scene.scale.set(props.size,props.size,props.size);
    return <primitive object={gltf.scene} dispose={null} />;
}

function ThreeD (props) {
    const ref = useRef();
     useFrame(() => (ref.current.rotation.y += 0.01));
    return (  
        <mesh ref={ref} position={[props.posx,props.posy,props.posz]}>
          <ModelMaker url={props.url} size={props.size}/>
        </mesh>
  
      
    );
}

export default ThreeD;