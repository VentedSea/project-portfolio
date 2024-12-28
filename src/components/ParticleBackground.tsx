import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SphereBackground = () => {
  const containerRef: any = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    // Adjust camera position
    camera.position.z = 20;
    
    // Create sphere geometry and material
    const spheres: any = [];
    const sphereGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x666666,
    });
    
    // Create grid of spheres
    const gridSize = 20;
    const spacing = 2;
    
    for (let x = -gridSize; x <= gridSize; x++) {
      for (let y = -gridSize; y <= gridSize; y++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        // Adjust initial positions to better fill the screen
        sphere.position.x = x * spacing;
        sphere.position.y = y * spacing;
        sphere.position.z = 0;
        sphere.userData.basePosition = {
          x: sphere.position.x,
          y: sphere.position.y,
          z: sphere.position.z
        };
        scene.add(sphere);
        spheres.push(sphere);
      }
    }

    // Mouse tracking
    const mouse = {
      x: 0,
      y: 0
    };

    const mouseVec3 = new THREE.Vector3();
    
    // Update mouse position in 3D space
    const updateMousePosition = (event: any) => {
      // Get the mouse position relative to the canvas
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;

      // Convert to normalized device coordinates (-1 to +1)
      mouseVec3.x = ((mouse.x / window.innerWidth) * 2 - 1) * (window.innerWidth / 80);
      mouseVec3.y = (-(mouse.y / window.innerHeight) * 2 + 1) * (window.innerHeight / 80);
      mouseVec3.z = 0;
    };

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Update sphere positions
      spheres.forEach((sphere: any) => {
        const basePos = sphere.userData.basePosition;
        
        // Calculate distance from mouse
        const dx = sphere.position.x - mouseVec3.x;
        const dy = sphere.position.y - mouseVec3.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repulsion force
        const repulsionRadius = 5;
        if (distance < repulsionRadius) {
          const force = (1 - distance / repulsionRadius) * 1;
          sphere.position.x += (dx / distance) * force;
          sphere.position.y += (dy / distance) * force;
        }
        
        // Return to base position
        sphere.position.x += (basePos.x - sphere.position.x) * 0.1;
        sphere.position.y += (basePos.y - sphere.position.y) * 0.1;
      });

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      spheres.forEach(sphere => {
        scene.remove(sphere);
        sphere.geometry.dispose();
        sphere.material.dispose();
      });
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: '#000000'
      }}
    />
  );
};

export default SphereBackground;