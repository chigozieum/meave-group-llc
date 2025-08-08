"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Tag, Search, User } from "lucide-react"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  image: string
  date: string
  author: string
  readTime: string
  slug: string
  featured?: boolean
}

export default function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Chemical Transportation: Safety Innovations for 2025",
      excerpt:
        "Explore cutting-edge safety technologies revolutionizing chemical transportation across Texas and beyond. From advanced containment systems to AI-powered route optimization, discover how industry leaders are setting new standards for safety while maintaining operational efficiency.",
      category: "safety",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
      date: "June 2, 2025",
      author: "Michael Rodriguez",
      readTime: "8 min read",
      slug: "future-chemical-transportation-safety",
      featured: true,
    },
    {
      id: "2",
      title: "How Real-Time Tracking is Transforming Texas Logistics",
      excerpt:
        "Discover how GPS and IoT technologies are creating unprecedented visibility in supply chains, allowing for minute-by-minute tracking and proactive problem solving. Learn about the latest innovations in fleet management and customer communication.",
      category: "technology",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      date: "May 28, 2025",
      author: "Sarah Johnson",
      readTime: "6 min read",
      slug: "real-time-tracking-texas-logistics",
    },
    {
      id: "3",
      title: "Sustainable Practices in Heavy Machinery Transportation",
      excerpt:
        "Learn how logistics companies are reducing their carbon footprint while maintaining efficiency in transporting heavy industrial equipment across the Lone Star State. Explore eco-friendly fuel alternatives and route optimization strategies.",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop&crop=center",
      date: "May 15, 2025",
      author: "David Chen",
      readTime: "7 min read",
      slug: "sustainable-heavy-machinery-transportation",
    },
    {
      id: "4",
      title: "Navigating Supply Chain Disruptions: Lessons from 2024",
      excerpt:
        "A comprehensive analysis of how leading logistics providers overcame major supply chain challenges last year, with actionable strategies for future resilience. Includes case studies from Texas-based manufacturers and distributors.",
      category: "industry",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&crop=center",
      date: "May 10, 2025",
      author: "Jennifer Martinez",
      readTime: "9 min read",
      slug: "navigating-supply-chain-disruptions",
    },
    {
      id: "5",
      title: "The Economic Impact of Efficient Logistics on Texas Manufacturing",
      excerpt:
        "Examining how optimized logistics operations directly contribute to manufacturing growth, cost reduction, and competitive advantage for Texas businesses. Features data-driven insights and real-world success stories.",
      category: "business",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
      date: "May 3, 2025",
      author: "Robert Wilson",
      readTime: "10 min read",
      slug: "economic-impact-efficient-logistics",
    },
    {
      id: "6",
      title: "Emergency Response Logistics: When Every Minute Counts",
      excerpt:
        "Explore the critical role of emergency logistics in disaster response and industrial incidents. Learn about rapid deployment strategies, specialized equipment, and coordination protocols that save lives and minimize damage.",
      category: "safety",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center",
      date: "April 28, 2025",
      author: "Captain James Miller",
      readTime: "7 min read",
      slug: "emergency-response-logistics",
    },
    {
      id: "7",
      title: "AI and Machine Learning in Route Optimization",
      excerpt:
        "Discover how artificial intelligence is revolutionizing route planning and fleet management. From predictive analytics to dynamic rerouting, see how smart algorithms are reducing costs and improving delivery times.",
      category: "technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=center",
      date: "April 20, 2025",
      author: "Dr. Lisa Park",
      readTime: "8 min read",
      slug: "ai-machine-learning-route-optimization",
    },
    {
      id: "8",
      title: "Building Resilient Supply Chains in Uncertain Times",
      excerpt:
        "Learn strategies for creating supply chains that can withstand disruptions while maintaining efficiency. Covers risk assessment, diversification strategies, and technology solutions for supply chain resilience.",
      category: "industry",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
      date: "April 15, 2025",
      author: "Mark Thompson",
      readTime: "9 min read",
      slug: "building-resilient-supply-chains",
    },
  ]

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "safety", label: "Safety" },
    { id: "technology", label: "Technology" },
    { id: "sustainability", label: "Sustainability" },
    { id: "industry", label: "Industry" },
    { id: "business", label: "Business" },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getImageWithFallback = (originalImage: string, category: string) => {
    const fallbackImages: Record<string, string> = {
      safety: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&crop=center",
      technology: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
      sustainability: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop&crop=center",
      industry: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=600&fit=crop&crop=center",
      business: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
    }
    return fallbackImages[category] || originalImage
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Logistics{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Expert analysis, industry trends, and practical advice for optimizing your logistics operations across
                Texas and beyond.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="py-16 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Featured Article</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
                    <Tag className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-blue-300 text-sm font-medium uppercase">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = getImageWithFallback(featuredPost.image, featuredPost.category)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <Tabs defaultValue="all" className="mb-12">
              <div className="flex justify-center">
                <TabsList className="bg-slate-800 border border-slate-700">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-slate-800 border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 h-full flex flex-col group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = getImageWithFallback(post.image, post.category)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-4 w-4 text-blue-400" />
                      <span className="text-xs text-blue-400 font-medium uppercase">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-gray-400 line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-slate-700 pt-4">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <span className="ml-2 text-sm text-gray-400">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-blue-400 hover:text-blue-300 flex items-center text-sm font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Newsletter Signup */}
            <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 md:p-12 text-center border border-blue-500/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get the latest logistics insights, industry trends, and expert analysis delivered directly to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-blue-500"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
