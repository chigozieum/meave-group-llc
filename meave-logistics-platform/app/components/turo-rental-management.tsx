"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Car, Calendar, DollarSign, Star, MapPin, Clock, Users, TrendingUp, Shield, Key, Fuel, Settings, Plus, Search, Filter, CheckCircle, AlertCircle, Crown } from 'lucide-react'

export default function TuroRentalManagement() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [bookedRentals, setBookedRentals] = useState<string[]>([])

  const handleBookRental = (rentalId: string) => {
    if (!bookedRentals.includes(rentalId)) {
      setBookedRentals((prev) => [...prev, rentalId])
      alert(`Rental ${rentalId} has been successfully booked!`)
    }
  }

  const rentalFleet = [
    {
      id: "MEV-R001",
      make: "Tesla",
      model: "Model S Plaid",
      year: 2024,
      category: "luxury",
      type: "Electric Sedan",
      location: "Edinburg, TX",
      status: "available",
      rating: 4.9,
      trips: 156,
      dailyRate: 299,
      weeklyRate: 1899,
      monthlyRate: 6999,
      features: ["Autopilot", "Premium Interior", "Supercharging", "Full Self-Driving"],
      mileage: 12500,
      lastService: "2024-01-10",
      nextService: "2024-04-10",
      insurance: "Comprehensive",
      earnings: {
        thisMonth: 8950,
        lastMonth: 9200,
        ytd: 89500,
      },
      bookings: {
        upcoming: 8,
        completed: 148,
        cancelled: 3,
      },
      images: ["/placeholder.svg?height=300&width=400&text=Tesla+Model+S"],
    },
    {
      id: "MEV-R002",
      make: "BMW",
      model: "X7 M50i",
      year: 2024,
      category: "luxury",
      type: "Luxury SUV",
      location: "Houston, TX",
      status: "rented",
      rating: 4.8,
      trips: 89,
      dailyRate: 259,
      weeklyRate: 1649,
      monthlyRate: 5999,
      features: ["Massage Seats", "Panoramic Roof", "Premium Sound", "Driver Assistance"],
      mileage: 8900,
      lastService: "2024-01-05",
      nextService: "2024-04-05",
      insurance: "Comprehensive",
      earnings: {
        thisMonth: 7200,
        lastMonth: 6800,
        ytd: 72000,
      },
      bookings: {
        upcoming: 5,
        completed: 84,
        cancelled: 2,
      },
      images: ["/placeholder.svg?height=300&width=400&text=BMW+X7"],
    },
    {
      id: "MEV-R003",
      make: "Mercedes-Benz",
      model: "S-Class S580",
      year: 2024,
      category: "executive",
      type: "Executive Sedan",
      location: "Dallas, TX",
      status: "available",
      rating: 4.9,
      trips: 124,
      dailyRate: 279,
      weeklyRate: 1779,
      monthlyRate: 6499,
      features: ["Chauffeur Mode", "Executive Rear Seats", "Ambient Lighting", "Premium Audio"],
      mileage: 15200,
      lastService: "2024-01-08",
      nextService: "2024-04-08",
      insurance: "Comprehensive",
      earnings: {
        thisMonth: 8100,
        lastMonth: 8500,
        ytd: 81000,
      },
      bookings: {
        upcoming: 6,
        completed: 118,
        cancelled: 1,
      },
      images: ["/placeholder.svg?height=300&width=400&text=Mercedes+S-Class"],
    },
    {
      id: "MEV-R004",
      make: "Porsche",
      model: "911 Turbo S",
      year: 2024,
      category: "sports",
      type: "Sports Car",
      location: "Austin, TX",
      status: "maintenance",
      rating: 4.7,
      trips: 67,
      dailyRate: 399,
      weeklyRate: 2549,
      monthlyRate: 9299,
      features: ["Sport Chrono", "Carbon Fiber", "Premium Leather", "Track Mode"],
      mileage: 6800,
      lastService: "2024-01-15",
      nextService: "2024-01-20",
      insurance: "Comprehensive",
      earnings: {
        thisMonth: 5200,
        lastMonth: 11900,
        ytd: 95000,
      },
      bookings: {
        upcoming: 3,
        completed: 64,
        cancelled: 1,
      },
      images: ["/placeholder.svg?height=300&width=400&text=Porsche+911"],
    },
    {
      id: "MEV-R005",
      make: "Cadillac",
      model: "Escalade ESV",
      year: 2024,
      category: "luxury",
      type: "Luxury SUV",
      location: "San Antonio, TX",
      status: "available",
      rating: 4.6,
      trips: 92,
      dailyRate: 229,
      weeklyRate: 1459,
      monthlyRate: 5299,
      features: ["Captain's Chairs", "Entertainment System", "Premium Sound", "Hands-Free Driving"],
      mileage: 11200,
      lastService: "2024-01-12",
      nextService: "2024-04-12",
      insurance: "Comprehensive",
      earnings: {
        thisMonth: 6800,
        lastMonth: 7100,
        ytd: 68000,
      },
      bookings: {
        upcoming: 4,
        completed: 88,
        cancelled: 2,
      },
      images: ["/placeholder.svg?height=300&width=400&text=Cadillac+Escalade"],
    },
  ]

  const activeRentals = [
    {
      id: "RNT-001",
      vehicle: "Tesla Model S Plaid",
      renter: "James Wilson",
      startDate: "2024-01-15",
      endDate: "2024-01-18",
      totalAmount: 897,
      status: "active",
      location: "Houston, TX",
      progress: 65,
    },
    {
      id: "RNT-002",
      vehicle: "BMW X7 M50i",
      renter: "Sarah Martinez",
      startDate: "2024-01-14",
      endDate: "2024-01-21",
      totalAmount: 1813,
      status: "active",
      location: "Dallas, TX",
      progress: 45,
    },
  ]

  const rentalStats = {
    totalVehicles: rentalFleet.length,
    availableVehicles: rentalFleet.filter((v) => v.status === "available").length,
    activeRentals: activeRentals.length,
    averageRating: (rentalFleet.reduce((sum, v) => sum + v.rating, 0) / rentalFleet.length).toFixed(1),
    monthlyRevenue: rentalFleet.reduce((sum, v) => sum + v.earnings.thisMonth, 0),
    utilizationRate: 78.5,
  }

  const filteredVehicles = rentalFleet.filter((vehicle) => {
    const matchesSearch =
      vehicle.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterCategory === "all" ||
      vehicle.category === filterCategory ||
      vehicle.status === filterCategory

    return matchesSearch && matchesFilter
  })

  const selectedVehicleData = rentalFleet.find((vehicle) => vehicle.id === selectedVehicle)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600 to-pink-700 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Car className="h-6 w-6 mr-3" />
            Turo & Luxury Rental Management
          </CardTitle>
          <CardDescription className="text-purple-100">
            Manage your executive and luxury vehicle rental fleet across the USA
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="fleet"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Fleet
          </TabsTrigger>
          <TabsTrigger
            value="bookings"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Bookings
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger
            value="maintenance"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
          >
            Maintenance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Enhanced Rental Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Car className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{rentalStats.totalVehicles}</div>
                    <div className="text-xs opacity-90">Total Fleet</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{rentalStats.availableVehicles}</div>
                    <div className="text-xs opacity-90">Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Key className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{rentalStats.activeRentals}</div>
                    <div className="text-xs opacity-90">Active Rentals</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{rentalStats.averageRating}</div>
                    <div className="text-xs opacity-90">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">${(rentalStats.monthlyRevenue / 1000).toFixed(0)}K</div>
                    <div className="text-xs opacity-90">Monthly Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-600 to-rose-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{rentalStats.utilizationRate}%</div>
                    <div className="text-xs opacity-90">Utilization</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Vehicles and Active Rentals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Top Performing Vehicles</CardTitle>
                <CardDescription className="text-slate-600">Highest earning vehicles this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rentalFleet
                    .sort((a, b) => b.earnings.thisMonth - a.earnings.thisMonth)
                    .slice(0, 5)
                    .map((vehicle, index) => (
                      <div
                        key={vehicle.id}
                        className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-purple-50 hover:from-purple-50 hover:to-pink-50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800">
                            {vehicle.make} {vehicle.model}
                          </div>
                          <div className="text-sm text-slate-600 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {vehicle.location} • {vehicle.rating} ⭐
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">
                            ${vehicle.earnings.thisMonth.toLocaleString()}
                          </div>
                          <div className="text-sm text-slate-600">{vehicle.trips} trips</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Active Rentals</CardTitle>
                <CardDescription className="text-slate-600">Currently rented vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeRentals.map((rental) => (
                    <div
                      key={rental.id}
                      className="border rounded-xl p-4 bg-gradient-to-r from-white to-slate-50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="font-medium text-slate-800">{rental.vehicle}</div>
                          <div className="text-sm text-slate-600">Renter: {rental.renter}</div>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600">Active</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                        <div>
                          <span className="text-slate-600">Start:</span> {rental.startDate}
                        </div>
                        <div>
                          <span className="text-slate-600">End:</span> {rental.endDate}
                        </div>
                        <div>
                          <span className="text-slate-600">Amount:</span> ${rental.totalAmount}
                        </div>
                        <div>
                          <span className="text-slate-600">Location:</span> {rental.location}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-700">Rental Progress</span>
                          <span className="font-medium">{rental.progress}%</span>
                        </div>
                        <Progress value={rental.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="fleet" className="space-y-6">
          {/* Search and Filter */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by make, model, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 border-gray-200"
                  />
                </div>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-3 py-2 bg-white/80 border border-gray-200 rounded-md"
                >
                  <option value="all">All Categories</option>
                  <option value="luxury">Luxury</option>
                  <option value="executive">Executive</option>
                  <option value="sports">Sports</option>
                  <option value="available">Available</option>
                  <option value="rented">Rented</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Vehicle</DialogTitle>
                      <DialogDescription>Add a new vehicle to your rental fleet.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <Car className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">Vehicle registration form would appear here</p>
                        <Button className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600">
                          Add to Fleet
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/20 cursor-pointer"
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={vehicle.images[0] || "/placeholder.svg"}
                      alt={`${vehicle.make} ${vehicle.model}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant={vehicle.status === "available" ? "default" : "secondary"}
                        className={
                          vehicle.status === "available"
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : vehicle.status === "rented"
                              ? "bg-gradient-to-r from-blue-500 to-blue-600"
                              : "bg-gradient-to-r from-red-500 to-red-600"
                        }
                      >
                        {vehicle.status}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      {vehicle.category === "luxury" && <Crown className="h-5 w-5 text-yellow-500" />}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-800">
                        {vehicle.make} {vehicle.model}
                      </h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{vehicle.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 mb-3">
                      <div>{vehicle.year} • {vehicle.type}</div>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {vehicle.location}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-bold text-green-600">${vehicle.dailyRate}/day</div>
                      <div className="text-sm text-slate-600">{vehicle.trips} trips</div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {vehicle.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {vehicle.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{vehicle.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={vehicle.status !== "available"}
                    >
                      {vehicle.status === "available" ? "Book Now" : "Unavailable"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vehicle Details Modal */}
          {selectedVehicleData && (
            <Dialog open={!!selectedVehicle} onOpenChange={() => setSelectedVehicle(null)}>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedVehicleData.make} {selectedVehicleData.model}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedVehicleData.year} • {selectedVehicleData.type}
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={selectedVehicleData.images[0] || "/placeholder.svg"}
                      alt={`${selectedVehicleData.make} ${selectedVehicleData.model}`}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedVehicleData.features.map((feature, index) => (
                            <Badge key={index} variant="outline">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Pricing</h4>
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div className="bg-slate-50 p-3 rounded-lg">
                            <div className="font-bold text-green-600">${selectedVehicleData.dailyRate}</div>
                            <div className="text-xs text-slate-600">Daily</div>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg">
                            <div className="font-bold text-blue-600">${selectedVehicleData.weeklyRate}</div>
                            <div className="text-xs text-slate-600">Weekly</div>
                          </div>
                          <div className="bg-slate-50 p-3 rounded-lg">
                            <div className="font-bold text-purple-600">${selectedVehicleData.monthlyRate}</div>
                            <div className="text-xs text-slate-600">Monthly</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Vehicle Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Status</span>
                          <Badge
                            variant={selectedVehicleData.status === "available" ? "default" : "secondary"}
                            className={
                              selectedVehicleData.status === "available"
                                ? "bg-gradient-to-r from-green-500 to-emerald-600"
                                : ""
                            }
                          >
                            {selectedVehicleData.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Location</span>
                          <span>{selectedVehicleData.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mileage</span>
                          <span>{selectedVehicleData.mileage.toLocaleString()} miles</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Rating</span>
                          <span>{selectedVehicleData.rating} ⭐</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance</h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="font-bold text-green-700">{selectedVehicleData.trips}</div>
                          <div className="text-xs text-green-600">Total Trips</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="font-bold text-blue-700">
                            ${selectedVehicleData.earnings.thisMonth.toLocaleString()}
                          </div>
                          <div className="text-xs text-blue-600">This Month</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="font-bold text-purple-700">
                            ${selectedVehicleData.earnings.ytd.toLocaleString()}
                          </div>
                          <div className="text-xs text-purple-600">YTD</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Bookings</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Upcoming</span>
                          <span className="font-medium">{selectedVehicleData.bookings.upcoming}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Completed</span>
                          <span className="font-medium">{selectedVehicleData.bookings.completed}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Cancelled</span>
                          <span className="font-medium">{selectedVehicleData.bookings.cancelled}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600"
                        disabled={selectedVehicleData.status !== "available"}
                      >
                        Book Vehicle
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Edit Details
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        <TabsContent value="bookings" className="space-y-6">
          <div className="grid gap-6">
            {activeRentals.map((rental) => (
              <Card key={rental.id} className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-slate-800">{rental.id}</h3>
                      <div className="space-y-1 text-sm">
                        <div className="font-medium">{rental.vehicle}</div>
                        <div className="text-slate-600">Renter: {rental.renter}</div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {rental.location}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-1 text-sm">
                        <div>
                          <strong>Start:</strong> {rental.startDate}
                        </div>
                        <div>
                          <strong>End:</strong> {rental.endDate}
                        </div>
                        <div>
                          <strong>Amount:</strong> ${rental.totalAmount}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 mb-3">
                        {rental.status}
                      </Badge>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Progress: {rental.progress}%</div>
                        <Progress value={rental.progress} className="h-2" />
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600">
                        Contact Renter
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">${(rentalStats.monthlyRevenue / 1000).toFixed(0)}K</div>
                <div className="flex items-center text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +15.2% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Utilization Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{rentalStats.utilizationRate}%</div>
                <div className="flex items-center text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +3.5% from last month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-lg">Average Daily Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$267</div>
                <div className="flex items-center text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +8.1% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardHeader>
              <CardTitle className="text-slate-800">Revenue by Vehicle Category</CardTitle>
              <CardDescription className="text-slate-600">Performance breakdown by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">Luxury Vehicles</div>
                    <div className="text-sm text-slate-600">Tesla, BMW, Mercedes, Cadillac</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600 text-lg">$28.1K</div>
                    <div className="text-sm text-slate-600">68% of revenue</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">Executive Vehicles</div>
                    <div className="text-sm text-slate-600">Mercedes S-Class, BMW 7 Series</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-blue-600 text-lg">$8.1K</div>
                    <div className="text-sm text-slate-600">20% of revenue</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">Sports Cars</div>
                    <div className="text-sm text-slate-600">Porsche 911, Ferrari, Lamborghini</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-orange-600 text-lg">$5.2K</div>
                    <div className="text-sm text-slate-600">12% of revenue</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Settings className="h-5 w-5 mr-2" />
                Vehicle Maintenance Schedule
              </CardTitle>
              <CardDescription className="text-slate-600">
                Track maintenance schedules and service history
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {rentalFleet.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="border rounded-xl p-6 bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-purple-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white">
                          <Car className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">
                            {vehicle.make} {vehicle.model}
                          </div>
                          <div className="text-sm text-slate-600">{vehicle.id}</div>
                        </div>
                      </div>
                      <Badge
                        variant={vehicle.status === "maintenance" ? "destructive" : "default"}
                        className={
                          vehicle.status === "maintenance"
                            ? "bg-gradient-to-r from-red-500 to-red-600"
                            : "bg-gradient-to-r from-green-500 to-emerald-600"
                        }
                      >
                        {vehicle.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Last Service</div>
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-3 w-3 mr-1" />
                          {vehicle.lastService}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Next Service</div>
                        <div className="flex items-center text-slate-600">
                          <Calendar className="h-3 w-3 mr-1" />
                          {vehicle.nextService}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Mileage</div>
                        <div className="flex items-center text-slate-600">
                          <Fuel className="h-3 w-3 mr-1" />
                          {vehicle.mileage.toLocaleString()} miles
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                      >
                        Schedule Service
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-200 text-purple-700">
                        View History
                      </Button>
                      {vehicle.status === "maintenance" && (
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600">
                          Mark Complete
                        </Button>
                      )}
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
