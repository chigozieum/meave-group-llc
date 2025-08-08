"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Route,
  Clock,
  Fuel,
  DollarSign,
  Navigation,
  TrendingUp,
  Zap,
  Share,
  Play,
  CheckCircle,
} from "lucide-react"

export default function RouteOptimization() {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null)
  const [startedRoutes, setStartedRoutes] = useState<string[]>([])
  const [sharedRoutes, setSharedRoutes] = useState<string[]>([])
  const [calculatedRoute, setCalculatedRoute] = useState<any>(null)

  const handleStartNavigation = (routeId: string) => {
    setStartedRoutes((prev) => [...prev, routeId])
    alert(`Navigation started for route ${routeId}!`)
  }

  const handleShareRoute = (routeId: string) => {
    setSharedRoutes((prev) => [...prev, routeId])
    // Simulate sharing functionality
    navigator.clipboard?.writeText(`Route ${routeId} shared: https://meave.com/routes/${routeId}`)
    alert(`Route ${routeId} has been shared successfully!`)
  }

  const handleCalculateRoute = () => {
    // Simulate route calculation
    setCalculatedRoute({
      id: "RT-NEW",
      distance: "285 miles",
      estimatedTime: "5h 20m",
      fuelCost: 175,
      tollCost: 15,
      totalCost: 190,
      savings: 45,
      efficiency: 91,
    })
    alert("Route calculated successfully!")
  }

  const optimizedRoutes = [
    {
      id: "RT-001",
      name: "Houston → Dallas Express",
      distance: "240 miles",
      estimatedTime: "4h 15m",
      fuelCost: 145,
      tollCost: 25,
      totalCost: 170,
      savings: 35,
      efficiency: 92,
      waypoints: [
        { city: "Houston, TX", time: "08:00", type: "origin" },
        { city: "Huntsville, TX", time: "09:30", type: "waypoint" },
        { city: "Dallas, TX", time: "12:15", type: "destination" },
      ],
      trafficConditions: "Light",
      weatherConditions: "Clear",
      roadConditions: "Good",
    },
    {
      id: "RT-002",
      name: "Dallas → Austin → San Antonio",
      distance: "385 miles",
      estimatedTime: "6h 45m",
      fuelCost: 235,
      tollCost: 15,
      totalCost: 250,
      savings: 55,
      efficiency: 88,
      waypoints: [
        { city: "Dallas, TX", time: "06:00", type: "origin" },
        { city: "Austin, TX", time: "09:15", type: "waypoint" },
        { city: "San Antonio, TX", time: "12:45", type: "destination" },
      ],
      trafficConditions: "Moderate",
      weatherConditions: "Partly Cloudy",
      roadConditions: "Good",
    },
    {
      id: "RT-003",
      name: "Houston → Beaumont → Lake Charles",
      distance: "165 miles",
      estimatedTime: "3h 20m",
      fuelCost: 98,
      tollCost: 0,
      totalCost: 98,
      savings: 22,
      efficiency: 95,
      waypoints: [
        { city: "Houston, TX", time: "10:00", type: "origin" },
        { city: "Beaumont, TX", time: "11:45", type: "waypoint" },
        { city: "Lake Charles, LA", time: "13:20", type: "destination" },
      ],
      trafficConditions: "Light",
      weatherConditions: "Clear",
      roadConditions: "Excellent",
    },
  ]

  const routeAnalytics = {
    totalRoutes: 24,
    optimizedRoutes: 21,
    averageSavings: 42,
    fuelSavings: 1250,
    timeSavings: 18.5,
    co2Reduction: 2.8,
  }

  const selectedRouteData = optimizedRoutes.find((route) => route.id === selectedRoute)

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-xl border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <Route className="h-6 w-6 mr-3" />
            Route Optimization
          </CardTitle>
          <CardDescription className="text-green-100">
            AI-powered route planning for maximum efficiency and cost savings
          </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <TabsTrigger
            value="active"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
          >
            Active Routes
          </TabsTrigger>
          <TabsTrigger
            value="planner"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
          >
            Route Planner
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
          >
            Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          {/* Enhanced Route Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Route className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{routeAnalytics.totalRoutes}</div>
                    <div className="text-sm opacity-90">Total Routes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{routeAnalytics.optimizedRoutes}</div>
                    <div className="text-sm opacity-90">Optimized</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">${routeAnalytics.averageSavings}</div>
                    <div className="text-sm opacity-90">Avg Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Fuel className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">${routeAnalytics.fuelSavings}</div>
                    <div className="text-sm opacity-90">Fuel Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{routeAnalytics.timeSavings}h</div>
                    <div className="text-sm opacity-90">Time Saved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div className="ml-3">
                    <div className="text-2xl font-bold">{routeAnalytics.co2Reduction}T</div>
                    <div className="text-sm opacity-90">CO₂ Reduced</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Active Routes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Optimized Routes</CardTitle>
                <CardDescription className="text-slate-600">Click on a route to view details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {optimizedRoutes.map((route) => (
                    <div
                      key={route.id}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedRoute === route.id
                          ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 bg-white/50"
                      }`}
                      onClick={() => setSelectedRoute(route.id)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-slate-800">{route.name}</h3>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          ${route.savings} saved
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-slate-700">{route.distance}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-slate-700">{route.estimatedTime}</span>
                        </div>
                        <div className="flex items-center">
                          <Fuel className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-slate-700">${route.fuelCost}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-600 mb-2">
                          <span>Efficiency</span>
                          <span>{route.efficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500 shadow-lg"
                            style={{ width: `${route.efficiency}%` }}
                          />
                        </div>
                      </div>

                      {/* Status Indicators */}
                      {startedRoutes.includes(route.id) && (
                        <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                          <div className="flex items-center text-blue-700 text-sm">
                            <Play className="h-3 w-3 mr-1" />
                            Navigation started
                          </div>
                        </div>
                      )}

                      {sharedRoutes.includes(route.id) && (
                        <div className="mt-3 p-2 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center text-green-700 text-sm">
                            <Share className="h-3 w-3 mr-1" />
                            Route shared
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Route Details */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Route Details</CardTitle>
                <CardDescription className="text-slate-600">
                  {selectedRouteData ? `Details for ${selectedRouteData.name}` : "Select a route to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedRouteData ? (
                  <div className="space-y-6">
                    {/* Enhanced Route Summary */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                        <div className="text-xl font-bold text-blue-700">{selectedRouteData.distance}</div>
                        <div className="text-sm text-blue-600">Total Distance</div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                        <div className="text-xl font-bold text-green-700">{selectedRouteData.estimatedTime}</div>
                        <div className="text-sm text-green-600">Est. Time</div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border border-orange-200">
                        <div className="text-xl font-bold text-orange-700">${selectedRouteData.totalCost}</div>
                        <div className="text-sm text-orange-600">Total Cost</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
                        <div className="text-xl font-bold text-emerald-700">${selectedRouteData.savings}</div>
                        <div className="text-sm text-emerald-600">Savings</div>
                      </div>
                    </div>

                    {/* Waypoints */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Route Waypoints</h4>
                      <div className="space-y-3">
                        {selectedRouteData.waypoints.map((waypoint, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                            <div
                              className={`w-4 h-4 rounded-full shadow-lg ${
                                waypoint.type === "origin"
                                  ? "bg-green-500 shadow-green-500/50"
                                  : waypoint.type === "destination"
                                    ? "bg-red-500 shadow-red-500/50"
                                    : "bg-blue-500 shadow-blue-500/50"
                              }`}
                            />
                            <div className="flex-1">
                              <div className="font-medium text-slate-800">{waypoint.city}</div>
                              <div className="text-sm text-slate-600">ETA: {waypoint.time}</div>
                            </div>
                            <Badge variant="outline" className="text-xs border-slate-200 text-slate-600">
                              {waypoint.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Conditions */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Current Conditions</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm text-slate-700">Traffic</span>
                          <Badge variant={selectedRouteData.trafficConditions === "Light" ? "default" : "secondary"}>
                            {selectedRouteData.trafficConditions}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm text-slate-700">Weather</span>
                          <Badge variant="outline" className="border-blue-200 text-blue-700">
                            {selectedRouteData.weatherConditions}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <span className="text-sm text-slate-700">Road Conditions</span>
                          <Badge variant={selectedRouteData.roadConditions === "Excellent" ? "default" : "secondary"}>
                            {selectedRouteData.roadConditions}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div>
                      <h4 className="font-semibold mb-3 text-slate-800">Cost Breakdown</h4>
                      <div className="space-y-2 text-sm bg-slate-50 p-4 rounded-lg">
                        <div className="flex justify-between">
                          <span className="text-slate-700">Fuel Cost</span>
                          <span className="font-medium text-slate-800">${selectedRouteData.fuelCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-700">Toll Cost</span>
                          <span className="font-medium text-slate-800">${selectedRouteData.tollCost}</span>
                        </div>
                        <div className="border-t pt-2 flex justify-between font-medium">
                          <span className="text-slate-800">Total Cost</span>
                          <span className="text-slate-800">${selectedRouteData.totalCost}</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Actions */}
                    <div className="flex space-x-3">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
                        onClick={() => handleStartNavigation(selectedRouteData.id)}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Start Navigation
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 transition-all duration-200"
                        onClick={() => handleShareRoute(selectedRouteData.id)}
                      >
                        <Share className="h-4 w-4 mr-2" />
                        Share Route
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <Route className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-lg font-medium">Select a route from the list</p>
                    <p className="text-sm">to view detailed information</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="planner" className="space-y-6">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
            <CardHeader>
              <CardTitle className="text-slate-800">Route Planner</CardTitle>
              <CardDescription className="text-slate-600">Plan and optimize new routes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Origin</label>
                    <Input
                      placeholder="Enter starting location"
                      className="bg-white/80 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Destination</label>
                    <Input
                      placeholder="Enter destination"
                      className="bg-white/80 border-gray-200 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Vehicle Type</label>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-gray-200">
                        <SelectValue placeholder="Select vehicle type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flatbed">Flatbed</SelectItem>
                        <SelectItem value="dry-van">Dry Van</SelectItem>
                        <SelectItem value="lowboy">Lowboy</SelectItem>
                        <SelectItem value="tanker">Tanker</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block text-slate-700">Optimization Priority</label>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-gray-200">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="time">Fastest Route</SelectItem>
                        <SelectItem value="fuel">Most Fuel Efficient</SelectItem>
                        <SelectItem value="cost">Lowest Cost</SelectItem>
                        <SelectItem value="balanced">Balanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={handleCalculateRoute}
                  >
                    <Route className="h-4 w-4 mr-2" />
                    Calculate Route
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-slate-100 to-blue-100 rounded-xl p-8 flex items-center justify-center border border-slate-200">
                  {calculatedRoute ? (
                    <div className="text-center">
                      <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Route Calculated!</h3>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div>Distance: {calculatedRoute.distance}</div>
                        <div>Time: {calculatedRoute.estimatedTime}</div>
                        <div>Cost: ${calculatedRoute.totalCost}</div>
                        <div>Savings: ${calculatedRoute.savings}</div>
                      </div>
                      <Button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600">View Full Details</Button>
                    </div>
                  ) : (
                    <div className="text-center text-gray-500">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">Route visualization will appear here</p>
                      <p className="text-sm">Enter origin and destination to begin</p>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Route Efficiency Trends</CardTitle>
                <CardDescription className="text-slate-600">Monthly efficiency improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                    <span className="text-sm text-slate-700">January</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-lg"
                          style={{ width: "78%" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-800">78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                    <span className="text-sm text-slate-700">February</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-lg"
                          style={{ width: "82%" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-800">82%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg">
                    <span className="text-sm text-slate-700">March</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-lg"
                          style={{ width: "85%" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-800">85%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-slate-50 to-green-50 rounded-lg">
                    <span className="text-sm text-slate-700">April</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-lg"
                          style={{ width: "89%" }}
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-800">89%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
              <CardHeader>
                <CardTitle className="text-slate-800">Cost Savings Summary</CardTitle>
                <CardDescription className="text-slate-600">Total savings from route optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <div className="text-2xl font-bold text-green-700">$12,450</div>
                    <div className="text-sm text-green-600">Total Fuel Savings</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700">148 hours</div>
                    <div className="text-sm text-blue-600">Time Saved</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700">2,340 miles</div>
                    <div className="text-sm text-purple-600">Distance Reduced</div>
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
