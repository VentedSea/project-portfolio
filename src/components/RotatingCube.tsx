
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import { Text3D } from '@react-three/drei'

function FloatingText() {
  const textRef: any = useRef()
  
  useFrame(({ clock }) => {
    textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + 1
    textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
  })

  return (
    <Text3D 
      ref={textRef}
      // font="/path/to/helvetiker_regular.json"
      font={'calbri'}
      size={0.75}
      height={0.2}
      curveSegments={12}
    >
      Your Name
      <meshStandardMaterial metalness={0.5} roughness={0.2} color="#ffffff" />
    </Text3D>
  )
}

function ParticleGalaxy() {
  const particlesCount = 5000
  const positions = new Float32Array(particlesCount * 3)
  
  for(let i = 0; i < particlesCount; i++) {
    const i3 = i * 3
    const radius = Math.random() * 3
    const angle = Math.random() * Math.PI * 2
    positions[i3] = Math.cos(angle) * radius
    positions[i3 + 1] = (Math.random() - 0.5) * 0.5
    positions[i3 + 2] = Math.sin(angle) * radius
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" sizeAttenuation={true} />
    </points>
  )
}

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  uniform float time;
  varying vec2 vUv;
  
  void main() {
    vec3 color = vec3(0.5 + 0.3 * sin(vUv.x * 10.0 + time),
                      0.5 + 0.3 * sin(vUv.y * 10.0 + time),
                      0.5 + 0.3 * sin((vUv.x + vUv.y) * 5.0 + time));
    gl_FragColor = vec4(color, 1.0);
  }
`

function ShaderSphere() {
  const materialRef: any = useRef()
  
  useFrame(({ clock }) => {
    materialRef.current.uniforms.time.value = clock.getElapsedTime()
  })

  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 }
        }}
      />
    </mesh>
  )
}

function DNAHelix() {
  const group: any = useRef()
  const points = 50
  const radius = 2
  
  useFrame(({ clock }) => {
    group.current.rotation.y += 0.005
  })

  return (
    <group ref={group}>
      {[...Array(points)].map((_, i) => {
        const angle = (i / points) * Math.PI * 4
        return (
          <group key={i} position={[
            Math.cos(angle) * radius,
            (i / points) * 5 - 2.5,
            Math.sin(angle) * radius
          ]}>
            <mesh>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color={i % 2 ? "#ff0000" : "#0000ff"} />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

function Cube() {
  const meshRef: any = useRef()
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002
      meshRef.current.rotation.y += 0.002

    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#8080FF" />
    </mesh>
  )
}

function RotatingCube() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      
    <Canvas camera={{ position: [0, 5, 10] }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 5, 0]} intensity={1.5} />
      
      {/* Position objects in 3D space */}
      <group position={[0, 0, 0]}>
        <Cube />
      </group>
      
      <group position={[4, 0, 0]}>
        <DNAHelix />
      </group>
      
      <group position={[0, 0, -5]}>
        <ParticleGalaxy />
      </group>
      
      
      <group position={[-4, 2, 0]}>
        <ShaderSphere />
      </group>
      
      <OrbitControls />
    </Canvas>
  
    </div>
  )
}

export default RotatingCube