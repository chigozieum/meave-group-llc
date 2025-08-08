"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"

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
}

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Future of Chemical Transportation: Safety Innovations for 2025",
      excerpt:
        "Explore cutting-edge safety technologies revolutionizing chemical transportation across Texas and beyond. From advanced containment systems to AI-powered route optimization.",
      category: "safety",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      date: "June 2, 2025",
      author: "Michael Rodriguez",
      readTime: "8 min read",
      slug: "future-chemical-transportation-safety",
    },
    {
      id: "2",
      title: "How Real-Time Tracking is Transforming Texas Logistics",
      excerpt:
        "Discover how GPS and IoT technologies are creating unprecedented visibility in supply chains, allowing for minute-by-minute tracking and proactive problem solving.",
      category: "technology",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      date: "May 28, 2025",
      author: "Sarah Johnson",
      readTime: "6 min read",
      slug: "real-time-tracking-texas-logistics",
    },
    {
      id: "3",
      title: "Sustainable Practices in Heavy Machinery Transportation",
      excerpt:
        "Learn how logistics companies are reducing their carbon footprint while maintaining efficiency in transporting heavy industrial equipment across the Lone Star State.",
      category: "sustainability",
      image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop&crop=center",
      date: "May 15, 2025",
      author: "David Chen",
      readTime: "7 min read",
      slug: "sustainable-heavy-machinery-transportation",
    },
    {
      id: "4",
      title: "Navigating Supply Chain Disruptions: Lessons from 2024",
      excerpt:
        "A comprehensive analysis of how leading logistics providers overcame major supply chain challenges last year, with actionable strategies for future resilience.",
      category: "industry",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&crop=center",
      date: "May 10, 2025",
      author: "Jennifer Martinez",
      readTime: "9 min read",
      slug: "navigating-supply-chain-disruptions",
    },
    {
      id: "5",
      title: "The Economic Impact of Efficient Logistics on Texas Manufacturing",
      excerpt:
        "Examining how optimized logistics operations directly contribute to manufacturing growth, cost reduction, and competitive advantage for Texas businesses.",
      category: "business",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      date: "May 3, 2025",
      author: "Robert Wilson",
      readTime: "10 min read",
      slug: "economic-impact-efficient-logistics",
    },
  ]

  const filteredPosts =
    activeCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "safety", label: "Safety" },
    { id: "technology", label: "Technology" },
    { id: "sustainability", label: "Sustainability" },
    { id: "industry", label: "Industry" },
    { id: "business", label: "Business" },
  ]

  const getImageWithFallback = (originalImage: string, category: string) => {
    const fallbackImages: Record<string, string> = {
      safety: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      technology: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      sustainability: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop&crop=center",
      industry: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&crop=center",
      business: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
    }
    return fallbackImages[category] || originalImage
  }

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Logistics Insights</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Expert analysis, industry trends, and practical advice for optimizing your logistics operations.
          </p>
        </div>

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

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
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
                    <CardDescription className="text-gray-400 line-clamp-2">{post.excerpt}</CardDescription>
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
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300"
            >
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
