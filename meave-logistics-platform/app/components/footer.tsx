"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Truck, Facebook, Twitter, Linkedin, Instagram, ArrowRight, CheckCircle } from "lucide-react"
import { useState, useCallback } from "react"

interface FooterProps {
  onNavigate?: (section: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Safe browser check
  const isBrowser = typeof window !== "undefined"

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log("Subscribed with email:", email)
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  // Scroll to section function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (!isBrowser) return

      const element = document.getElementById(sectionId)
      if (!element) return

      // Get the current scroll position
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop

      // Calculate the target position
      let targetPosition = 0

      if (sectionId === "home") {
        targetPosition = 0
      } else {
        // For other sections, account for the navigation height
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + currentScroll
        targetPosition = elementTop - 100 // 100px offset for navigation
      }

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })

      // Update parent component if callback provided
      if (onNavigate) {
        onNavigate(sectionId)
      }
    },
    [isBrowser, onNavigate],
  )

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  ]

  const quickLinks = [
    { name: "Home", section: "home" },
    { name: "Services", section: "services" },
    { name: "About Us", section: "about" },
    { name: "Contact", section: "contact" },
  ]

  const serviceLinks = [
    { name: "Chemical Transport", section: "services" },
    { name: "Steel & Machinery", section: "services" },
    { name: "Just-in-Time Delivery", section: "services" },
    { name: "Texas-Wide Coverage", section: "services" },
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Meave Group LLC</h1>
                <p className="text-xs text-blue-300">Logistics Excellence</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Premium logistics solutions for chemical, steel, and industrial transportation across Texas.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.section)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.section)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for industry updates and company news.</p>
            {isSubscribed ? (
              <div className="flex items-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Successfully subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-500"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Meave Group LLC. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
