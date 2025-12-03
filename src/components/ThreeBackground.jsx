import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Plane,
} from "@react-three/drei";
import { useRef } from "react";

// Child component for floating planes
function FloatingPlanes({ hover }) {
  const planesRef = useRef([]);

  useFrame(({ clock }) => {
    planesRef.current.forEach((plane, i) => {
      if (!plane) return;
      plane.position.y = Math.sin(clock.elapsedTime + i) * 1.5; // smooth up/down
      plane.position.x = Math.cos(clock.elapsedTime * 0.5 + i) * 2; // gentle slide
    });
  });

  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <Plane
          key={i}
          ref={(el) => (planesRef.current[i] = el)}
          args={[1.2, 1.2]}
          position={[
            Math.random() * 4 - 2,
            Math.random() * 2 - 1,
            Math.random() * -2,
          ]}>
          <meshBasicMaterial
            attach="material"
            color="#ffffff"
            transparent
            opacity={0.3}
          />
        </Plane>
      ))}
    </>
  );
}

// Main ThreeBackground component
export default function ThreeBackground({ hover }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1.2} position={[5, 5, 5]} />

        {/* Distorted Sphere */}
        <Sphere args={[1.3, 64, 64]} scale={1.4}>
          <MeshDistortMaterial
            color="#6366F1"
            attach="material"
            distort={hover ? 0.6 : 0.3}
            speed={hover ? 3 : 1.5}
            wireframe
          />
        </Sphere>

        {/* Floating planes inside Canvas */}
        <FloatingPlanes hover={hover} />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={hover ? 1.5 : 0.5}
        />
      </Canvas>
    </div>
  );
}
