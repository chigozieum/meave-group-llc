"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/app/components/navigation"
import Footer from "@/app/components/footer"

interface BlogPost {
  slug: string
  title: string
  content: string
  category: string
  image: string
  date: string
  author: string
  authorTitle: string
  authorImage: string
  readTime: string
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll simulate loading the blog post data
    setTimeout(() => {
      setPost({
        slug,
        title: getBlogTitle(slug),
        content: getBlogContent(slug),
        category: getBlogCategory(slug),
        image: getBlogImage(slug),
        date: getBlogDate(slug),
        author: getBlogAuthor(slug),
        authorTitle: "Senior Logistics Specialist",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
        readTime: getBlogReadTime(slug),
      })
      setLoading(false)
    }, 500)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/blog">
            <Button variant="outline" className="border-blue-500 text-blue-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900"></div>
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-4">
                <Tag className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">{post.category}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
              <div className="flex flex-wrap items-center justify-center text-gray-400 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="prose prose-lg prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Author Bio */}
          <div className="mt-16 border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img
                  src={post.authorImage || "/placeholder.svg"}
                  alt={post.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white">{post.author}</h3>
                <p className="text-blue-400 mb-2">{post.authorTitle}</p>
                <p className="text-gray-400">
                  {post.author} is a logistics expert with over 15 years of experience in the transportation industry,
                  specializing in chemical and hazardous materials transport across Texas and the Gulf Coast.
                </p>
              </div>
            </div>
          </div>

          {/* Share and Navigation */}
          <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-slate-800 pt-8">
            <Link href="/blog">
              <Button variant="outline" className="border-blue-500 text-blue-400 mb-4 md:mb-0">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Share this article:</span>
              <div className="flex space-x-2">
                {["twitter", "facebook", "linkedin", "email"].map((platform) => (
                  <Button key={platform} size="icon" variant="ghost" className="h-8 w-8 text-gray-400 hover:text-white">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">Share on {platform}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Optimizing Routes for Chemical Transportation",
                  image:
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop&crop=center",
                },
                {
                  title: "The Impact of Weather on Texas Logistics",
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop&crop=center",
                },
                {
                  title: "Reducing Costs While Maintaining Safety Standards",
                  image:
                    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=500&h=300&fit=crop&crop=center",
                },
              ].map((relatedPost, i) => (
                <div key={i} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                  <div className="h-40">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt="Related post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>May 2025</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

// Helper functions to generate blog content based on slug
function getBlogTitle(slug: string): string {
  const titles: Record<string, string> = {
    "future-chemical-transportation-safety": "The Future of Chemical Transportation: Safety Innovations for 2025",
    "real-time-tracking-texas-logistics": "How Real-Time Tracking is Transforming Texas Logistics",
    "sustainable-heavy-machinery-transportation": "Sustainable Practices in Heavy Machinery Transportation",
    "navigating-supply-chain-disruptions": "Navigating Supply Chain Disruptions: Lessons from 2024",
    "economic-impact-efficient-logistics": "The Economic Impact of Efficient Logistics on Texas Manufacturing",
    "emergency-response-logistics": "Emergency Response Logistics: When Every Minute Counts",
    "ai-machine-learning-route-optimization": "AI and Machine Learning in Route Optimization",
    "building-resilient-supply-chains": "Building Resilient Supply Chains in Uncertain Times",
  }
  return titles[slug] || "Blog Post"
}

function getBlogCategory(slug: string): string {
  const categories: Record<string, string> = {
    "future-chemical-transportation-safety": "Safety",
    "real-time-tracking-texas-logistics": "Technology",
    "sustainable-heavy-machinery-transportation": "Sustainability",
    "navigating-supply-chain-disruptions": "Industry",
    "economic-impact-efficient-logistics": "Business",
    "emergency-response-logistics": "Safety",
    "ai-machine-learning-route-optimization": "Technology",
    "building-resilient-supply-chains": "Industry",
  }
  return categories[slug] || "General"
}

function getBlogImage(slug: string): string {
  const images: Record<string, string> = {
    "future-chemical-transportation-safety":
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=800&fit=crop&crop=center",
    "real-time-tracking-texas-logistics":
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=800&fit=crop&crop=center",
    "sustainable-heavy-machinery-transportation":
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1600&h=800&fit=crop&crop=center",
    "navigating-supply-chain-disruptions":
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600&h=800&fit=crop&crop=center",
    "economic-impact-efficient-logistics":
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1600&h=800&fit=crop&crop=center",
    "emergency-response-logistics":
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&h=800&fit=crop&crop=center",
    "ai-machine-learning-route-optimization":
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=800&fit=crop&crop=center",
    "building-resilient-supply-chains":
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&h=800&fit=crop&crop=center",
  }
  return (
    images[slug] || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=800&fit=crop&crop=center"
  )
}

function getBlogDate(slug: string): string {
  const dates: Record<string, string> = {
    "future-chemical-transportation-safety": "June 2, 2025",
    "real-time-tracking-texas-logistics": "May 28, 2025",
    "sustainable-heavy-machinery-transportation": "May 15, 2025",
    "navigating-supply-chain-disruptions": "May 10, 2025",
    "economic-impact-efficient-logistics": "May 3, 2025",
    "emergency-response-logistics": "April 28, 2025",
    "ai-machine-learning-route-optimization": "April 20, 2025",
    "building-resilient-supply-chains": "April 15, 2025",
  }
  return dates[slug] || "June 2, 2025"
}

function getBlogAuthor(slug: string): string {
  const authors: Record<string, string> = {
    "future-chemical-transportation-safety": "Michael Rodriguez",
    "real-time-tracking-texas-logistics": "Sarah Johnson",
    "sustainable-heavy-machinery-transportation": "David Chen",
    "navigating-supply-chain-disruptions": "Jennifer Martinez",
    "economic-impact-efficient-logistics": "Robert Wilson",
    "emergency-response-logistics": "Captain James Miller",
    "ai-machine-learning-route-optimization": "Dr. Lisa Park",
    "building-resilient-supply-chains": "Mark Thompson",
  }
  return authors[slug] || "Michael Rodriguez"
}

function getBlogReadTime(slug: string): string {
  const readTimes: Record<string, string> = {
    "future-chemical-transportation-safety": "8 min read",
    "real-time-tracking-texas-logistics": "6 min read",
    "sustainable-heavy-machinery-transportation": "7 min read",
    "navigating-supply-chain-disruptions": "9 min read",
    "economic-impact-efficient-logistics": "10 min read",
    "emergency-response-logistics": "7 min read",
    "ai-machine-learning-route-optimization": "8 min read",
    "building-resilient-supply-chains": "9 min read",
  }
  return readTimes[slug] || "8 min read"
}

function getBlogContent(slug: string): string {
  // This would normally come from a CMS or database
  // For now, we'll generate some placeholder content
  return `
    <p class="lead">In the rapidly evolving landscape of logistics and transportation, staying ahead of industry trends is crucial for businesses that rely on efficient supply chain operations. This comprehensive analysis explores the latest innovations, challenges, and opportunities in the Texas logistics sector.</p>
    
    <h2>The Changing Face of Texas Logistics</h2>
    
    <p>Texas stands at the crossroads of North American commerce, with its strategic location, extensive infrastructure, and robust economy making it a logistics powerhouse. The state's transportation network encompasses over 313,000 miles of public roads, 10,400 miles of freight rail, 16 seaports, and 26 commercial airports. This extensive infrastructure supports the movement of more than $1.6 trillion in goods annually.</p>
    
    <p>Recent developments in technology, regulatory frameworks, and market demands are reshaping how logistics operations function across the Lone Star State. Companies that adapt to these changes position themselves for sustainable growth and competitive advantage.</p>
    
    <h3>Key Trends Driving Industry Evolution</h3>
    
    <p>Several interconnected trends are currently transforming the logistics landscape in Texas:</p>
    
    <ul>
      <li><strong>Digital Transformation:</strong> The integration of IoT devices, blockchain, and AI-powered analytics is creating unprecedented visibility and efficiency in supply chains.</li>
      <li><strong>Sustainability Initiatives:</strong> Growing environmental concerns are pushing companies to adopt greener practices, from alternative fuels to optimized routing.</li>
      <li><strong>Last-Mile Innovation:</strong> The explosion of e-commerce has intensified focus on last-mile delivery solutions that balance speed, cost, and customer experience.</li>
      <li><strong>Workforce Development:</strong> Addressing the persistent driver shortage through improved working conditions, competitive compensation, and technological assistance.</li>
      <li><strong>Regulatory Compliance:</strong> Navigating evolving regulations, particularly for specialized cargo like chemicals and hazardous materials.</li>
    </ul>
    
    <h2>Safety Innovations in Chemical Transportation</h2>
    
    <p>The transportation of chemicals presents unique challenges that require specialized equipment, trained personnel, and rigorous safety protocols. Recent innovations are enhancing safety while improving operational efficiency:</p>
    
    <h3>Advanced Containment Systems</h3>
    
    <p>Next-generation tank designs incorporate multiple redundant safety features, including:</p>
    
    <ul>
      <li>Composite materials that offer superior strength-to-weight ratios and corrosion resistance</li>
      <li>Smart pressure management systems that automatically adjust to changing conditions</li>
      <li>Impact-resistant outer shells designed to withstand collisions at highway speeds</li>
      <li>Self-sealing technology that minimizes leakage risk in the event of punctures</li>
    </ul>
    
    <p>These advancements significantly reduce the risk of containment failures during transport, protecting both personnel and the environment.</p>
    
    <h3>Real-Time Monitoring Solutions</h3>
    
    <p>IoT sensors now enable continuous monitoring of critical parameters throughout the transportation journey:</p>
    
    <ul>
      <li>Temperature, pressure, and chemical composition sensors that detect anomalies before they become dangerous</li>
      <li>Structural integrity monitoring that alerts operators to potential container weaknesses</li>
      <li>Environmental detection systems that identify external hazards like weather conditions or road quality issues</li>
      <li>Driver behavior monitoring that ensures compliance with safety protocols and hours-of-service regulations</li>
    </ul>
    
    <p>This wealth of real-time data allows for proactive intervention before incidents occur, dramatically improving safety outcomes.</p>
    
    <h2>The Economic Impact of Efficient Logistics</h2>
    
    <p>Optimized logistics operations deliver substantial economic benefits to businesses across the supply chain:</p>
    
    <h3>Cost Reduction Through Efficiency</h3>
    
    <p>Modern logistics solutions drive cost savings through multiple mechanisms:</p>
    
    <ul>
      <li><strong>Route Optimization:</strong> AI-powered algorithms reduce fuel consumption by 15-20% by identifying the most efficient routes based on real-time conditions.</li>
      <li><strong>Load Consolidation:</strong> Smart cargo matching platforms increase vehicle utilization rates by 30%, reducing the cost per ton-mile.</li>
      <li><strong>Predictive Maintenance:</strong> IoT-enabled fleet management systems reduce unplanned downtime by 35% through early detection of potential mechanical issues.</li>
      <li><strong>Inventory Optimization:</strong> Just-in-time delivery capabilities reduce warehousing costs while ensuring production continuity.</li>
    </ul>
    
    <p>These efficiencies translate directly to improved profit margins and enhanced competitiveness.</p>
    
    <h3>Market Access and Expansion</h3>
    
    <p>Superior logistics capabilities enable businesses to expand their market reach:</p>
    
    <ul>
      <li>Reliable same-day and next-day delivery options open new customer segments</li>
      <li>Specialized handling capabilities for sensitive or regulated products create barriers to entry for competitors</li>
      <li>International shipping expertise facilitates export growth and global market penetration</li>
      <li>Flexible capacity scaling accommodates seasonal demand fluctuations without fixed cost increases</li>
    </ul>
    
    <p>For manufacturers in particular, advanced logistics solutions effectively expand their serviceable market area without requiring new production facilities.</p>
    
    <h2>Challenges and Future Outlook</h2>
    
    <p>Despite significant progress, several challenges remain for the Texas logistics industry:</p>
    
    <h3>Infrastructure Constraints</h3>
    
    <p>Texas's rapid population and economic growth have strained existing infrastructure:</p>
    
    <ul>
      <li>Congestion in major urban corridors increases transit times and reduces reliability</li>
      <li>Rural road conditions impact vehicle maintenance costs and cargo safety</li>
      <li>Port capacity limitations create bottlenecks during peak shipping seasons</li>
      <li>Last-mile infrastructure struggles to keep pace with e-commerce growth</li>
    </ul>
    
    <p>Addressing these constraints will require coordinated public and private investment in coming years.</p>
    
    <h3>Workforce Development</h3>
    
    <p>The persistent shortage of qualified drivers and logistics professionals threatens continued industry growth:</p>
    
    <ul>
      <li>An aging workforce with insufficient replacement pipeline</li>
      <li>Competition from other sectors for skilled workers</li>
      <li>Evolving skill requirements as technology transforms job functions</li>
      <li>Work-life balance concerns affecting recruitment and retention</li>
    </ul>
    
    <p>Innovative approaches to recruitment, training, and retention will be essential for sustainable growth.</p>
    
    <h2>Conclusion: Positioning for Success</h2>
    
    <p>The Texas logistics landscape continues to evolve rapidly, presenting both challenges and opportunities for businesses across the supply chain. Companies that embrace technological innovation, prioritize safety and sustainability, and develop strategic partnerships position themselves for long-term success in this dynamic environment.</p>
    
    <p>At Meave Group LLC, we remain committed to leading the industry in safety, efficiency, and customer service. Our investments in advanced technology, specialized equipment, and professional development ensure that we deliver exceptional value to our clients while setting new standards for the industry.</p>
    
    <p>By staying informed about industry trends and proactively adapting to changing conditions, businesses can transform logistics from a necessary cost center into a powerful competitive advantage.</p>
  `
}
