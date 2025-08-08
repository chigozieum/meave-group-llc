"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Clock, Award, Users, MapPin } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration = 2000, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-bold">
      {prefix}
      {count}
      {suffix}
    </div>
  )
}

export default function StatsSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const stats = [
    {
      icon: Truck,
      value: 500,
      suffix: "+",
      label: "Successful Deliveries",
      description: "Completed safely and on time",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      value: 99.8,
      suffix: "%",
      label: "Safety Record",
      description: "Industry-leading safety standards",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Round-the-clock customer service",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Proven track record in logistics",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Professional Drivers",
      description: "Certified and experienced team",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: MapPin,
      value: 100,
      suffix: "%",
      label: "Texas Coverage",
      description: "Statewide logistics network",
      color: "from-indigo-500 to-blue-500",
    },
  ]

  if (!isMounted) {
    return (
      <div className="py-20 bg-slate-900">
        <div className="text-center text-white">Loading Statistics...</div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to excellence and reliability in logistics services.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <Counter end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300 mb-6">
              Our commitment to excellence has earned us partnerships with major chemical manufacturers, steel
              producers, and industrial companies across Texas.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-400">
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-400">Chemical Companies</div>
                <div className="text-sm">25+ Active Clients</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-green-400">Steel Manufacturers</div>
                <div className="text-sm">15+ Regular Partners</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-yellow-400">Industrial Firms</div>
                <div className="text-sm">30+ Ongoing Contracts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
