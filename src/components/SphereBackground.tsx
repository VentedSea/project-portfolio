import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SphereBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef(new THREE.Vector3());
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Option 1: Orthographic Camera
    const frustumSize = 50;
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 30;
    
    // Create spheres
    const spheres: THREE.Mesh[] = [];
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const originalColor = new THREE.Color(0x777777);
    const mouseColor = new THREE.Color(0x00ff00);  // Green color
    
    // Create a unique material for each sphere
    const createSphereMaterial = () => {
      return new THREE.MeshPhongMaterial({
        color: originalColor.clone(),
        specular: 0x666666,
        shininess: 60,
      });
    };
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 30);
    scene.add(pointLight);
    
    // Create grid of spheres
    // const aspect = window.innerWidth / window.innerHeight;
    const gridSize = {
      x: Math.ceil(25 * aspect), // Adjust horizontal grid based on aspect ratio
      y: 25
    };
    const spacing = 2.5; // Slightly reduced spacing to fit more spheres
    
    for (let x = -gridSize.x; x <= gridSize.x; x++) {
      for (let y = -gridSize.y; y <= gridSize.y; y++) {
        const sphere = new THREE.Mesh(sphereGeometry, createSphereMaterial());
        sphere.position.set(x * spacing, y * spacing, 0);
        sphere.userData.originalPosition = sphere.position.clone();
        scene.add(sphere);
        spheres.push(sphere);
      }
    }
    
    // Raycaster for mouse position
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const planeNormal = new THREE.Vector3(0, 0, 1);
    const planeConstant = 0; // The z-position of our grid
    const plane = new THREE.Plane(planeNormal, planeConstant);
    
    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      // Calculate mouse position in normalized device coordinates (-1 to +1)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Update the raycaster
      raycaster.setFromCamera(mouse, camera);
      
      // Calculate the intersection point with our plane
      raycaster.ray.intersectPlane(plane, mousePosition.current);
    };
    
    // Window resize handler
    const onWindowResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = frustumSize * aspect / -2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update sphere positions and rotations
      spheres.forEach((sphere) => {
        const distanceToMouse = sphere.position.distanceTo(mousePosition.current);
        const repelForce = Math.max(0, 1 - distanceToMouse / 10);
        
        if (repelForce > 0) {
          const direction = sphere.position
            .clone()
            .sub(mousePosition.current)
            .normalize();
          sphere.position.add(direction.multiplyScalar(repelForce * 0.2));
        }
        
        // Return to original position
        const originalPos = sphere.userData.originalPosition as THREE.Vector3;
        sphere.position.lerp(originalPos, 0.05);
        
        // Make sphere face the camera
        sphere.quaternion.copy(camera.quaternion);
        
        // Update color based on distance to mouse
        const material = sphere.material as THREE.MeshPhongMaterial;
        const colorInfluence = Math.max(0, 1 - distanceToMouse / 8); // Adjust the 8 to change the radius of color effect
        material.color.copy(originalColor).lerp(mouseColor, colorInfluence);
      });
      
      renderer.render(scene, camera);
    };
    
    // Add event listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
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
        background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)'
      }}
    />
  );
};

export default SphereBackground;