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

// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Line } from "@react-three/drei";
// import * as THREE from "three";

// // NodeSphere component for the 3D visualization
// const NodeSphere = () => {
//   const groupRef = useRef();

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.002;
//       // groupRef.current.rotation.x += 0.001;
//     }
//   });

//   const radius = 1.25;
//   const segments = 0; // defines node grid density

//   // Generate regular points on the sphere surface
//   const points = [];
//   for (let i = 0; i <= segments; i++) {
//     const phi = (Math.PI * i) / segments;
//     for (let j = 0; j <= segments; j++) {
//       const theta = (2 * Math.PI * j) / segments;
//       points.push(
//         new THREE.Vector3(
//           radius * Math.sin(phi) * Math.cos(theta),
//           radius * Math.sin(phi) * Math.sin(theta),
//           radius * Math.cos(phi)
//         )
//       );
//     }
//   }

//   // Generate lines between close-by points
//   const curves = [];
//   for (let i = 0; i < points.length; i++) {
//     for (let j = i + 1; j < points.length; j++) {
//       const dist = points[i].distanceTo(points[j]);
//       if (dist < 0.3) {
//         const mid = new THREE.Vector3()
//           .addVectors(points[i], points[j])
//           .multiplyScalar(0.5)
//           .normalize()
//           .multiplyScalar(radius);
//         curves.push([points[i], mid, points[j]]);
//       }
//     }
//   }

//   return (
//     <group ref={groupRef} position={[0, -1.3, 0]}>
//       {/* Render nodes as small spheres */}
//       {points.map((point, i) => (
//         // <mesh key={i} position={point}>
//         //   <sphereGeometry args={[0.015, 6, 6]} />
//         //   <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
//         // </mesh>

//         <mesh>
//           <sphereGeometry args={[radius, 32, 32]} />
//           <meshStandardMaterial
//             color="#9b59b6"
//             wireframe
//             opacity={0.2}
//             transparent
//             emissive="#9b59b6"
//             emissiveIntensity={0.2}
//           />
//         </mesh>
//       ))}
//       {/* Render smooth curved lines */}
//       {curves.map((curve, i) => (
//         <Line
//           key={i}
//           points={curve}
//           color="#3498db"
//           lineWidth={0.5}
//           dashed={false}
//           curveType="catmullrom"
//           opacity={0.4}
//           transparent
//         />
//       ))}
//       {/* Render outer wireframe sphere */}
//       <mesh>
//         <sphereGeometry args={[radius, 32, 32]} />
//         <meshStandardMaterial
//           color="#9b59b6"
//           wireframe
//           opacity={0.2}
//           transparent
//         />
//       </mesh>
//     </group>
//   );
// };

// const BackgroundAnimation = () => {
//   // Keep the original particle animation for fallback or mobile
//   useEffect(() => {
//     // Only create particles if the Three.js scene is not visible
//     // This could be determined by screen size or device capability
//     const isMobile = window.innerWidth < 768;

//     if (isMobile) {
//       const bgAnimation = document.getElementById("bg-animation");
//       const colors = ["#3498db", "#9b59b6", "#2ecc71"];
//       const particleCount = 50; // Reduced count for better performance

//       // Create particles
//       for (let i = 0; i < particleCount; i++) {
//         createParticle(bgAnimation, colors);
//       }

//       // Add mouse movement effect
//       const handleMouseMove = (e) => {
//         const mouseX = e.clientX / window.innerWidth;
//         const mouseY = e.clientY / window.innerHeight;

//         // Subtle movement of particles based on mouse position
//         const particles = document.querySelectorAll(".particle");
//         particles.forEach((particle) => {
//           const moveX = (mouseX - 0.5) * 5;
//           const moveY = (mouseY - 0.5) * 5;
//           particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
//         });
//       };

//       document.addEventListener("mousemove", handleMouseMove);

//       // Cleanup
//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         if (bgAnimation) {
//           bgAnimation.innerHTML = "";
//         }
//       };
//     }
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
//     particle.style.boxShadow = `0 0 8px ${colors[colorIndex]}55`; // subtle glow

//     // Animation
//     const duration = Math.random() * 20 + 10;
//     const delay = Math.random() * 5;
//     particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

//     // Add to DOM
//     parent.appendChild(particle);
//   }

//   // Use media query to determine if we should render 3D scene
//   const isMobile = window.innerWidth < 768;

//   return (
//     <>
//       {!isMobile && (
//         <div className="threejs-bg">
//           <Canvas
//             camera={{ position: [0, 0.8, 6], fov: 10 }}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100vw",
//               height: "100vh",
//               zIndex: -1,
//               background: "transparent",
//             }}
//           >
//             <color attach="background" args={["#0b1222"]} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[3, 3, 3]} intensity={1} />
//             <NodeSphere />
//           </Canvas>
//         </div>
//       )}
//       <div className="bg-animation" id="bg-animation"></div>
//     </>
//   );
// };

// export default BackgroundAnimation;

//333333
//  CODE3
///333333
// import React, { useRef, useEffect } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Line } from "@react-three/drei";
// import * as THREE from "three";

// // NodeSphere component for the 3D visualization
// const NodeSphere = () => {
//   const groupRef = useRef();

//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y += 0.002;
//       // groupRef.current.rotation.x += 0.001;
//     }
//   });

//   const radius = 1.25;
//   const segments = 12; // Define node grid density (changed from 0)

//   // Generate regular points on the sphere surface
//   const points = [];
//   for (let i = 0; i <= segments; i++) {
//     const phi = (Math.PI * i) / segments;
//     for (let j = 0; j <= segments; j++) {
//       const theta = (2 * Math.PI * j) / segments;
//       points.push(
//         new THREE.Vector3(
//           radius * Math.sin(phi) * Math.cos(theta),
//           radius * Math.sin(phi) * Math.sin(theta),
//           radius * Math.cos(phi)
//         )
//       );
//     }
//   }

//   // Generate lines between close-by points
//   const curves = [];
//   for (let i = 0; i < points.length; i++) {
//     for (let j = i + 1; j < points.length; j++) {
//       const dist = points[i].distanceTo(points[j]);
//       if (dist < 0.3) {
//         const mid = new THREE.Vector3()
//           .addVectors(points[i], points[j])
//           .multiplyScalar(0.5)
//           .normalize()
//           .multiplyScalar(radius);
//         curves.push([points[i], mid, points[j]]);
//       }
//     }
//   }

//   return (
//     <group ref={groupRef} position={[0, -1.3, 0]}>
//       {/* Render nodes as small spheres */}
//       {points.map((point, i) => (
//         <mesh key={i} position={point}>
//           <sphereGeometry args={[0.015, 6, 6]} />
//           <meshBasicMaterial color="#ffffff" opacity={0.6} transparent />
//         </mesh>
//       ))}

//       {/* Render smooth curved lines */}
//       {curves.map((curve, i) => (
//         <Line
//           key={i}
//           points={curve}
//           color="#3498db"
//           lineWidth={0.5}
//           dashed={false}
//           curveType="catmullrom"
//           opacity={0.4}
//           transparent
//         />
//       ))}

//       {/* Render outer wireframe sphere with glow effect */}
//       <mesh>
//         <sphereGeometry args={[radius, 32, 32]} />
//         <meshStandardMaterial
//           color="#9b59b6"
//           wireframe
//           opacity={0.2}
//           transparent
//           emissive="#9b59b6"
//           emissiveIntensity={0.4}
//         />
//       </mesh>

//       {/* Add inner glow sphere for box shadow effect */}
//       <mesh>
//         <sphereGeometry args={[radius * 0.98, 32, 32]} />
//         <meshStandardMaterial
//           color="#9b59b6"
//           opacity={0.05}
//           transparent
//           emissive="#9b59b6"
//           emissiveIntensity={0.2}
//         />
//       </mesh>

//       {/* Add point light inside for box shadow effect */}
//       <pointLight
//         color="#9b59b6"
//         intensity={1}
//         distance={3}
//         decay={2}
//         position={[0, 0, 0]}
//       />
//     </group>
//   );
// };

// // Accelerating glowing particles component for Three.js scene
// const GlowingParticles = () => {
//   const particlesRef = useRef();
//   const particleCount = 100;

//   useEffect(() => {
//     if (!particlesRef.current) return;

//     const positions = new Float32Array(particleCount * 3);
//     const scales = new Float32Array(particleCount);
//     const speeds = new Float32Array(particleCount);
//     const colors = new Float32Array(particleCount * 3);

//     for (let i = 0; i < particleCount; i++) {
//       // Position particles in a spherical volume around the main sphere
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(Math.random() * 2 - 1);
//       const radius = 2 + Math.random() * 4; // Distance from center

//       positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
//       positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       positions[i * 3 + 2] = radius * Math.cos(phi);

//       // Random sizes
//       scales[i] = 0.05 + Math.random() * 0.1;

//       // Random speeds (for acceleration effect)
//       speeds[i] = 0.01 + Math.random() * 0.05;

//       // Random colors (blue, purple, green)
//       const colorChoice = Math.floor(Math.random() * 3);
//       if (colorChoice === 0) {
//         // Blue
//         colors[i * 3] = 0.2;
//         colors[i * 3 + 1] = 0.6;
//         colors[i * 3 + 2] = 0.9;
//       } else if (colorChoice === 1) {
//         // Purple
//         colors[i * 3] = 0.6;
//         colors[i * 3 + 1] = 0.35;
//         colors[i * 3 + 2] = 0.7;
//       } else {
//         // Green
//         colors[i * 3] = 0.2;
//         colors[i * 3 + 1] = 0.8;
//         colors[i * 3 + 2] = 0.4;
//       }
//     }

//     particlesRef.current.geometry.setAttribute(
//       "position",
//       new THREE.BufferAttribute(positions, 3)
//     );
//     particlesRef.current.geometry.setAttribute(
//       "scale",
//       new THREE.BufferAttribute(scales, 1)
//     );
//     particlesRef.current.geometry.setAttribute(
//       "speed",
//       new THREE.BufferAttribute(speeds, 1)
//     );
//     particlesRef.current.geometry.setAttribute(
//       "color",
//       new THREE.BufferAttribute(colors, 3)
//     );
//   }, []);

//   useFrame(({ clock }) => {
//     if (!particlesRef.current) return;

//     const time = clock.getElapsedTime();
//     const positions = particlesRef.current.geometry.attributes.position.array;
//     const speeds = particlesRef.current.geometry.attributes.speed.array;

//     for (let i = 0; i < particleCount; i++) {
//       // Calculate direction vector pointing to center
//       const x = positions[i * 3];
//       const y = positions[i * 3 + 1];
//       const z = positions[i * 3 + 2];

//       // Distance from center
//       const dist = Math.sqrt(x * x + y * y + z * z);

//       // Direction vector
//       const dx = -x / dist;
//       const dy = -y / dist;
//       const dz = -z / dist;

//       // Accelerate particles toward the center
//       const speed = speeds[i] * (Math.sin(time * 0.5) * 0.5 + 1); // Pulsing speed

//       // Move particles
//       positions[i * 3] += dx * speed;
//       positions[i * 3 + 1] += dy * speed;
//       positions[i * 3 + 2] += dz * speed;

//       // Reset particles that get too close to center
//       if (dist < 1.5) {
//         const theta = Math.random() * Math.PI * 2;
//         const phi = Math.acos(Math.random() * 2 - 1);
//         const newRadius = 5 + Math.random() * 2;

//         positions[i * 3] = newRadius * Math.sin(phi) * Math.cos(theta);
//         positions[i * 3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
//         positions[i * 3 + 2] = newRadius * Math.cos(phi);
//       }
//     }

//     particlesRef.current.geometry.attributes.position.needsUpdate = true;
//   });

//   return (
//     <points ref={particlesRef}>
//       <bufferGeometry />
//       <pointsMaterial
//         size={0.1}
//         vertexColors
//         transparent
//         opacity={0.8}
//         blending={THREE.AdditiveBlending}
//       />
//     </points>
//   );
// };

// const BackgroundAnimation = () => {
//   // Keep the original particle animation for fallback or mobile
//   useEffect(() => {
//     // Only create particles if the Three.js scene is not visible
//     // This could be determined by screen size or device capability
//     const isMobile = window.innerWidth < 768;

//     if (isMobile) {
//       const bgAnimation = document.getElementById("bg-animation");
//       if (!bgAnimation) return;

//       const colors = ["#3498db", "#9b59b6", "#2ecc71"];
//       const particleCount = 50; // Reduced count for better performance

//       // Create particles
//       for (let i = 0; i < particleCount; i++) {
//         createParticle(bgAnimation, colors);
//       }

//       // Add mouse movement effect
//       const handleMouseMove = (e) => {
//         const mouseX = e.clientX / window.innerWidth;
//         const mouseY = e.clientY / window.innerHeight;

//         // Subtle movement of particles based on mouse position
//         const particles = document.querySelectorAll(".particle");
//         particles.forEach((particle) => {
//           const moveX = (mouseX - 0.5) * 5;
//           const moveY = (mouseY - 0.5) * 5;
//           particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
//         });
//       };

//       document.addEventListener("mousemove", handleMouseMove);

//       // Cleanup
//       return () => {
//         document.removeEventListener("mousemove", handleMouseMove);
//         if (bgAnimation) {
//           bgAnimation.innerHTML = "";
//         }
//       };
//     }
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
//     particle.style.boxShadow = `0 0 ${Math.floor(size * 3)}px ${
//       colors[colorIndex]
//     }`; // Enhanced glow
//     particle.style.borderRadius = "50%";

//     // Animation with acceleration
//     const duration = Math.random() * 20 + 10;
//     const delay = Math.random() * 5;
//     particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, glow 3s ease-in-out infinite`;

//     // Add to DOM
//     parent.appendChild(particle);
//   }

//   // Use media query to determine if we should render 3D scene
//   const isMobile = window.innerWidth < 768;

//   return (
//     <>
//       {!isMobile && (
//         <div className="threejs-bg">
//           <Canvas
//             camera={{ position: [0, 0.8, 6], fov: 10 }}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               width: "100vw",
//               height: "100vh",
//               zIndex: -1,
//               background: "transparent",
//             }}
//           >
//             <color attach="background" args={["#0b1222"]} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[3, 3, 3]} intensity={1} />
//             <NodeSphere />
//             <GlowingParticles />
//           </Canvas>
//         </div>
//       )}
//       <div
//         className="bg-animation"
//         id="bg-animation"
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//           overflow: "hidden",
//         }}
//       ></div>
//       <style jsx global>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) translateX(0);
//           }
//           25% {
//             transform: translateY(-15px) translateX(10px);
//           }
//           50% {
//             transform: translateY(0) translateX(20px);
//           }
//           75% {
//             transform: translateY(15px) translateX(10px);
//           }
//         }

//         @keyframes glow {
//           0%,
//           100% {
//             opacity: 0.3;
//             box-shadow: 0 0 5px currentColor;
//           }
//           50% {
//             opacity: 0.8;
//             box-shadow: 0 0 20px currentColor;
//           }
//         }

//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           pointer-events: none;
//           transition: transform 0.1s ease-out;
//           will-change: transform, opacity;
//         }
//       `}</style>
//     </>
//   );
// };

// export default BackgroundAnimation;

// 44///
// 44444444444///4
// nt///

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

// NodeSphere component for the 3D visualization
const NodeSphere = () => {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
      // groupRef.current.rotation.x += 0.001;
    }
  });

  const radius = 1.25;
  const segments = 8; // Define node grid density

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
    <group ref={groupRef} position={[0, -1.3, 0]}>
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

      {/* Render outer wireframe sphere with glow effect */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color="#9b59b6"
          wireframe
          opacity={0.2}
          transparent
          emissive="#9b59b6"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Add inner glow sphere for box shadow effect */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 32, 32]} />
        <meshStandardMaterial
          color="#9b59b6"
          opacity={0.05}
          transparent
          emissive="#9b59b6"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Add point light inside for box shadow effect */}
      <pointLight
        color="#9b59b6"
        intensity={1}
        distance={3}
        decay={2}
        position={[0, 0, 0]}
      />
    </group>
  );
};

// Accelerating glowing particles component for Three.js scene
const GlowingParticles = () => {
  const particlesRef = useRef();
  const particleCount = 100;

  useEffect(() => {
    if (!particlesRef.current) return;

    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Position particles in a spherical volume around the main sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2 + Math.random() * 4; // Distance from center

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Random sizes
      scales[i] = 0.05 + Math.random() * 0.1;

      // Random speeds (for acceleration effect)
      speeds[i] = 0.01 + Math.random() * 0.05;

      // Random colors (blue, purple, green)
      const colorChoice = Math.floor(Math.random() * 3);
      if (colorChoice === 0) {
        // Blue
        colors[i * 3] = 0.2;
        colors[i * 3 + 1] = 0.6;
        colors[i * 3 + 2] = 0.9;
      } else if (colorChoice === 1) {
        // Purple
        colors[i * 3] = 0.6;
        colors[i * 3 + 1] = 0.35;
        colors[i * 3 + 2] = 0.7;
      } else {
        // Green
        colors[i * 3] = 0.2;
        colors[i * 3 + 1] = 0.8;
        colors[i * 3 + 2] = 0.4;
      }
    }

    particlesRef.current.geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particlesRef.current.geometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(scales, 1)
    );
    particlesRef.current.geometry.setAttribute(
      "speed",
      new THREE.BufferAttribute(speeds, 1)
    );
    particlesRef.current.geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );
  }, []);

  useFrame(({ clock }) => {
    if (!particlesRef.current) return;

    const time = clock.getElapsedTime();
    const positions = particlesRef.current.geometry.attributes.position.array;
    const speeds = particlesRef.current.geometry.attributes.speed.array;

    for (let i = 0; i < particleCount; i++) {
      // Calculate direction vector pointing to center
      const x = positions[i * 3];
      const y = positions[i * 3 + 1];
      const z = positions[i * 3 + 2];

      // Distance from center
      const dist = Math.sqrt(x * x + y * y + z * z);

      // Direction vector
      const dx = -x / dist;
      const dy = -y / dist;
      const dz = -z / dist;

      // Accelerate particles toward the center
      const speed = speeds[i] * (Math.sin(time * 0.5) * 0.5 + 1); // Pulsing speed

      // Move particles
      positions[i * 3] += dx * speed;
      positions[i * 3 + 1] += dy * speed;
      positions[i * 3 + 2] += dz * speed;

      // Reset particles that get too close to center
      if (dist < 1.5) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const newRadius = 5 + Math.random() * 2;

        positions[i * 3] = newRadius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = newRadius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = newRadius * Math.cos(phi);
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
const Stars = () => {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({
    color: "#ffffff",
    size: 0.1,
    transparent: true,
    opacity: 0.6,
  });

  const starCount = 500;
  const positions = [];

  for (let i = 0; i < starCount; i++) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 100;
    const z = (Math.random() - 0.5) * 100;
    positions.push(x, y, z);
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  return <points geometry={starGeometry} material={starMaterial} />;
};

const BackgroundAnimation = () => {
  // Keep the original particle animation for fallback or mobile
  useEffect(() => {
    // Only create particles if the Three.js scene is not visible
    // This could be determined by screen size or device capability
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const bgAnimation = document.getElementById("bg-animation");
      if (!bgAnimation) return;

      const colors = ["#3498db", "#9b59b6", "#2ecc71"];
      const particleCount = 25; // Reduced count for better performance

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
    particle.style.boxShadow = `0 0 ${Math.floor(size * 3)}px ${
      colors[colorIndex]
    }`; // Enhanced glow
    particle.style.borderRadius = "50%";

    // Animation with acceleration
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite, glow 3s ease-in-out infinite`;

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
            camera={{ position: [0, 0.8, 6], fov: 10 }}
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
            <color attach="background" args={["#050816"]} />{" "}
            <fog attach="fog" args={["#090c1a", 5, 20]} />
            {/* <div className="nebula-glow" /> */}
            {/* Dark cosmic shade */}
            {/* Glow effect */}
            <EffectComposer>
              <Bloom
                intensity={1.5} // strength of the glow
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
              />
            </EffectComposer>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#9b59b6" />
            <OrbitControls enableZoom={false} />
            {/* Your components */}
            <NodeSphere />
            <GlowingParticles />
            {/* Extra stars in the background */}
            <Stars />
          </Canvas>
        </div>
      )}
      <div
        className="bg-animation"
        id="bg-animation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          overflow: "hidden",
        }}
      ></div>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(15px) translateX(10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.3;
            box-shadow: 0 0 5px currentColor;
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 20px currentColor;
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.1s ease-out;
          will-change: transform, opacity;
        }
      `}</style>
    </>
  );
};

export default BackgroundAnimation;
