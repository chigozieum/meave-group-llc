"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Shield, Clock, MapPin, Phone, CheckCircle, ArrowRight, Zap, Award, Users } from "lucide-react"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleContactUs = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const services = [
    {
      id: 1,
      title: "Chemical Transportation",
      description: "Specialized handling of hazardous and non-hazardous chemicals with DOT compliance",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      features: [
        "DOT Certified Drivers",
        "Specialized Tank Trailers",
        "24/7 Emergency Response",
        "Real-time Monitoring",
        "Insurance Coverage up to $5M",
      ],
      stats: {
        deliveries: "200+",
        safety: "100%",
        coverage: "Texas-wide",
      },
    },
    {
      id: 2,
      title: "Steel & Heavy Machinery",
      description: "Expert transport of steel products, construction equipment, and industrial machinery",
      icon: Truck,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Heavy Haul Specialists",
        "Flatbed & Lowboy Trailers",
        "Permit Coordination",
        "Route Planning",
        "Crane & Rigging Services",
      ],
      stats: {
        deliveries: "150+",
        safety: "99.9%",
        coverage: "Multi-state",
      },
    },
    {
      id: 3,
      title: "Just-in-Time Delivery",
      description: "Precision logistics for manufacturing and production schedules",
      icon: Clock,
      color: "from-green-500 to-emerald-500",
      features: [
        "Scheduled Deliveries",
        "Inventory Management",
        "Real-time Tracking",
        "Flexible Scheduling",
        "Emergency Rush Service",
      ],
      stats: {
        deliveries: "300+",
        safety: "99.8%",
        coverage: "Regional",
      },
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: "Industry Expertise",
      description: "15+ years of specialized logistics experience",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Professional drivers and logistics coordinators",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Quick quotes and emergency dispatch available",
    },
  ]

  if (!isMounted) {
    return (
      <div className="py-20 bg-slate-800">
        <div className="text-center text-white">Loading Services...</div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to your industry needs with unmatched safety and reliability.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className={`bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                activeService === index ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => setActiveService(index)}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{service.stats.deliveries}</div>
                    <div className="text-xs text-gray-500">Deliveries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{service.stats.safety}</div>
                    <div className="text-xs text-gray-500">Safety Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{service.stats.coverage}</div>
                    <div className="text-xs text-gray-500">Coverage</div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={handleContactUs}
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Meave Group LLC?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8">Contact us today for a free consultation and quote.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              onClick={handleContactUs}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const element = document.getElementById("about")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              <MapPin className="mr-2 h-5 w-5" />
              View Coverage Area
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
