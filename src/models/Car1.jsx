import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const Car1 = () => {
  const car1 = useGLTF("./koenigsegg_one1/scene.gltf");

  return (
    <primitive object={car1.scene} scale={5} position-y={0} rotation-y={0} />
  );
};

const Car1Canvas = () => {
  return (
    <Canvas
      className=" w-full h-full"
      shadows
      frameloop="demand"
    //   dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        // fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 6],
      }}
    >
      <Suspense>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <directionalLight position={[0, 100, 0]} intensity={8} />
        <ambientLight intensity={3} />
        <pointLight position={[0, 0, 0]} intensity={10} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
        shadow-mapSize={1024}
        />
        <hemisphereLight intensity={0.75} groundColor="black" />
        <Car1 />

      </Suspense>
        <Preload all />
    </Canvas>
  );
};

export default Car1Canvas;
