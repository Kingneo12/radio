import { React, useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Fisheye,
  PerspectiveCamera,
  Preload,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useControls, button } from "leva";
import { Model } from "./radio";

export default function App() {
  return (
    <Canvas 
      gl={{
        antialias: false,
        preserveDrawingBuffer: true,
        toneMappingExposure: 0.7,
      }}
      shadows
      camera={{ position: [4, 0, 6], fov: 35 }}
    >
      <ambientLight />
      <directionalLight position={[2, 4, 6]} castShadow shadow-mapSize={1024} />
      <group position={[0, -1.2, 0]}>
        <Suspense>
          <Model scale={0.64} rotation-y={-Math.PI / 4} />
          <Preload all />
        </Suspense>
      </group>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.3}
        maxPolarAngle={Math.PI / 1.8}
        makeDefault
      />
      <Environment
        files="/photo_studio_loft_hall_4k.hdr"
        ground={{ height: 2, radius: 10, scale: 100 }}
      />
      <PerspectiveCamera makeDefault position={[1, 1.5, 5]} fov={55} />
    </Canvas>
  );
}
