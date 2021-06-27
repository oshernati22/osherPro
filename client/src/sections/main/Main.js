import React, { Suspense, useState, useEffect } from 'react';
import "./main.scss";
import Boy from "./boy";
import ThreeD from "./threeD"
// React Spring
import { a, useTransition } from "@react-spring/web";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { useProgress } from "drei";
// React Springgg
import { Loader } from 'react-loaders'





function Main() {
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, []);

  return (
    <div className="main-section" id="main">
      <h1 className="title">Osher Nati</h1>
      {isloading ? <Loader type="pacman" /> : ""}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        {/* This light makes things look pretty */}
        <ambientLight intensity={1.5} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={2.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
          </mesh>
          <Suspense fallback={null}>
            <Boy />
          </Suspense>
          <Suspense fallback={null}>
            <ThreeD posx={-6} posy={-4} posz={-1.5} url={"/pizza.gltf"} size={1} />
            <ThreeD posx={-9.5} posy={-3} posz={-2} url={"/champ.gltf"} size={1} />
            <ThreeD posx={7} posy={2.7} posz={5} url={"/ball.gltf"} size={0.015} />
            <ThreeD posx={-6} posy={3} posz={-2} url={"/speaker.gltf"} size={0.2} />
            <ThreeD posx={6} posy={-4} posz={5} url={"/screen.gltf"} size={0.005} />
            <ThreeD posx={7} posy={4} posz={1} url={"/laptop.gltf"} size={0.7} />
            <ThreeD posx={7} posy={0.5} posz={2} url={"/mac.gltf"} size={0.7} />
            <ThreeD posx={-8} posy={1} posz={-2} url={"/tent.gltf"} size={1.5} />
          </Suspense>
        </group>
      </Canvas>
    </div>

  );

}

export default Main;