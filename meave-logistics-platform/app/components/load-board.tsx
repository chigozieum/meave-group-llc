"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Weight,
  Clock,
  Truck,
  Search,
  Filter,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Eye,
} from "lucide-react"

export default function LoadBoard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [bookedLoads, setBookedLoads] = useState<string[]>([])

  const handleBookLoad = (loadId: string) => {
    if (!bookedLoads.includes(loadId)) {
      setBookedLoads((prev) => [...prev, loadId])
      alert(`Load ${loadId} has been successfully booked!`)
    }
  }

  const availableLoads = [
    {
      id: "LD-4521",
      origin: "Houston, TX",
      destination: "Dallas, TX",
      distance: "240 miles",
      rate: 2850,
      weight: "45,000 lbs",
      commodity: "Chemicals",
      pickupDate: "2024-01-15",
      deliveryDate: "2024-01-16",
      equipment: "Flatbed",
      priority: "high",
      shipper: "Chevron Phillips",
      rating: 4.8,
      description: "Hazardous chemicals requiring specialized handling and certified drivers.",
      requirements: ["Hazmat certification", "DOT compliance", "Temperature monitoring"],
    },
    {
      id: "LD-4522",
      origin: "Beaumont, TX",
      destination: "Austin, TX",
      distance: "180 miles",
      rate: 2200,
      weight: "38,500 lbs",
      commodity: "Steel Coils",
      pickupDate: "2024-01-16",
      deliveryDate: "2024-01-17",
      equipment: "Flatbed",
      priority: "medium",
      shipper: "Steel Dynamics",
      rating: 4.6,
      description: "Heavy steel coils requiring flatbed transport with proper securing equipment.",
      requirements: ["Flatbed experience", "Load securing equipment", "Heavy haul permit"],
    },
    {
      id: "LD-4523",
      origin: "San Antonio, TX",
      destination: "Corpus Christi, TX",
      distance: "145 miles",
      rate: 1950,
      weight: "42,000 lbs",
      commodity: "Machinery",
      pickupDate: "2024-01-17",
      deliveryDate: "2024-01-18",
      equipment: "Lowboy",
      priority: "high",
      shipper: "Caterpillar",
      rating: 4.9,
      description: "Heavy construction machinery requiring lowboy trailer and escort vehicle.",
      requirements: ["Lowboy trailer", "Escort vehicle", "Oversize permits"],
    },
    {
      id: "LD-4524",
      origin: "Dallas, TX",
      destination: "Houston, TX",
      distance: "240 miles",
      rate: 2650,
      weight: "40,000 lbs",
      commodity: "Electronics",
      pickupDate: "2024-01-18",
      deliveryDate: "2024-01-19",
      equipment: "Dry Van",
      priority: "medium",
      shipper: "Dell Technologies",
      rating: 4.7,
      description: "High-value electronics requiring secure transport and climate control.",
      requirements: ["Secure transport", "Climate control", "GPS tracking"],
    },
    {
      id: "LD-4525",
      origin: "Houston, TX",
      destination: "Laredo, TX",
      distance: "350 miles",
      rate: 3200,
      weight: "48,000 lbs",
      commodity: "Automotive Parts",
      pickupDate: "2024-01-19",
      deliveryDate: "2024-01-20",
      equipment: "Dry Van",
      priority: "high",
      shipper: "Ford Motor Company",
      rating: 4.8,
      description: "Automotive parts for cross-border shipment requiring customs documentation.",
      requirements: ["Customs documentation", "Cross-border experience", "FAST card"],
    },
  ]

  const bookedLoadsData = [
    {
      id: "LD-4501",
      origin: "Houston, TX",
      destination: "New Orleans, LA",
      driver: "John Martinez",
      truck: "MEV-001",
      status: "in-transit",
      progress: 65,
      eta: "2024-01-15 14:30",
    },
    {
      id: "LD-4502",
      origin: "Dallas, TX",
      destination: "Austin, TX",
      driver: "Sarah Johnson",
      truck: "MEV-002",
      status: "loading",
      progress: 15,
      eta: "2024-01-16 09:00",
    },
  ]

  const marketInsights = {
    averageRate: 2.85,
    rateChange: 12.5,
    hotLanes: [
      { route: "Houston → Dallas", rate: "$2.95/mile", demand: "High", trend: "up" },
      { route: "Dallas → Austin", rate: "$2.75/mile", demand: "Medium", trend: "stable" },
      { route: "Houston → San Antonio", rate: "$2.65/mile", demand: "High", trend: "up" },
    ],
    fuelPrice: 3.45,
    fuelChange: -2.3,
  }

  const filteredLoads = availableLoads.filter((load) => {
    const matchesSearch =
      load.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      load.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      load.commodity.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "high-priority" && load.priority === "high") ||
      (selectedFilter === "high-rate" && load.rate > 2500)

    return matchesSearch && matchesFilter && !bookedLoads.includes(load.id)
  })

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Truck className="h-6 w-6 mr-3" />
            Load Board Management
          </CardTitle>
          <CardDescription className="text-blue-100">
            Find, book, and manage loads across Texas and beyond
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <TabsTrigger
            value="available"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Available Loads
          </TabsTrigger>
          <TabsTrigger
            value="booked"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Booked Loads
          </TabsTrigger>
          <TabsTrigger
            value="insights"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Market Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="available" className="space-y-6">
          {/* Enhanced Search and Filter */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by origin, destination, or commodity..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 border-gray-200 focus:border-blue-500 transition-colors"
                  />
                </div>
                <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                  <SelectTrigger className="w-full sm:w-48 bg-white/80 border-gray-200">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter loads" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Loads</SelectItem>
                    <SelectItem value="high-priority">High Priority</SelectItem>
                    <SelectItem value="high-rate">High Rate ($2500+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Available Loads Grid */}
          <div className="grid gap-6">
            {filteredLoads.map((load) => (
              <Card
                key={load.id}
                className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/20"
              >
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Route Information */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Badge
                          variant={load.priority === "high" ? "destructive" : "secondary"}
                          className={load.priority === "high" ? "bg-gradient-to-r from-red-500 to-red-600" : ""}
                        >
                          {load.priority} priority
                        </Badge>
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {load.equipment}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 shadow-lg shadow-green-500/50"></div>
                          <span className="font-medium text-slate-800">{load.origin}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-3 shadow-lg shadow-red-500/50"></div>
                          <span className="font-medium text-slate-800">{load.destination}</span>
                        </div>
                        <div className="text-sm text-gray-600 bg-slate-50 p-2 rounded-lg">
                          {load.distance} • {load.commodity}
                        </div>
                      </div>
                    </div>

                    {/* Load Details */}
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        <span className="font-bold text-green-700 text-lg">${load.rate.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Weight className="h-4 w-4 mr-2 text-gray-600" />
                        <span className="text-slate-700">{load.weight}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-gray-600" />
                        <span className="text-slate-700">{load.pickupDate}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        <span className="text-slate-700">
                          {load.rating} • {load.shipper}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Actions */}
                    <div className="flex flex-col justify-center space-y-3">
                      <Button
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={() => handleBookLoad(load.id)}
                        disabled={bookedLoads.includes(load.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        {bookedLoads.includes(load.id) ? "Booked" : "Book Load"}
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-xl">Load Details - {load.id}</DialogTitle>
                            <DialogDescription>Complete information for this shipment</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Route Information</h4>
                                <div className="space-y-2 text-sm">
                                  <div>Origin: {load.origin}</div>
                                  <div>Destination: {load.destination}</div>
                                  <div>Distance: {load.distance}</div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Load Details</h4>
                                <div className="space-y-2 text-sm">
                                  <div>Rate: ${load.rate.toLocaleString()}</div>
                                  <div>Weight: {load.weight}</div>
                                  <div>Equipment: {load.equipment}</div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Description</h4>
                              <p className="text-sm text-gray-600">{load.description}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Requirements</h4>
                              <div className="flex flex-wrap gap-2">
                                {load.requirements.map((req, index) => (
                                  <Badge key={index} variant="outline">
                                    {req}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex space-x-3">
                              <Button
                                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600"
                                onClick={() => handleBookLoad(load.id)}
                                disabled={bookedLoads.includes(load.id)}
                              >
                                {bookedLoads.includes(load.id) ? "Already Booked" : "Book This Load"}
                              </Button>
                              <Button variant="outline" className="flex-1">
                                Contact Shipper
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="booked" className="space-y-6">
          <div className="grid gap-6">
            {bookedLoadsData.map((load) => (
              <Card key={load.id} className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-slate-800">{load.id}</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          {load.origin}
                        </div>
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          {load.destination}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>Driver:</strong> {load.driver}
                        </div>
                        <div>
                          <strong>Truck:</strong> {load.truck}
                        </div>
                        <div>
                          <strong>ETA:</strong> {load.eta}
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mb-3">
                        <Badge
                          variant={load.status === "in-transit" ? "default" : "secondary"}
                          className={load.status === "in-transit" ? "bg-gradient-to-r from-blue-500 to-blue-600" : ""}
                        >
                          {load.status}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Progress: {load.progress}%</div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-lg"
                            style={{ width: `${load.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Average Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${marketInsights.averageRate}/mile</div>
                <div className="flex items-center text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />+{marketInsights.rateChange}% this month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Fuel Price</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${marketInsights.fuelPrice}/gal</div>
                <div className="flex items-center text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1 rotate-180" />
                  {marketInsights.fuelChange}% this week
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Market Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <AlertCircle className="h-8 w-8 mr-3" />
                  <div>
                    <div className="font-semibold text-lg">Strong</div>
                    <div className="text-sm opacity-90">High demand</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardHeader>
              <CardTitle className="text-slate-800">Hot Lanes</CardTitle>
              <CardDescription className="text-slate-600">Most profitable routes this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketInsights.hotLanes.map((lane, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                  >
                    <div>
                      <div className="font-medium text-slate-800">{lane.route}</div>
                      <div className="text-sm text-slate-600 flex items-center">
                        Demand: {lane.demand}
                        <TrendingUp
                          className={`h-3 w-3 ml-2 ${lane.trend === "up" ? "text-green-500" : "text-gray-400"}`}
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-green-600 text-lg">{lane.rate}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
