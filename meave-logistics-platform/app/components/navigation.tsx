"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Truck, Menu, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface NavigationProps {
  onNavigate?: (section: string) => void
  activeSection?: string
}

export default function Navigation({ onNavigate, activeSection = "home" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)
  const [currentActiveSection, setCurrentActiveSection] = useState(activeSection)
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "chemical",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const router = useRouter()
  const pathname = usePathname()

  // Safe window check
  const isBrowser = typeof window !== "undefined"

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  // Scroll to section function
  const scrollToSection = useCallback(
    (sectionId: string) => {
      if (!isBrowser) return

      // If we're not on the home page and trying to scroll to a section, navigate to home first
      if (!isHomePage && sectionId !== "blog") {
        router.push(`/#${sectionId}`)
        return
      }

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

      // Update active section immediately
      setCurrentActiveSection(sectionId)
      if (onNavigate) {
        onNavigate(sectionId)
      }
    },
    [isBrowser, onNavigate, isHomePage, router],
  )

  useEffect(() => {
    if (!isBrowser || !isHomePage) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.pageYOffset || document.documentElement.scrollTop
          setIsScrolled(scrollY > 50)

          // Update active section based on scroll position
          const sections = ["home", "services", "stats", "about", "contact"]
          let currentSection = "home"

          for (const sectionId of sections) {
            const element = document.getElementById(sectionId)
            if (element) {
              const rect = element.getBoundingClientRect()
              const elementTop = rect.top + scrollY
              const elementBottom = elementTop + rect.height

              // Check if we're in this section (with some offset for better UX)
              if (scrollY >= elementTop - 200 && scrollY < elementBottom - 200) {
                currentSection = sectionId
              }
            }
          }

          if (currentSection !== currentActiveSection) {
            setCurrentActiveSection(currentSection)
            if (onNavigate) {
              onNavigate(currentSection)
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isBrowser, onNavigate, currentActiveSection, isHomePage])

  // Handle hash navigation when coming from external pages
  useEffect(() => {
    if (!isBrowser || !isHomePage) return

    const hash = window.location.hash.replace("#", "")
    if (hash && hash !== currentActiveSection) {
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [isBrowser, isHomePage, scrollToSection, currentActiveSection])

  const navItems = [
    { name: "Home", href: "/#home", id: "home", type: "scroll" },
    { name: "Services", href: "/#services", id: "services", type: "scroll" },
    { name: "About", href: "/#about", id: "about", type: "scroll" },
    { name: "Blog", href: "/blog", id: "blog", type: "link" },
    { name: "Contact", href: "/#contact", id: "contact", type: "scroll" },
  ]

  const handleNavClick = (item: any) => {
    if (item.type === "scroll") {
      if (isHomePage) {
        scrollToSection(item.id)
      } else {
        router.push(item.href)
      }
    }
    setIsMobileMenuOpen(false) // Close mobile menu if open
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      scrollToSection("home")
    } else {
      router.push("/")
    }
  }

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote form submitted:", quoteForm)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsQuoteDialogOpen(false)
      setQuoteForm({
        name: "",
        email: "",
        company: "",
        service: "chemical",
        message: "",
      })
    }, 2000)
  }

  // Determine active section based on current page
  const getActiveSection = () => {
    if (pathname.startsWith("/blog")) return "blog"
    return currentActiveSection
  }

  const displayActiveSection = getActiveSection()

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Meave Group LLC</h1>
                <p className="text-xs text-blue-300">Logistics Excellence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      className={`text-white hover:text-blue-400 transition-colors duration-200 font-medium ${
                        displayActiveSection === item.id ? "text-blue-400" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`text-white hover:text-blue-400 transition-colors duration-200 font-medium ${
                        displayActiveSection === item.id ? "text-blue-400" : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                  {displayActiveSection === item.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-100 transition-transform duration-300"></div>
                  )}
                </div>
              ))}
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6"
                onClick={() => setIsQuoteDialogOpen(true)}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:bg-slate-800/50"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-4 p-6 space-y-4 border border-slate-700">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      className={`block text-white hover:text-blue-400 transition-colors duration-200 font-medium py-2 ${
                        displayActiveSection === item.id ? "text-blue-400" : ""
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      className={`block w-full text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium py-2 ${
                        displayActiveSection === item.id ? "text-blue-400" : ""
                      }`}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  onClick={() => {
                    setIsQuoteDialogOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Dialog */}
      <Dialog open={isQuoteDialogOpen} onOpenChange={setIsQuoteDialogOpen}>
        <DialogContent className="bg-slate-800 text-white border-slate-700 max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">Request a Quote</DialogTitle>
            <DialogDescription className="text-gray-300">
              Fill out the form below and we'll get back to you within 2 hours.
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quote Request Sent!</h3>
              <p className="text-gray-300">We'll contact you shortly with pricing information.</p>
            </div>
          ) : (
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-300">
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  value={quoteForm.company}
                  onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">
                  Service Needed
                </label>
                <select
                  id="service"
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="chemical">Chemical Transportation</option>
                  <option value="steel">Steel & Heavy Machinery</option>
                  <option value="jit">Just-in-Time Delivery</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:border-blue-500 focus:outline-none resize-none"
                  placeholder="Tell us about your logistics needs..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
              >
                Submit Quote Request
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
