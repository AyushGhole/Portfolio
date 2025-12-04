import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Plane,
  Box,
  Torus,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";

// Floating, subtle planes for extra tech vibe
function FloatingPlanes() {
  const planesRef = useRef([]);

  useFrame(({ clock }) => {
    planesRef.current.forEach((plane, i) => {
      if (!plane) return;
      plane.position.y = Math.sin(clock.elapsedTime * 0.7 + i) * 1.4;
      plane.position.x = Math.cos(clock.elapsedTime * 0.4 + i) * 2.2;
      plane.rotation.z += 0.002;
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
            opacity={0.15}
          />
        </Plane>
      ))}
    </>
  );
}

// Central rotating “hero” model (Earth-like planet + glowing ring)
function RotatingCore({ hover }) {
  const coreRef = useRef();
  // Load Earth texture from local /public folder (place earth-night.jpg inside /public)
  const earthTexture = useTexture("public/earth-night.jpeg");

  useFrame(({ clock }) => {
    if (!coreRef.current) return;
    // Continuous 360° rotation around vertical axis (incremental)
    coreRef.current.rotation.y += 0.01; // adjust for visible spin
    // Fixed axial tilt for a planetary feel
    coreRef.current.rotation.x = 0.4;
  });

  return (
    <group ref={coreRef}>
      {/* Main Earth night-side planet with real texture */}
      <Sphere args={[1.7, 96, 96]} scale={3.4}>
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.3}
          roughness={1}
        />
      </Sphere>

      {/* Soft glow band around the planet (no outer ring now) */}
      <Sphere args={[1.9, 64, 64]} scale={3.1}>
        <meshStandardMaterial
          color="#1D4ED8"
          transparent
          opacity={0.2}
          emissive="#1D4ED8"
          emissiveIntensity={0.5}
        />
      </Sphere>

      {/* Small orbiting satellites / dots */}
      {[0, 1, 2].map((i) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          args={[0.08, 0.08, 0.08]}
          position={[2.4, 0.4 - i * 0.4, 0]}>
          <meshStandardMaterial
            color={i % 2 === 0 ? "#38BDF8" : "#F97316"}
            emissive={i % 2 === 0 ? "#38BDF8" : "#F97316"}
            emissiveIntensity={1.2}
          />
        </Box>
      ))}
    </group>
  );
}

// Main ThreeBackground component
// This component is meant to fill its parent; parent controls size/shape.
export default function ThreeBackground({ hover = false }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Canvas camera={{ position: [0, 0, 10] }} gl={{ alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.2} position={[6, 6, 6]} />
        <directionalLight intensity={0.6} position={[-5, -4, -6]} />

        <RotatingCore hover={hover} />
        <FloatingPlanes />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
