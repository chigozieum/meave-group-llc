"use client"

import { Suspense, useState, useCallback, useEffect } from "react"
import Navigation from "./components/navigation"
import Hero3D from "./components/hero-3d"
import ServicesSection from "./components/services-section"
import StatsSection from "./components/stats-section"
import AboutSection from "./components/about-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import Background3D from "./components/3d-background"
import BlogSection from "./components/blog-section"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Navigation handler function
  const handleNavigation = useCallback((section: string) => {
    setActiveSection(section)
  }, [])

  // Don't render anything until mounted (client-side)
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Global 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-900" />}>
        <Background3D color="#3b82f6" density={15} />
      </Suspense>

      {/* Navigation */}
      <Navigation onNavigate={handleNavigation} activeSection={activeSection} />

      {/* Hero Section - Full height */}
      <section id="home" className="relative min-h-screen">
        <Suspense
          fallback={
            <div className="h-screen bg-slate-900 flex items-center justify-center">
              <div className="text-white text-xl">Loading...</div>
            </div>
          }
        >
          <Hero3D />
        </Suspense>
      </section>

      {/* Services Section */}
      <section id="services" className="relative">
        <Suspense
          fallback={
            <div className="py-20 bg-slate-800">
              <div className="text-center text-white">Loading Services...</div>
            </div>
          }
        >
          <ServicesSection />
        </Suspense>
      </section>

      {/* Stats Section */}
      <section id="stats" className="relative">
        <Suspense
          fallback={
            <div className="py-20 bg-slate-900">
              <div className="text-center text-white">Loading Statistics...</div>
            </div>
          }
        >
          <StatsSection />
        </Suspense>
      </section>

      {/* About Section */}
      <section id="about" className="relative">
        <Suspense
          fallback={
            <div className="py-20 bg-slate-800">
              <div className="text-center text-white">Loading About...</div>
            </div>
          }
        >
          <AboutSection />
        </Suspense>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative">
        <Suspense
          fallback={
            <div className="py-20 bg-slate-800">
              <div className="text-center text-white">Loading Blog...</div>
            </div>
          }
        >
          <BlogSection />
        </Suspense>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative">
        <Suspense
          fallback={
            <div className="py-20 bg-slate-900">
              <div className="text-center text-white">Loading Contact...</div>
            </div>
          }
        >
          <ContactSection />
        </Suspense>
      </section>

      {/* Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}
