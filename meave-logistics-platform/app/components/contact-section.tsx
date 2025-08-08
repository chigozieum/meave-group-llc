"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from "lucide-react"

function ContactVisualization() {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        {/* Central Communication Hub */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#059669"
            emissive="#047857"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Communication Signals */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Float key={i} speed={2 + i * 0.3} rotationIntensity={0.1} floatIntensity={0.5}>
            <mesh
              position={[Math.cos((i * Math.PI) / 3) * 2.5, Math.sin((i * Math.PI) / 3) * 2.5, Math.sin(i * 0.5) * 1]}
            >
              <sphereGeometry args={[0.15]} />
              <meshStandardMaterial
                color="#10b981"
                emissive="#059669"
                emissiveIntensity={0.6}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        ))}

        {/* Connection Lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <group key={`line-${i}`} rotation={[0, 0, (i * Math.PI) / 3]}>
            <mesh position={[1.25, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.02, 0.02, 2.5, 8]} />
              <meshStandardMaterial
                color="#34d399"
                emissive="#10b981"
                emissiveIntensity={0.4}
                transparent
                opacity={0.6}
              />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
      })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "(713) 555-0123",
      description: "24/7 Emergency Dispatch Available",
      action: "tel:+17135550123",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "dispatch@meavegroup.com",
      description: "Response within 2 hours",
      action: "mailto:dispatch@meavegroup.com",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Houston, Texas",
      description: "Main Operations Center",
      action: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "24/7 Operations",
      description: "Always ready to serve",
      action: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Move Your
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Business Forward?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact our logistics experts today for a custom quote or emergency dispatch. We're here to keep your
            operations running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-xl">Request a Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <select
                      id="service-type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md text-white"
                    >
                      <option value="">Select Service Type</option>
                      <option value="chemical">Chemical Transportation</option>
                      <option value="steel">Steel & Heavy Machinery</option>
                      <option value="jit">Just-in-Time Delivery</option>
                      <option value="texas">Texas-Wide Coverage</option>
                      <option value="emergency">Emergency Dispatch</option>
                    </select>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your logistics needs..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-green-400 bg-green-500/20 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span>Message sent successfully! We'll contact you within 2 hours.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-white">Emergency Dispatch</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Need immediate logistics support? Our emergency dispatch team is available 24/7.
                </p>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open("tel:+17135550123")}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Emergency Dispatch
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & 3D Visualization */}
          <div className="space-y-8">
            {/* 3D Visualization */}
            <div className="h-64 bg-slate-900/50 rounded-xl overflow-hidden">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />
                <pointLight position={[-10, -10, -10]} intensity={0.3} color="#10b981" />
                <ContactVisualization />
                <Environment preset="forest" />
              </Canvas>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-green-500/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => {
                    if (info.action.startsWith("tel:") || info.action.startsWith("mailto:")) {
                      window.open(info.action)
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                    <p className="text-green-300 font-medium mb-1">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
