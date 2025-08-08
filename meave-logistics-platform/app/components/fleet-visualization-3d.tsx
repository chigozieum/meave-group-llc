"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, MapPin } from "lucide-react"
import type * as THREE from "three"

function MiniTruck({ position, color, status }: { position: [number, number, number]; color: string; status: string }) {
  const truckRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (truckRef.current) {
      truckRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
      if (status === "active") {
        truckRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1
      }
    }
  })

  return (
    <Float
      speed={status === "active" ? 2 : 0.5}
      rotationIntensity={0.1}
      floatIntensity={status === "active" ? 0.3 : 0.1}
    >
      <group ref={truckRef} position={position} scale={0.3}>
        {/* Truck Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2, 1, 0.8]} />
          <meshStandardMaterial
            color={color}
            metalness={0.8}
            roughness={0.2}
            emissive={status === "active" ? color : "#000000"}
            emissiveIntensity={status === "active" ? 0.1 : 0}
          />
        </mesh>

        {/* Truck Cab */}
        <mesh position={[0.8, 0.3, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Wheels */}
        {[-0.5, 0.5].map((x, i) => (
          <group key={i}>
            <mesh position={[x, -0.5, 0.5]} castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[x, -0.5, -0.5]} castShadow receiveShadow>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
              <meshStandardMaterial color="#374151" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}

        {/* Status indicator light */}
        <mesh position={[1.2, 0.8, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial
            color={status === "active" ? "#10b981" : status === "maintenance" ? "#ef4444" : "#6b7280"}
            emissive={status === "active" ? "#10b981" : status === "maintenance" ? "#ef4444" : "#6b7280"}
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>
    </Float>
  )
}

function TexasMap() {
  const mapRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (mapRef.current) {
      mapRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group ref={mapRef} position={[0, -1, -2]} rotation={[Math.PI / 2, 0, 0]}>
      {/* Simplified Texas shape */}
      <mesh receiveShadow>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#1e293b" transparent opacity={0.3} roughness={0.8} />
      </mesh>

      {/* Major cities markers */}
      {[
        { name: "Houston", pos: [-1, 1, 0.1] },
        { name: "Dallas", pos: [0, 3, 0.1] },
        { name: "Austin", pos: [-0.5, 2, 0.1] },
        { name: "San Antonio", pos: [-1, 1.5, 0.1] },
      ].map((city, i) => (
        <mesh key={i} position={city.pos} castShadow>
          <sphereGeometry args={[0.1]} />
          <meshStandardMaterial color="#fbbf24" emissive="#f59e0b" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

function Scene3D({ fleetData, selectedTruck }: { fleetData: any[]; selectedTruck: string | null }) {
  const truckPositions = [
    [-2, 0, 1],
    [2, 0, -1],
    [0, 0, 2],
    [-1, 0, -2],
    [1.5, 0, 0],
    [-1.5, 0, 1.5],
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "#10b981"
      case "maintenance":
        return "#ef4444"
      case "idle":
        return "#6b7280"
      default:
        return "#3b82f6"
    }
  }

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.3} color="#3b82f6" />

      <Environment preset="city" />

      <TexasMap />

      {fleetData.map((truck, index) => (
        <MiniTruck
          key={truck.id}
          position={truckPositions[index] as [number, number, number]}
          color={selectedTruck === truck.id ? "#fbbf24" : getStatusColor(truck.status)}
          status={truck.status}
        />
      ))}

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={15}
        minDistance={5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />
    </>
  )
}

export default function FleetVisualization3D() {
  const [selectedTruck, setSelectedTruck] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"fleet" | "routes">("fleet")

  const fleetData = [
    {
      id: "MEV-001",
      status: "active",
      driver: "John Martinez",
      location: "Houston, TX",
      load: "Chemicals to Dallas",
    },
    {
      id: "MEV-002",
      status: "active",
      driver: "Sarah Johnson",
      location: "Beaumont, TX",
      load: "Steel to Austin",
    },
    {
      id: "MEV-003",
      status: "maintenance",
      driver: "Mike Rodriguez",
      location: "Houston Depot",
      load: "Scheduled Maintenance",
    },
    {
      id: "MEV-004",
      status: "active",
      driver: "Lisa Chen",
      location: "San Antonio, TX",
      load: "Equipment to Corpus Christi",
    },
    {
      id: "MEV-005",
      status: "idle",
      driver: "David Wilson",
      location: "Houston Depot",
      load: "Awaiting Assignment",
    },
    {
      id: "MEV-006",
      status: "active",
      driver: "Maria Garcia",
      location: "Dallas, TX",
      load: "Machinery to Houston",
    },
  ]

  const selectedTruckData = fleetData.find((truck) => truck.id === selectedTruck)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                3D Fleet Visualization
              </CardTitle>
              <CardDescription>Real-time 3D view of your entire fleet across Texas</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant={viewMode === "fleet" ? "default" : "outline"} onClick={() => setViewMode("fleet")}>
                Fleet View
              </Button>
              <Button variant={viewMode === "routes" ? "default" : "outline"} onClick={() => setViewMode("routes")}>
                Routes View
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 3D Visualization */}
            <div className="lg:col-span-2">
              <div className="w-full h-96 bg-gradient-to-b from-slate-900 to-slate-800 rounded-lg overflow-hidden">
                <Canvas
                  shadows
                  camera={{ position: [0, 8, 10], fov: 60 }}
                  gl={{
                    antialias: true,
                    alpha: true,
                  }}
                >
                  <Scene3D fleetData={fleetData} selectedTruck={selectedTruck} />
                </Canvas>
              </div>
            </div>

            {/* Fleet Status Panel */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">4</div>
                  <div className="text-sm text-green-600">Active</div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-700">1</div>
                  <div className="text-sm text-yellow-600">Maintenance</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">1</div>
                  <div className="text-sm text-gray-600">Idle</div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">87%</div>
                  <div className="text-sm text-blue-600">Utilization</div>
                </div>
              </div>

              {selectedTruckData && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">{selectedTruckData.id}</CardTitle>
                    <CardDescription>Truck Details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Status</span>
                      <Badge
                        variant={
                          selectedTruckData.status === "active"
                            ? "default"
                            : selectedTruckData.status === "maintenance"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {selectedTruckData.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Driver</span>
                      <span className="text-sm font-medium">{selectedTruckData.driver}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Location</span>
                      <span className="text-sm font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {selectedTruckData.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Current Load</span>
                      <span className="text-sm font-medium">{selectedTruckData.load}</span>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Fleet Overview</h4>
                {fleetData.map((truck) => (
                  <div
                    key={truck.id}
                    className={`p-2 rounded cursor-pointer transition-colors ${
                      selectedTruck === truck.id ? "bg-blue-50 border border-blue-200" : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedTruck(truck.id)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{truck.id}</span>
                      <Badge
                        variant={
                          truck.status === "active"
                            ? "default"
                            : truck.status === "maintenance"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {truck.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">{truck.driver}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
