import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

// Dimensional 3D Scene Component rendered inside Canvas
function DimensionalScene({ prefersReducedMotion, isVisible }) {
  const masterGroupRef = useRef();
  const coreRef = useRef();
  const innerCoreRef = useRef();
  const ringsGroupRef = useRef();
  const satellitesRef = useRef([]);

  const [hoveredNode, setHoveredNode] = useState(null);

  // Compute 12 outer lattice nodes based on an Icosahedron
  const { nodePositions, lineGeometry } = useMemo(() => {
    const icosa = new THREE.IcosahedronGeometry(1.5, 0);
    const posAttr = icosa.attributes.position;
    const rawNodes = [];
    for (let i = 0; i < posAttr.count; i++) {
      rawNodes.push(new THREE.Vector3(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i)));
    }
    // Deduplicate vertices
    const unique = [];
    const eps = 0.001;
    rawNodes.forEach((v) => {
      if (!unique.some((u) => u.distanceTo(v) < eps)) {
        unique.push(v);
      }
    });

    // Create connecting lines
    const linePoints = [];
    const lineColors = [];
    const lime = new THREE.Color('#84cc16');
    const slate = new THREE.Color('#64748b');
    const faintSlate = new THREE.Color('#94a3b8');

    // Central hub spokes to each node
    unique.forEach((node, idx) => {
      linePoints.push(0, 0, 0);
      linePoints.push(node.x, node.y, node.z);
      const col = idx % 3 === 0 ? lime : slate;
      lineColors.push(col.r, col.g, col.b);
      lineColors.push(col.r, col.g, col.b);
    });

    // Outer lattice interconnects
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        const dist = unique[i].distanceTo(unique[j]);
        if (dist < 1.7) {
          linePoints.push(unique[i].x, unique[i].y, unique[i].z);
          linePoints.push(unique[j].x, unique[j].y, unique[j].z);
          const col = (i + j) % 5 === 0 ? lime : faintSlate;
          lineColors.push(col.r, col.g, col.b);
          lineColors.push(col.r, col.g, col.b);
        }
      }
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    geom.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

    return { nodePositions: unique, lineGeometry: geom };
  }, []);

  // Outer wireframe for crystalline core
  const coreWireframe = useMemo(() => {
    return new THREE.WireframeGeometry(new THREE.OctahedronGeometry(0.86, 0));
  }, []);

  // Frame animation loop
  useFrame((state, delta) => {
    if (!isVisible) return;

    if (prefersReducedMotion) {
      if (masterGroupRef.current) {
        masterGroupRef.current.rotation.set(0.32, 0.45, 0);
        masterGroupRef.current.position.set(0, 0, 0);
      }
      return;
    }

    const time = state.clock.getElapsedTime();

    // Subtle, elegant continuous rotation
    if (masterGroupRef.current) {
      // Damped pointer parallax tracking on desktop
      const targetRotX = (state.pointer.y * 0.45);
      const targetRotY = (state.pointer.x * 0.55);
      const targetPosX = (state.pointer.x * 0.22);
      const targetPosY = (state.pointer.y * 0.18);

      masterGroupRef.current.rotation.y += delta * 0.16;
      masterGroupRef.current.rotation.x = THREE.MathUtils.damp(
        masterGroupRef.current.rotation.x,
        targetRotX + 0.2,
        3.0,
        delta
      );
      masterGroupRef.current.rotation.z = THREE.MathUtils.damp(
        masterGroupRef.current.rotation.z,
        -targetRotY * 0.3,
        3.0,
        delta
      );

      masterGroupRef.current.position.x = THREE.MathUtils.damp(
        masterGroupRef.current.position.x,
        targetPosX,
        2.5,
        delta
      );
      masterGroupRef.current.position.y = THREE.MathUtils.damp(
        masterGroupRef.current.position.y,
        targetPosY,
        2.5,
        delta
      );
    }

    // Counter-rotation of core and rings
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.12;
      coreRef.current.rotation.x += delta * 0.08;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.z += delta * 0.22;
      innerCoreRef.current.rotation.y += delta * 0.15;
    }
    if (ringsGroupRef.current) {
      ringsGroupRef.current.rotation.z -= delta * 0.09;
    }

    // Orbiting satellite data nodes
    if (satellitesRef.current[0]) {
      const angle1 = time * 0.7;
      satellitesRef.current[0].position.set(
        Math.cos(angle1) * 1.85,
        Math.sin(angle1 * 0.8) * 0.6,
        Math.sin(angle1) * 1.85
      );
    }
    if (satellitesRef.current[1]) {
      const angle2 = -time * 0.55 + 2.0;
      satellitesRef.current[1].position.set(
        Math.sin(angle2) * 2.05,
        Math.cos(angle2 * 0.6) * 0.8,
        Math.cos(angle2) * 1.4
      );
    }
    if (satellitesRef.current[2]) {
      const angle3 = time * 0.4 + 4.2;
      satellitesRef.current[2].position.set(
        Math.cos(angle3) * 1.5,
        Math.sin(angle3) * 1.5,
        Math.sin(angle3 * 0.5) * 0.9
      );
    }
  });

  return (
    <group ref={masterGroupRef}>
      {/* 1. Dimensional Central Crystalline Core */}
      <mesh ref={coreRef} castShadow receiveShadow>
        <octahedronGeometry args={[0.85, 0]} />
        <meshPhysicalMaterial
          color="#f8fafc"
          emissive="#0f172a"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.2}
          clearcoat={1.0}
          clearcoatRoughness={0.12}
          transmission={0.4}
          thickness={0.8}
          transparent
          opacity={0.88}
          flatShading
        />
      </mesh>

      {/* Central Wireframe Accent */}
      <lineSegments geometry={coreWireframe}>
        <lineBasicMaterial color="#334155" transparent opacity={0.35} />
      </lineSegments>

      {/* 2. Inner Glowing Nucleus Core */}
      <mesh ref={innerCoreRef}>
        <dodecahedronGeometry args={[0.36, 0]} />
        <meshStandardMaterial
          color="#84cc16"
          emissive="#65a30d"
          emissiveIntensity={0.85}
          roughness={0.2}
          metalness={0.8}
          flatShading
        />
      </mesh>

      {/* 3. Connected 3D Line Lattice */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial vertexColors transparent opacity={0.42} depthWrite={false} />
      </lineSegments>

      {/* 4. Connected 3D Vertex Nodes */}
      {nodePositions.map((pos, idx) => {
        const isHovered = hoveredNode === idx;
        const isLime = idx % 2 === 0;
        return (
          <group key={idx} position={[pos.x, pos.y, pos.z]}>
            <mesh
              scale={isHovered ? 1.4 : 1.0}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredNode(idx);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredNode(null);
              }}
            >
              <sphereGeometry args={[0.065, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? '#a3e635' : isLime ? '#84cc16' : '#64748b'}
                emissive={isHovered ? '#84cc16' : isLime ? '#65a30d' : '#1e293b'}
                emissiveIntensity={isHovered ? 1.2 : isLime ? 0.6 : 0.2}
                roughness={0.25}
                metalness={0.7}
              />
            </mesh>
            {/* Subtle halo ring around primary nodes */}
            {isLime && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.09, 0.105, 16]} />
                <meshBasicMaterial
                  color="#84cc16"
                  transparent
                  opacity={isHovered ? 0.8 : 0.35}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* 5. Orbiting Satellite Data Nodes */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={`sat-${i}`}
          ref={(el) => (satellitesRef.current[i] = el)}
        >
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color="#a3e635"
            emissive="#84cc16"
            emissiveIntensity={1.0}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* 6. Orbital Dimensional Rings */}
      <group ref={ringsGroupRef}>
        <mesh rotation={[Math.PI / 3, 0.2, 0]}>
          <torusGeometry args={[2.0, 0.007, 16, 96]} />
          <meshBasicMaterial color="#84cc16" transparent opacity={0.45} />
        </mesh>
        <mesh rotation={[-Math.PI / 3.5, -0.3, 0]}>
          <torusGeometry args={[1.5, 0.005, 16, 80]} />
          <meshBasicMaterial color="#94a3b8" transparent opacity={0.35} />
        </mesh>
      </group>
    </group>
  );
}

export default function GeometricCenterpiece3D({ className = '' }) {
  const mountRef = useRef(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check WebGL availability
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL()) {
      setHasWebGL(false);
      return;
    }

    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);

    // Pause rendering when not visible in viewport to prevent GPU drain
    const container = mountRef.current;
    let observer;
    if (container && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
    }

    setIsLoaded(true);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      if (observer) observer.disconnect();
    };
  }, []);

  // WebGL Fallback: Clean Responsive SVG
  if (!hasWebGL) {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-48 h-48 text-slate-700" fill="none" stroke="currentColor">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" strokeWidth="1.2" strokeOpacity="0.5" />
            <polygon points="50,25 75,40 75,65 50,80 25,65 25,40" strokeWidth="1" strokeOpacity="0.7" stroke="#65a30d" />
            <circle cx="50" cy="50" r="10" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="4" fill="#84cc16" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[360px] sm:h-[420px] lg:h-[460px] select-none ${className}`}
      aria-label="Interactive 3D Geometric Structure"
    >
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1]}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onCreated={() => setIsLoaded(true)}
      >
        {/* Soft, Studio Lighting */}
        <ambientLight intensity={1.3} />
        <directionalLight position={[4, 5, 4]} intensity={1.6} color="#ffffff" />
        <directionalLight position={[-4, -3, -3]} intensity={1.0} color="#84cc16" />
        <pointLight position={[0, 0, 0]} intensity={1.6} distance={5} color="#84cc16" />

        {/* 3D Scene */}
        <DimensionalScene prefersReducedMotion={prefersReducedMotion} isVisible={isVisible} />
      </Canvas>

      {/* Loading overlay if canvas takes a moment */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-xs">
          <div className="w-8 h-8 rounded-full border-2 border-slate-200 border-t-lime-600 animate-spin" />
        </div>
      )}
    </div>
  );
}
