"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Float, Text3D } from "@react-three/drei"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Car, Users, MapPin, Award, Shield, Clock, Star, TrendingUp, Globe, CheckCircle, Target } from 'lucide-react'

function CompanyVisualization() {
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group>
        {/* Central Hub - Edinburg HQ */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#3b82f6"
            emissive="#1d4ed8"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Logistics Network */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.3}>
            <mesh
              position={[
                Math.cos((i * Math.PI) / 4) * 3.5,
                Math.sin((i * Math.PI) / 4) * 3.5,
                Math.sin(i * 0.7) * 1.5,
              ]}
            >
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? "#10b981" : "#f59e0b"}
                emissive={i % 2 === 0 ? "#059669" : "#d97706"}
                emissiveIntensity={0.4}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>
          </Float>
        ))}

        {/* Connection Network */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <group key={`connection-${i}`} rotation={[0, 0, (i * Math.PI) / 4]}>
            <mesh position={[1.75, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 3.5, 8]} />
              <meshStandardMaterial
                color="#60a5fa"
                emissive="#3b82f6"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
          </group>
        ))}

        {/* Floating Text */}
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={0.3}
          height={0.05}
          position={[-1.5, 2.5, 0]}
          rotation={[0, 0, 0]}
        >
          MEAVE GROUP
          <meshStandardMaterial color="#ffffff" emissive="#3b82f6" emissiveIntensity={0.2} />
        </Text3D>
      </group>
    </Float>
  )
}

export default function AboutSection() {
  const [activeService, setActiveService] = useState("logistics")

  const companyStats = [
    { icon: Truck, label: "Fleet Vehicles", value: "150+", color: "text-blue-500" },
    { icon: Car, label: "Rental Vehicles", value: "75+", color: "text-purple-500" },
    { icon: Users, label: "Team Members", value: "200+", color: "text-green-500" },
    { icon: MapPin, label: "States Covered", value: "50", color: "text-orange-500" },
    { icon: Award, label: "Years Experience", value: "15+", color: "text-red-500" },
    { icon: Star, label: "Customer Rating", value: "4.9", color: "text-yellow-500" },
  ]

  const services = [
    {
      id: "logistics",
      title: "Freight & Logistics",
      description: "Comprehensive freight transportation and logistics solutions across the USA",
      features: ["Heavy Haul Transport", "Chemical Transportation", "Just-in-Time Delivery", "Cross-Border Shipping"],
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "rentals",
      title: "Luxury Rentals",
      description: "Premium vehicle rental services for executive and luxury transportation needs",
      features: ["Executive Sedans", "Luxury SUVs", "Sports Cars", "Turo Platform Integration"],
      icon: Car,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "network",
      title: "Trucker Network",
      description: "Independent trucker and owner-operator network management platform",
      features: ["Load Matching", "Performance Tracking", "Payment Processing", "Support Services"],
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description: "Started as a small trucking company in South Texas",
    },
    {
      year: "2015",
      title: "Fleet Expansion",
      description: "Expanded to 50+ vehicles and entered chemical transportation",
    },
    {
      year: "2020",
      title: "Technology Integration",
      description: "Implemented advanced logistics management systems",
    },
    {
      year: "2022",
      title: "Luxury Rentals Launch",
      description: "Launched executive and luxury vehicle rental division",
    },
    {
      year: "2023",
      title: "Nationwide Expansion",
      description: "Extended operations to all 50 states with Edinburg HQ",
    },
    {
      year: "2024",
      title: "Trucker Network",
      description: "Launched independent trucker network platform",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">About Meave Group</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Driving America's
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Logistics Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From our headquarters in Edinburg, Texas, we've grown into a nationwide logistics powerhouse, combining
            traditional freight services with cutting-edge luxury rentals and trucker network solutions.
          </p>
        </div>

        {/* 3D Visualization */}
        <div className="mb-16">
          <div className="h-96 bg-slate-900/50 rounded-2xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={0.8} />
              <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
              <CompanyVisualization />
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {companyStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Business Divisions</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Three integrated business units working together to provide comprehensive transportation and logistics
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-pointer group ${
                  activeService === service.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Journey</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to nationwide operations - the Meave Group story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}
                >
                  <div className="flex-1 px-8">
                    <Card
                      className={`bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 ${
                        index % 2 === 0 ? "ml-auto" : "mr-auto"
                      } max-w-md`}
                    >
                      <CardContent className="p-6">
                        <div className="text-blue-400 font-bold text-lg mb-2">{milestone.year}</div>
                        <h4 className="text-white font-semibold text-xl mb-3">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To revolutionize the transportation and logistics industry by providing innovative, reliable, and
                sustainable solutions that connect businesses and individuals across America. We're committed to
                excellence in freight transportation, luxury vehicle rentals, and supporting independent truckers
                through our comprehensive network platform.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <div className="space-y-3">
                {["Safety First", "Customer Excellence", "Innovation", "Integrity", "Sustainability"].map(
                  (value, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      {value}
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 border-0 shadow-2xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Move Forward Together?</h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Whether you need freight transportation, luxury vehicle rentals, or want to join our trucker network,
                we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Started Today
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
