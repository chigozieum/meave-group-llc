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
import { Truck, Users, Phone, Mail, MapPin, Clock, Star, Award, CheckCircle, Calendar, MessageSquare, UserPlus, Send, DollarSign, TrendingUp, Shield, Search, Filter } from 'lucide-react'

export default function TruckerManagement() {
  const [selectedTrucker, setSelectedTrucker] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")
  const [assignedLoads, setAssignedLoads] = useState<{ [key: string]: string }>({})
  const [sentMessages, setSentMessages] = useState<string[]>([])

  const handleAssignLoad = (truckerId: string) => {
    const loadId = `LD-${Math.floor(Math.random() * 9999)
      .toString()
      .padStart(4, "0")}`
    setAssignedLoads((prev) => ({ ...prev, [truckerId]: loadId }))
    alert(`Load ${loadId} has been assigned to trucker!`)
  }

  const handleSendMessage = (truckerId: string) => {
    setSentMessages((prev) => [...prev, truckerId])
    alert(`Message sent to trucker successfully!`)
  }

  const independentTruckers = [
    {
      id: "ITR-001",
      name: "Robert Johnson",
      email: "robert.johnson@email.com",
      phone: "(956) 555-0123",
      status: "active",
      currentLocation: "Edinburg, TX",
      truckInfo: {
        make: "Peterbilt",
        model: "579",
        year: 2022,
        plateNumber: "TX-ABC123",
        trailerType: "Flatbed",
      },
      rating: 4.9,
      totalMiles: 185000,
      safetyScore: 98,
      onTimeDelivery: 97.5,
      yearsExperience: 12,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Tanker", "Doubles/Triples"],
      currentLoad: assignedLoads["ITR-001"] || "LD-5521",
      nextMaintenance: "2024-02-20",
      earnings: {
        thisMonth: 12500,
        lastMonth: 11800,
        ytd: 125000,
      },
      performance: {
        fuelEfficiency: 6.2,
        safetyIncidents: 0,
        customerRating: 4.9,
        completedLoads: 89,
      },
      contractType: "Independent Contractor",
      joinDate: "2022-03-15",
      homeBase: "McAllen, TX",
    },
    {
      id: "ITR-002",
      name: "Maria Gonzalez",
      email: "maria.gonzalez@email.com",
      phone: "(956) 555-0124",
      status: "active",
      currentLocation: "Houston, TX",
      truckInfo: {
        make: "Freightliner",
        model: "Cascadia",
        year: 2023,
        plateNumber: "TX-DEF456",
        trailerType: "Dry Van",
      },
      rating: 4.8,
      totalMiles: 142000,
      safetyScore: 96,
      onTimeDelivery: 95.8,
      yearsExperience: 8,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Passenger"],
      currentLoad: assignedLoads["ITR-002"] || "LD-5522",
      nextMaintenance: "2024-02-25",
      earnings: {
        thisMonth: 11200,
        lastMonth: 10900,
        ytd: 112000,
      },
      performance: {
        fuelEfficiency: 6.8,
        safetyIncidents: 0,
        customerRating: 4.8,
        completedLoads: 76,
      },
      contractType: "Independent Contractor",
      joinDate: "2022-07-20",
      homeBase: "Brownsville, TX",
    },
    {
      id: "ITR-003",
      name: "Carlos Rodriguez",
      email: "carlos.rodriguez@email.com",
      phone: "(956) 555-0125",
      status: "available",
      currentLocation: "San Antonio, TX",
      truckInfo: {
        make: "Kenworth",
        model: "T680",
        year: 2021,
        plateNumber: "TX-GHI789",
        trailerType: "Refrigerated",
      },
      rating: 4.7,
      totalMiles: 198000,
      safetyScore: 94,
      onTimeDelivery: 94.2,
      yearsExperience: 15,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Tanker", "School Bus"],
      currentLoad: assignedLoads["ITR-003"] || null,
      nextMaintenance: "2024-03-01",
      earnings: {
        thisMonth: 9800,
        lastMonth: 12100,
        ytd: 118000,
      },
      performance: {
        fuelEfficiency: 6.5,
        safetyIncidents: 1,
        customerRating: 4.7,
        completedLoads: 92,
      },
      contractType: "Independent Contractor",
      joinDate: "2021-11-10",
      homeBase: "Laredo, TX",
    },
    {
      id: "ITR-004",
      name: "David Thompson",
      email: "david.thompson@email.com",
      phone: "(956) 555-0126",
      status: "active",
      currentLocation: "Dallas, TX",
      truckInfo: {
        make: "Volvo",
        model: "VNL 860",
        year: 2023,
        plateNumber: "TX-JKL012",
        trailerType: "Lowboy",
      },
      rating: 4.9,
      totalMiles: 89000,
      safetyScore: 99,
      onTimeDelivery: 98.1,
      yearsExperience: 6,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Doubles/Triples"],
      currentLoad: assignedLoads["ITR-004"] || "LD-5524",
      nextMaintenance: "2024-02-28",
      earnings: {
        thisMonth: 13200,
        lastMonth: 12800,
        ytd: 132000,
      },
      performance: {
        fuelEfficiency: 7.1,
        safetyIncidents: 0,
        customerRating: 4.9,
        completedLoads: 45,
      },
      contractType: "Independent Contractor",
      joinDate: "2023-01-15",
      homeBase: "Harlingen, TX",
    },
  ]

  const truckerStats = {
    totalTruckers: independentTruckers.length,
    activeTruckers: independentTruckers.filter((t) => t.status === "active").length,
    availableTruckers: independentTruckers.filter((t) => t.status === "available").length,
    averageRating: (independentTruckers.reduce((sum, t) => sum + t.rating, 0) / independentTruckers.length).toFixed(1),
    averageSafetyScore: Math.round(
      independentTruckers.reduce((sum, t) => sum + t.safetyScore, 0) / independentTruckers.length,
    ),
    totalEarnings: independentTruckers.reduce((sum, t) => sum + t.earnings.thisMonth, 0),
  }

  const filteredTruckers = independentTruckers.filter((trucker) => {
    const matchesSearch =
      trucker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trucker.currentLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trucker.truckInfo.make.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = filterStatus === "all" || trucker.status === filterStatus

    return matchesSearch && matchesFilter
  })

  const selectedTruckerData = independentTruckers.find((trucker) => trucker.id === selectedTrucker)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-orange-600 to-red-700 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Truck className="h-6 w-6 mr-3" />
            Independent Trucker Management
          </CardTitle>
          <CardDescription className="text-orange-100">
            Manage independent truckers and owner-operators across the USA
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="truckers"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white"
          >
            Truckers
          </TabsTrigger>
          <TabsTrigger
            value="loads"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white"
          >
            Load Assignment
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white"
          >
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Enhanced Trucker Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{truckerStats.totalTruckers}</div>
                    <div className="text-xs opacity-90">Total Truckers</div>
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
                    <div className="text-2xl font-bold">{truckerStats.activeTruckers}</div>
                    <div className="text-xs opacity-90">Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{truckerStats.availableTruckers}</div>
                    <div className="text-xs opacity-90">Available</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{truckerStats.averageRating}</div>
                    <div className="text-xs opacity-90">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-pink-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{truckerStats.averageSafetyScore}%</div>
                    <div className="text-xs opacity-90">Safety Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">${(truckerStats.totalEarnings / 1000).toFixed(0)}K</div>
                    <div className="text-xs opacity-90">Monthly Earnings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performers and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Top Performing Truckers</CardTitle>
                <CardDescription className="text-slate-600">Highest rated truckers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {independentTruckers
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 4)
                    .map((trucker, index) => (
                      <div
                        key={trucker.id}
                        className="flex items-center space-x-4 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-orange-50 hover:from-orange-50 hover:to-red-50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <Avatar className="border-2 border-white shadow-lg">
                          <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                            {trucker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800">{trucker.name}</div>
                          <div className="text-sm text-slate-600">
                            {trucker.rating} ⭐ • ${trucker.earnings.thisMonth.toLocaleString()} earned
                          </div>
                          <div className="text-xs text-slate-500">
                            {trucker.truckInfo.make} {trucker.truckInfo.model} • {trucker.currentLocation}
                          </div>
                        </div>
                        <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                          {trucker.safetyScore}% safety
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Recent Load Assignments</CardTitle>
                <CardDescription className="text-slate-600">Latest load assignments to truckers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {independentTruckers
                    .filter((t) => t.currentLoad)
                    .slice(0, 4)
                    .map((trucker) => (
                      <div
                        key={trucker.id}
                        className="border rounded-xl p-4 bg-gradient-to-r from-white to-slate-50 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-slate-800">{trucker.name}</div>
                          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600">
                            {trucker.currentLoad}
                          </Badge>
                        </div>
                        <div className="text-sm text-slate-600 mb-2">
                          {trucker.truckInfo.make} {trucker.truckInfo.model} • {trucker.truckInfo.trailerType}
                        </div>
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {trucker.currentLocation}
                          </span>
                          <span>{trucker.rating} ⭐</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="truckers" className="space-y-6">
          {/* Search and Filter */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-lg border border-white/20">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, location, or truck make..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/80 border-gray-200"
                  />
                </div>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 bg-white/80 border border-gray-200 rounded-md"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="available">Available</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                      <UserPlus className="h-4 w-4 mr-2" />
                      Add Trucker
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Independent Trucker</DialogTitle>
                      <DialogDescription>Register a new independent trucker to your network.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="text-center py-8">
                        <UserPlus className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">Trucker registration form would appear here</p>
                        <Button className="mt-4 bg-gradient-to-r from-orange-600 to-red-600">
                          Register Trucker
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>

          {/* Trucker List and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Trucker Directory</CardTitle>
                <CardDescription className="text-slate-600">Click on a trucker to view details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredTruckers.map((trucker) => (
                    <div
                      key={trucker.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedTrucker === trucker.id
                          ? "border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white/50"
                      }`}
                      onClick={() => setSelectedTrucker(trucker.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                          <AvatarImage src={`/placeholder-user.jpg`} />
                          <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold">
                            {trucker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-slate-800">{trucker.name}</h3>
                            <Badge
                              variant={trucker.status === "active" ? "default" : "secondary"}
                              className={
                                trucker.status === "active"
                                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                                  : trucker.status === "available"
                                    ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                    : ""
                              }
                            >
                              {trucker.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div className="flex items-center">
                              <Truck className="h-3 w-3 mr-1" />
                              {trucker.truckInfo.make} {trucker.truckInfo.model} • {trucker.currentLocation}
                            </div>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {trucker.rating} • {trucker.yearsExperience} years exp.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trucker Details */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Trucker Details</CardTitle>
                <CardDescription className="text-slate-600">
                  {selectedTruckerData ? `Details for ${selectedTruckerData.name}` : "Select a trucker to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedTruckerData ? (
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Contact Information</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <Mail className="h-4 w-4 mr-3 text-blue-500" />
                          <span className="text-slate-700">{selectedTruckerData.email}</span>
                        </div>
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <Phone className="h-4 w-4 mr-3 text-green-500" />
                          <span className="text-slate-700">{selectedTruckerData.phone}</span>
                        </div>
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <MapPin className="h-4 w-4 mr-3 text-red-500" />
                          <span className="text-slate-700">{selectedTruckerData.currentLocation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Truck Information */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Truck Information</h4>
                      <div className="bg-slate-50 p-4 rounded-lg space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Make/Model:</span>
                          <span className="font-medium text-slate-800">
                            {selectedTruckerData.truckInfo.make} {selectedTruckerData.truckInfo.model}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Year:</span>
                          <span className="font-medium text-slate-800">{selectedTruckerData.truckInfo.year}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Plate Number:</span>
                          <span className="font-medium text-slate-800">{selectedTruckerData.truckInfo.plateNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Trailer Type:</span>
                          <span className="font-medium text-slate-800">{selectedTruckerData.truckInfo.trailerType}</span>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Performance</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-700">Safety Score</span>
                            <span className="font-medium text-slate-800">{selectedTruckerData.safetyScore}%</span>
                          </div>
                          <Progress value={selectedTruckerData.safetyScore} className="h-3 bg-slate-200" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-700">On-Time Delivery</span>
                            <span className="font-medium text-slate-800">{selectedTruckerData.onTimeDelivery}%</span>
                          </div>
                          <Progress value={selectedTruckerData.onTimeDelivery} className="h-3 bg-slate-200" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-700">Customer Rating</span>
                            <span className="font-medium text-slate-800">{selectedTruckerData.rating}/5.0</span>
                          </div>
                          <Progress value={selectedTruckerData.rating * 20} className="h-3 bg-slate-200" />
                        </div>
                      </div>
                    </div>

                    {/* Earnings */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Earnings</h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                          <div className="text-lg font-bold text-green-700">
                            ${selectedTruckerData.earnings.thisMonth.toLocaleString()}
                          </div>
                          <div className="text-xs text-green-600">This Month</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                          <div className="text-lg font-bold text-blue-700">
                            ${selectedTruckerData.earnings.lastMonth.toLocaleString()}
                          </div>
                          <div className="text-xs text-blue-600">Last Month</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-700">
                            ${selectedTruckerData.earnings.ytd.toLocaleString()}
                          </div>
                          <div className="text-xs text-purple-600">YTD</div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                          {selectedTruckerData.cdlClass}
                        </Badge>
                        {selectedTruckerData.endorsements.map((endorsement) => (
                          <Badge key={endorsement} variant="secondary" className="bg-slate-100 text-slate-700">
                            {endorsement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Actions */}
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={() => handleAssignLoad(selectedTruckerData.id)}
                      >
                        <Truck className="h-4 w-4 mr-2" />
                        Assign Load
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex-1 border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-200"
                            onClick={() => handleSendMessage(selectedTruckerData.id)}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Message to {selectedTruckerData.name}</DialogTitle>
                            <DialogDescription>Send a direct message to the trucker</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="text-center py-8">
                              <Send className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-600">Message composition interface would appear here</p>
                              <Button
                                className="mt-4 bg-gradient-to-r from-orange-600 to-red-600"
                                onClick={() => handleSendMessage(selectedTruckerData.id)}
                              >
                                Send Message
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Status Indicators */}
                    {assignedLoads[selectedTruckerData.id] && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">
                            Load {assignedLoads[selectedTruckerData.id]} assigned successfully
                          </span>
                        </div>
                      </div>
                    )}

                    {sentMessages.includes(selectedTruckerData.id) && (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-center text-blue-700">
                          <Send className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Message sent successfully</span>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <Users className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-lg font-medium">Select a trucker from the list</p>
                    <p className="text-sm">to view their detailed information</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="loads" className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-slate-800">Load Assignment Center</CardTitle>
              <CardDescription className="text-slate-600">Assign loads to independent truckers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {independentTruckers.map((trucker) => (
                  <div
                    key={trucker.id}
                    className="border rounded-xl p-6 bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-orange-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                          <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
                            {trucker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-slate-800">{trucker.name}</div>
                          <div className="text-sm text-slate-600">
                            {trucker.truckInfo.make} {trucker.truckInfo.model} • {trucker.truckInfo.trailerType}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={trucker.status === "active" ? "default" : "secondary"}
                        className={
                          trucker.status === "active"
                            ? "bg-gradient-to-r from-green-500 to-emerald-600"
                            : trucker.status === "available"
                              ? "bg-gradient-to-r from-blue-500 to-blue-600"
                              : ""
                        }
                      >
                        {trucker.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Current Location</div>
                        <div className="flex items-center text-slate-600">
                          <MapPin className="h-3 w-3 mr-1" />
                          {trucker.currentLocation}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Current Load</div>
                        <div className="text-slate-600">{trucker.currentLoad || "No active load"}</div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Performance</div>
                        <div className="text-slate-600">
                          {trucker.rating} ⭐ • {trucker.safetyScore}% safety
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Actions</div>
                        <div className="flex space-x-2 mt-1">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
                            onClick={() => handleAssignLoad(trucker.id)}
                            disabled={trucker.status === "active" && trucker.currentLoad}
                          >
                            Assign Load
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-orange-200 text-orange-700 hover:bg-orange-50"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Performance Metrics</CardTitle>
                <CardDescription className="text-slate-600">Fleet-wide performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Average Safety Score</span>
                      <span className="font-medium text-slate-800">{truckerStats.averageSafetyScore}%</span>
                    </div>
                    <Progress value={truckerStats.averageSafetyScore} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Average On-Time Delivery</span>
                      <span className="font-medium text-slate-800">96.4%</span>
                    </div>
                    <Progress value={96.4} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Fleet Utilization</span>
                      <span className="font-medium text-slate-800">85.2%</span>
                    </div>
                    <Progress value={85.2} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Customer Satisfaction</span>
                      <span className="font-medium text-slate-800">{truckerStats.averageRating}/5.0</span>
                    </div>
                    <Progress value={parseFloat(truckerStats.averageRating) * 20} className="h-3 bg-slate-200" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Monthly Earnings Overview</CardTitle>
                <CardDescription className="text-slate-600">Trucker earnings breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">
                      ${truckerStats.totalEarnings.toLocaleString()}
                    </div>
                    <div className="text-sm text-green-600">Total Monthly Earnings</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">
                      ${Math.round(truckerStats.totalEarnings / truckerStats.totalTruckers).toLocaleString()}
                    </div>
                    <div className="text-sm text-blue-600">Average per Trucker</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">
                      {Math.round(
                        independentTruckers.reduce((sum, t) => sum + t.performance.completedLoads, 0) /
                          truckerStats.totalTruckers,
                      )}
                    </div>
                    <div className="text-sm text-purple-600">Avg Loads per Trucker</div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-orange-600 mr-2" />
                      <span className="text-sm font-medium text-orange-800">18% growth in trucker network</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
