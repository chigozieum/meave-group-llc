"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
import {
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
  CheckCircle,
  Calendar,
  Truck,
  MessageSquare,
  UserPlus,
  Send,
} from "lucide-react"

export default function DriverManagement() {
  const [selectedDriver, setSelectedDriver] = useState<string | null>(null)
  const [assignedLoads, setAssignedLoads] = useState<{ [key: string]: string }>({})
  const [sentMessages, setSentMessages] = useState<string[]>([])

  const handleAssignLoad = (driverId: string) => {
    const loadId = `LD-${Math.floor(Math.random() * 9999)
      .toString()
      .padStart(4, "0")}`
    setAssignedLoads((prev) => ({ ...prev, [driverId]: loadId }))
    alert(`Load ${loadId} has been assigned to driver!`)
  }

  const handleSendMessage = (driverId: string) => {
    setSentMessages((prev) => [...prev, driverId])
    alert(`Message sent to driver successfully!`)
  }

  const drivers = [
    {
      id: "DRV-001",
      name: "John Martinez",
      email: "john.martinez@meavegroup.com",
      phone: "(713) 555-0123",
      status: "active",
      currentLocation: "Dallas, TX",
      truck: "MEV-001",
      rating: 4.9,
      totalMiles: 125000,
      safetyScore: 98,
      onTimeDelivery: 96.5,
      yearsExperience: 8,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Tanker"],
      currentLoad: assignedLoads["DRV-001"] || "LD-4521",
      nextMaintenance: "2024-02-15",
      earnings: {
        thisMonth: 8500,
        lastMonth: 7800,
        ytd: 89000,
      },
      performance: {
        fuelEfficiency: 6.8,
        safetyIncidents: 0,
        customerRating: 4.9,
      },
    },
    {
      id: "DRV-002",
      name: "Sarah Johnson",
      email: "sarah.johnson@meavegroup.com",
      phone: "(713) 555-0124",
      status: "active",
      currentLocation: "Houston, TX",
      truck: "MEV-002",
      rating: 4.7,
      totalMiles: 98000,
      safetyScore: 95,
      onTimeDelivery: 94.2,
      yearsExperience: 6,
      cdlClass: "Class A",
      endorsements: ["Doubles/Triples"],
      currentLoad: assignedLoads["DRV-002"] || "LD-4522",
      nextMaintenance: "2024-02-20",
      earnings: {
        thisMonth: 7900,
        lastMonth: 8200,
        ytd: 82000,
      },
      performance: {
        fuelEfficiency: 7.1,
        safetyIncidents: 0,
        customerRating: 4.7,
      },
    },
    {
      id: "DRV-003",
      name: "Mike Rodriguez",
      email: "mike.rodriguez@meavegroup.com",
      phone: "(713) 555-0125",
      status: "maintenance",
      currentLocation: "Houston Depot",
      truck: "MEV-003",
      rating: 4.8,
      totalMiles: 156000,
      safetyScore: 97,
      onTimeDelivery: 95.8,
      yearsExperience: 12,
      cdlClass: "Class A",
      endorsements: ["Hazmat", "Passenger", "School Bus"],
      currentLoad: assignedLoads["DRV-003"] || null,
      nextMaintenance: "2024-01-18",
      earnings: {
        thisMonth: 6200,
        lastMonth: 8900,
        ytd: 95000,
      },
      performance: {
        fuelEfficiency: 6.5,
        safetyIncidents: 0,
        customerRating: 4.8,
      },
    },
  ]

  const selectedDriverData = drivers.find((driver) => driver.id === selectedDriver)

  const driverStats = {
    totalDrivers: drivers.length,
    activeDrivers: drivers.filter((d) => d.status === "active").length,
    averageRating: (drivers.reduce((sum, d) => sum + d.rating, 0) / drivers.length).toFixed(1),
    averageSafetyScore: Math.round(drivers.reduce((sum, d) => sum + d.safetyScore, 0) / drivers.length),
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Users className="h-6 w-6 mr-3" />
            Driver Management
          </CardTitle>
          <CardDescription className="text-purple-100">
            Manage your driver fleet, performance, and assignments
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger
            value="scheduling"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Scheduling
          </TabsTrigger>
          <TabsTrigger
            value="training"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
          >
            Training
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Enhanced Driver Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold">{driverStats.totalDrivers}</div>
                    <div className="text-sm opacity-90">Total Drivers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold">{driverStats.activeDrivers}</div>
                    <div className="text-sm opacity-90">Active Drivers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-600 to-orange-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Star className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold">{driverStats.averageRating}</div>
                    <div className="text-sm opacity-90">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/20 rounded-lg">
                    <Award className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <div className="text-3xl font-bold">{driverStats.averageSafetyScore}%</div>
                    <div className="text-sm opacity-90">Safety Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Driver List and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-slate-800">Driver Roster</CardTitle>
                    <CardDescription className="text-slate-600">Click on a driver to view details</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                        <UserPlus className="h-4 w-4 mr-2" />
                        Add Driver
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Driver</DialogTitle>
                        <DialogDescription>Add a new driver to your fleet management system.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="text-center py-8">
                          <UserPlus className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                          <p className="text-gray-600">Driver registration form would appear here</p>
                          <Button className="mt-4 bg-gradient-to-r from-green-600 to-emerald-600">
                            Create Driver Profile
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drivers.map((driver) => (
                    <div
                      key={driver.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedDriver === driver.id
                          ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white/50"
                      }`}
                      onClick={() => setSelectedDriver(driver.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                          <AvatarImage src={`/placeholder-user.jpg`} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-slate-800">{driver.name}</h3>
                            <Badge
                              variant={driver.status === "active" ? "default" : "secondary"}
                              className={
                                driver.status === "active" ? "bg-gradient-to-r from-green-500 to-emerald-600" : ""
                              }
                            >
                              {driver.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div className="flex items-center">
                              <Truck className="h-3 w-3 mr-1" />
                              {driver.truck} • {driver.currentLocation}
                            </div>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {driver.rating} • {driver.yearsExperience} years exp.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Driver Details */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Driver Details</CardTitle>
                <CardDescription className="text-slate-600">
                  {selectedDriverData ? `Details for ${selectedDriverData.name}` : "Select a driver to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDriverData ? (
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Contact Information</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <Mail className="h-4 w-4 mr-3 text-blue-500" />
                          <span className="text-slate-700">{selectedDriverData.email}</span>
                        </div>
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <Phone className="h-4 w-4 mr-3 text-green-500" />
                          <span className="text-slate-700">{selectedDriverData.phone}</span>
                        </div>
                        <div className="flex items-center p-2 bg-slate-50 rounded-lg">
                          <MapPin className="h-4 w-4 mr-3 text-red-500" />
                          <span className="text-slate-700">{selectedDriverData.currentLocation}</span>
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
                            <span className="font-medium text-slate-800">{selectedDriverData.safetyScore}%</span>
                          </div>
                          <Progress value={selectedDriverData.safetyScore} className="h-3 bg-slate-200" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-700">On-Time Delivery</span>
                            <span className="font-medium text-slate-800">{selectedDriverData.onTimeDelivery}%</span>
                          </div>
                          <Progress value={selectedDriverData.onTimeDelivery} className="h-3 bg-slate-200" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-slate-700">Customer Rating</span>
                            <span className="font-medium text-slate-800">{selectedDriverData.rating}/5.0</span>
                          </div>
                          <Progress value={selectedDriverData.rating * 20} className="h-3 bg-slate-200" />
                        </div>
                      </div>
                    </div>

                    {/* Earnings */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Earnings</h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                          <div className="text-lg font-bold text-green-700">
                            ${selectedDriverData.earnings.thisMonth.toLocaleString()}
                          </div>
                          <div className="text-xs text-green-600">This Month</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                          <div className="text-lg font-bold text-blue-700">
                            ${selectedDriverData.earnings.lastMonth.toLocaleString()}
                          </div>
                          <div className="text-xs text-blue-600">Last Month</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-3 rounded-lg border border-purple-200">
                          <div className="text-lg font-bold text-purple-700">
                            ${selectedDriverData.earnings.ytd.toLocaleString()}
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
                          {selectedDriverData.cdlClass}
                        </Badge>
                        {selectedDriverData.endorsements.map((endorsement) => (
                          <Badge key={endorsement} variant="secondary" className="bg-slate-100 text-slate-700">
                            {endorsement}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Actions */}
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={() => handleAssignLoad(selectedDriverData.id)}
                      >
                        <Truck className="h-4 w-4 mr-2" />
                        Assign Load
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
                            onClick={() => handleSendMessage(selectedDriverData.id)}
                          >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Message to {selectedDriverData.name}</DialogTitle>
                            <DialogDescription>Send a direct message to the driver</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="text-center py-8">
                              <Send className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-600">Message composition interface would appear here</p>
                              <Button
                                className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600"
                                onClick={() => handleSendMessage(selectedDriverData.id)}
                              >
                                Send Message
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    {/* Status Indicators */}
                    {assignedLoads[selectedDriverData.id] && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center text-green-700">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">
                            Load {assignedLoads[selectedDriverData.id]} assigned successfully
                          </span>
                        </div>
                      </div>
                    )}

                    {sentMessages.includes(selectedDriverData.id) && (
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
                    <p className="text-lg font-medium">Select a driver from the list</p>
                    <p className="text-sm">to view their detailed information</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Top Performers</CardTitle>
                <CardDescription className="text-slate-600">Drivers with highest ratings this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {drivers
                    .sort((a, b) => b.rating - a.rating)
                    .map((driver, index) => (
                      <div
                        key={driver.id}
                        className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-lg">
                          {index + 1}
                        </div>
                        <Avatar className="border-2 border-white shadow-lg">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium text-slate-800">{driver.name}</div>
                          <div className="text-sm text-slate-600">
                            {driver.rating} ⭐ • ${driver.earnings.thisMonth.toLocaleString()} earned
                          </div>
                        </div>
                        <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                          {driver.safetyScore}% safety
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Performance Metrics</CardTitle>
                <CardDescription className="text-slate-600">Fleet-wide performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Average Fuel Efficiency</span>
                      <span className="font-medium text-slate-800">6.8 MPG</span>
                    </div>
                    <Progress value={68} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Fleet Safety Score</span>
                      <span className="font-medium text-slate-800">96.7%</span>
                    </div>
                    <Progress value={96.7} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">On-Time Delivery Rate</span>
                      <span className="font-medium text-slate-800">95.5%</span>
                    </div>
                    <Progress value={95.5} className="h-3 bg-slate-200" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-slate-700">Customer Satisfaction</span>
                      <span className="font-medium text-slate-800">4.8/5.0</span>
                    </div>
                    <Progress value={96} className="h-3 bg-slate-200" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="scheduling" className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Calendar className="h-5 w-5 mr-2" />
                Driver Scheduling
              </CardTitle>
              <CardDescription className="text-slate-600">Manage driver assignments and schedules</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {drivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="border rounded-xl p-6 bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-slate-800">{driver.name}</div>
                          <div className="text-sm text-slate-600">{driver.truck}</div>
                        </div>
                      </div>
                      <Badge
                        variant={driver.status === "active" ? "default" : "secondary"}
                        className={driver.status === "active" ? "bg-gradient-to-r from-green-500 to-emerald-600" : ""}
                      >
                        {driver.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Current Assignment</div>
                        <div className="text-slate-600">{driver.currentLoad || "No active load"}</div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Next Maintenance</div>
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-3 w-3 mr-1" />
                          {driver.nextMaintenance}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-slate-700 mb-2">Actions</div>
                        <div className="flex space-x-2 mt-1">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                            onClick={() => handleAssignLoad(driver.id)}
                          >
                            Assign
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-blue-200 text-blue-700 hover:bg-blue-50"
                          >
                            Schedule
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

        <TabsContent value="training" className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Award className="h-5 w-5 mr-2" />
                Training & Certification
              </CardTitle>
              <CardDescription className="text-slate-600">
                Track driver training progress and certifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {drivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="border rounded-xl p-6 bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-blue-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12 border-2 border-white shadow-lg">
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-slate-800">{driver.name}</div>
                          <div className="text-sm text-slate-600">{driver.yearsExperience} years experience</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-slate-800">Current Certifications</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                            {driver.cdlClass}
                          </Badge>
                          {driver.endorsements.map((endorsement) => (
                            <Badge key={endorsement} variant="secondary" className="bg-slate-100 text-slate-700">
                              {endorsement}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-3 text-slate-800">Training Progress</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-700">Safety Training</span>
                              <span className="font-medium text-slate-800">100%</span>
                            </div>
                            <Progress value={100} className="h-2 bg-slate-200" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-slate-700">Defensive Driving</span>
                              <span className="font-medium text-slate-800">85%</span>
                            </div>
                            <Progress value={85} className="h-2 bg-slate-200" />
                          </div>
                        </div>
                      </div>
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
