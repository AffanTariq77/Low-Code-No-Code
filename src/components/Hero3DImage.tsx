import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import logo from "@/assets/lowcodenocode.png";


function FloatingImage({ textureUrl }: { textureUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [texture] = useState(() => new THREE.TextureLoader().load(textureUrl));

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      // Dynamic floating/bobbing motion on Y axis
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.3;
      
      // Complex rotation pattern - multiple axes for depth
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.15;
      meshRef.current.rotation.y = Math.sin(t * 0.6) * 0.6 + (hovered ? 0.3 : 0);
      meshRef.current.rotation.z = Math.cos(t * 0.3) * 0.1;
      
      // Smooth scale on hover with pulsing effect
      const pulseScale = 1 + Math.sin(t * 2) * 0.05;
      const targetScale = hovered ? 1.2 * pulseScale : pulseScale;
      meshRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.08
      );
      
      // Slight position shift on hover for interaction feedback
      if (hovered) {
        meshRef.current.position.x = Math.sin(t * 1.2) * 0.1;
        meshRef.current.position.z = Math.cos(t * 0.9) * 0.15;
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => !isTouchDevice && setHovered(true)}
      onPointerOut={() => !isTouchDevice && setHovered(false)}
    >
      <planeGeometry args={[2.5, 2.5]} />
      <meshStandardMaterial 
        map={texture} 
        transparent 
        opacity={1}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function Hero3DImage() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <div 
      className="w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[720px] flex items-center justify-center bg-white"
      style={isTouchDevice ? { pointerEvents: 'none', touchAction: 'pan-y' } : {}}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 40 }} 
        style={{ background: 'white', pointerEvents: isTouchDevice ? 'none' : 'auto' }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[2, 4, 2]} intensity={0.3} color="#ffffff" />
        <FloatingImage textureUrl= {logo} />
        {!isTouchDevice && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
    </div>
  );
}
