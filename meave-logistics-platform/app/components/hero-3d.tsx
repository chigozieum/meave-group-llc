"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars, Environment, Text3D } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, X } from "lucide-react"
import * as THREE from "three"

function MovingRoad() {
  const roadRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (roadRef.current) {
      // Moving road texture effect
      roadRef.current.material.map && (roadRef.current.material.map.offset.x = state.clock.elapsedTime * 0.1)
    }
  })

  return (
    <mesh ref={roadRef} position={[0, -2.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#1f2937" transparent opacity={0.4} roughness={0.8} />
    </mesh>
  )
}

function FloatingParticles({ count = 50 }) {
  const particles = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  // Generate random positions
  const particlePositions = new Float32Array(count * 3)
  const particleSizes = new Float32Array(count)
  const particleColors = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const i3 = i * 3
    particlePositions[i3] = (Math.random() - 0.5) * viewport.width * 2
    particlePositions[i3 + 1] = (Math.random() - 0.5) * viewport.height * 2
    particlePositions[i3 + 2] = (Math.random() - 0.5) * 10

    particleSizes[i] = Math.random() * 0.1 + 0.05

    // Blue to cyan gradient colors
    particleColors[i3] = Math.random() * 0.2 // R
    particleColors[i3 + 1] = Math.random() * 0.5 + 0.5 // G
    particleColors[i3 + 2] = Math.random() * 0.5 + 0.5 // B
  }

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x = state.clock.elapsedTime * 0.01
      particles.current.rotation.y = state.clock.elapsedTime * 0.02

      // Move particles to create wind effect
      const positions = particles.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        positions[i3] += Math.sin(state.clock.elapsedTime + i) * 0.001
        positions[i3 + 1] += Math.cos(state.clock.elapsedTime + i) * 0.001
      }
      particles.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
          needsUpdate={true}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particleColors}
          itemSize={3}
          needsUpdate={true}
        />
        <bufferAttribute attach="attributes-size" count={count} array={particleSizes} itemSize={1} needsUpdate={true} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function MovingCompanyText() {
  const textRef = useRef<THREE.Group>(null)
  const pathRef = useRef({
    points: [new THREE.Vector3(-6, 2.5, -3), new THREE.Vector3(6, 2.5, -3)],
    currentPoint: 0,
    progress: 0,
    speed: 0.0005, // Very slow movement
  })

  useFrame((state) => {
    if (textRef.current) {
      const path = pathRef.current
      const currentPoint = path.points[path.currentPoint]
      const nextPoint = path.points[(path.currentPoint + 1) % path.points.length]

      // Calculate direction vector
      const direction = new THREE.Vector3().subVectors(nextPoint, currentPoint)
      const length = direction.length()

      // Normalize direction and apply speed
      direction.normalize()

      // Update position along the path with smooth lerp
      const targetX = currentPoint.x + direction.x * path.progress * length
      const targetY = currentPoint.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.1

      textRef.current.position.x = THREE.MathUtils.lerp(textRef.current.position.x, targetX, 0.02)
      textRef.current.position.y = THREE.MathUtils.lerp(textRef.current.position.y, targetY, 0.05)

      // Update progress
      path.progress += path.speed

      // If we've reached the next point, reverse direction
      if (path.progress >= 1) {
        path.currentPoint = (path.currentPoint + 1) % path.points.length
        path.progress = 0
      }

      // Subtle rotation
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group ref={textRef} position={[-6, 2.5, -3]} scale={0.4}>
      <Suspense fallback={null}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.8}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          MEAVE GROUP LLC
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.3}
          />
        </Text3D>
      </Suspense>
    </group>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
      <spotLight
        position={[0, 10, 0]}
        intensity={0.8}
        angle={0.3}
        penumbra={0.5}
        color="#60a5fa"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      <Environment preset="night" />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />

      <MovingCompanyText />
      <FloatingParticles count={100} />
      <MovingRoad />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </>
  )
}

export default function Hero3D() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* 3D Background */}
      {isMounted && (
        <div className="absolute inset-0">
          <Canvas
            shadows
            camera={{ position: [0, 5, 15], fov: isMobile ? 75 : 60 }}
            gl={{
              antialias: true,
              alpha: true,
              preserveDrawingBuffer: true,
              powerPreference: isMobile ? "low-power" : "high-performance",
            }}
            dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower resolution on mobile
          >
            <Scene3D />
          </Canvas>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30">
                  <span className="text-blue-300 text-xs md:text-sm font-medium">🚛 Leading Texas Logistics</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Moving
                  <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Texas Forward
                  </span>
                </h1>

                <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-lg">
                  Premium logistics solutions for chemical, steel, and industrial transportation across Texas. Your
                  cargo, our commitment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size={isMobile ? "default" : "lg"}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
                  onClick={() => {
                    const element = document.getElementById("services")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size={isMobile ? "default" : "lg"}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Watch Our Story
                </Button>
              </div>

              {/* Stats - Responsive grid for mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-4 md:pt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                  <div className="text-xs md:text-sm text-gray-400">Deliveries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">99.8%</div>
                  <div className="text-xs md:text-sm text-gray-400">On-Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                  <div className="text-xs md:text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-xs md:text-sm text-gray-400">Years</div>
                </div>
              </div>
            </div>

            {/* Right Content - Additional 3D Elements - Hidden on mobile */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-white/10" />
                <div className="relative p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-white">Why Choose Meave Group?</h3>
                  <div className="space-y-4">
                    {[
                      "Advanced GPS tracking & real-time updates",
                      "Specialized chemical & industrial transport",
                      "24/7 customer support & monitoring",
                      "Fully licensed & insured operations",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-blue-400"
              onClick={() => setIsVideoPlaying(false)}
            >
              <X className="h-6 w-6 md:h-8 md:w-8" />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Meave Group LLC - Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
