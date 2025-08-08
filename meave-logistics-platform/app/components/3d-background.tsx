"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

interface BackgroundProps {
  color?: string
  density?: number
}

function Stars({ color = "#3b82f6", density = 15 }: BackgroundProps) {
  const ref = useRef<any>()
  const [sphere] = useState(() => {
    // Generate points safely
    try {
      return random.inSphere(new Float32Array(density * 100), { radius: 1.5 })
    } catch (error) {
      console.warn("Failed to generate sphere points:", error)
      return new Float32Array(1500) // fallback
    }
  })

  useEffect(() => {
    if (ref.current) {
      const interval = setInterval(() => {
        if (ref.current) {
          ref.current.rotation.x -= 0.0001
          ref.current.rotation.y -= 0.0001
        }
      }, 16)

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color={color} size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function Background3D({ color = "#3b82f6", density = 15 }: BackgroundProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="fixed inset-0 bg-slate-900" />
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars color={color} density={density} />
      </Canvas>
    </div>
  )
}
