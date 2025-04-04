// import React, { useEffect } from "react";

// const BackgroundAnimation = () => {
//   useEffect(() => {
//     const bgAnimation = document.getElementById("bg-animation");
//     const colors = ["#3498db", "#9b59b6", "#2ecc71"];
//     const particleCount = 100;

//     // Create particles
//     for (let i = 0; i < particleCount; i++) {
//       createParticle(bgAnimation, colors);
//     }

//     // Add mouse movement effect
//     const handleMouseMove = (e) => {
//       const mouseX = e.clientX / window.innerWidth;
//       const mouseY = e.clientY / window.innerHeight;

//       // Subtle movement of particles based on mouse position
//       const particles = document.querySelectorAll(".particle");
//       particles.forEach((particle) => {
//         const moveX = (mouseX - 0.5) * 5;
//         const moveY = (mouseY - 0.5) * 5;
//         particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
//       });
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     // Cleanup
//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       if (bgAnimation) {
//         bgAnimation.innerHTML = "";
//       }
//     };
//   }, []);

//   function createParticle(parent, colors) {
//     if (!parent) return;

//     const particle = document.createElement("div");
//     particle.classList.add("particle");

//     // Random properties
//     const size = Math.random() * 5 + 1;
//     const colorIndex = Math.floor(Math.random() * colors.length);

//     // Position
//     const xPos = Math.random() * 100;
//     const yPos = Math.random() * 100;

//     // Style
//     particle.style.width = `${size}px`;
//     particle.style.height = `${size}px`;
//     particle.style.backgroundColor = colors[colorIndex];
//     particle.style.left = `${xPos}%`;
//     particle.style.top = `${yPos}%`;
//     particle.style.opacity = Math.random() * 0.5 + 0.1;

//     // Animation
//     const duration = Math.random() * 20 + 10;
//     const delay = Math.random() * 5;
//     particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

//     // Add to DOM
//     parent.appendChild(particle);
//   }

//   return <div className="bg-animation" id="bg-animation"></div>;
// };

// export default BackgroundAnimation;

/////2222222
// CODE 2
// 2222222

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";

// NodeSphere component for the 3D visualization
const NodeSphere = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const radius = 1;
  const segments = 12; // defines node grid density

  // Generate regular points on the sphere surface
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const phi = (Math.PI * i) / segments;
    for (let j = 0; j <= segments; j++) {
      const theta = (2 * Math.PI * j) / segments;
      points.push(
        new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        )
      );
    }
  }

  // Generate lines between close-by points
  const curves = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = points[i].distanceTo(points[j]);
      if (dist < 0.3) {
        const mid = new THREE.Vector3()
          .addVectors(points[i], points[j])
          .multiplyScalar(0.5)
          .normalize()
          .multiplyScalar(radius);
        curves.push([points[i], mid, points[j]]);
      }
    }
  }

  return (
    <group ref={groupRef}>
      {/* Render nodes as small spheres */}
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.015, 6, 6]} />
          <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
        </mesh>
      ))}

      {/* Render smooth curved lines */}
      {curves.map((curve, i) => (
        <Line
          key={i}
          points={curve}
          color="#3498db"
          lineWidth={0.5}
          dashed={false}
          curveType="catmullrom"
          opacity={0.4}
          transparent
        />
      ))}

      {/* Render outer wireframe sphere */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color="#9b59b6"
          wireframe
          opacity={0.2}
          transparent
        />
      </mesh>
    </group>
  );
};

const BackgroundAnimation = () => {
  // Keep the original particle animation for fallback or mobile
  useEffect(() => {
    // Only create particles if the Three.js scene is not visible
    // This could be determined by screen size or device capability
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const bgAnimation = document.getElementById("bg-animation");
      const colors = ["#3498db", "#9b59b6", "#2ecc71"];
      const particleCount = 50; // Reduced count for better performance

      // Create particles
      for (let i = 0; i < particleCount; i++) {
        createParticle(bgAnimation, colors);
      }

      // Add mouse movement effect
      const handleMouseMove = (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        // Subtle movement of particles based on mouse position
        const particles = document.querySelectorAll(".particle");
        particles.forEach((particle) => {
          const moveX = (mouseX - 0.5) * 5;
          const moveY = (mouseY - 0.5) * 5;
          particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      };

      document.addEventListener("mousemove", handleMouseMove);

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        if (bgAnimation) {
          bgAnimation.innerHTML = "";
        }
      };
    }
  }, []);

  function createParticle(parent, colors) {
    if (!parent) return;

    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random properties
    const size = Math.random() * 5 + 1;
    const colorIndex = Math.floor(Math.random() * colors.length);

    // Position
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;

    // Style
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = colors[colorIndex];
    particle.style.left = `${xPos}%`;
    particle.style.top = `${yPos}%`;
    particle.style.opacity = Math.random() * 0.5 + 0.1;

    // Animation
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    // Add to DOM
    parent.appendChild(particle);
  }

  // Use media query to determine if we should render 3D scene
  const isMobile = window.innerWidth < 768;

  return (
    <>
      {!isMobile && (
        <div className="threejs-bg">
          <Canvas
            camera={{ position: [0, 0, 3], fov: 50 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              zIndex: -1,
              background: "transparent",
            }}
          >
            <color attach="background" args={["#0b1222"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} intensity={1} />
            <NodeSphere />
          </Canvas>
        </div>
      )}
      <div className="bg-animation" id="bg-animation"></div>
    </>
  );
};

export default BackgroundAnimation;

//333333
//  CODE3
///333333
