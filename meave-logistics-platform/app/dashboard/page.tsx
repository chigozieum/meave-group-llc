"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import DriverManagement from "../components/driver-management"
import CustomerPortal from "../components/customer-portal"
import LoadBoard from "../components/load-board"
import FinancialDashboard from "../components/financial-dashboard"
import AnalyticsDashboard from "../components/analytics-dashboard"
import FleetVisualization3D from "../components/fleet-visualization-3d"
import TuroRentalManagement from "../components/turo-rental-management"
import TruckerManagement from "../components/trucker-management"
import { Truck, Users, DollarSign, BarChart3, Car, UserCheck, Package, TrendingUp, MapPin, Clock, Star, Shield } from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for dashboard overview
  const dashboardStats = {
    totalRevenue: 4250000,
    activeDrivers: 18,
    completedDeliveries: 1247,
    customerSatisfaction: 4.8,
    fleetUtilization: 87.5,
    safetyScore: 96.8,
    rentalVehicles: 25,
    independentTruckers: 45,
  }

  const recentActivity = [
    {
      id: 1,
      type: "delivery",
      message: "Load LD-4521 delivered successfully to Dallas, TX",
      time: "2 hours ago",
      status: "completed",
    },
    {
      id: 2,
      type: "rental",
      message: "Tesla Model S Plaid booked for 3 days in Houston",
      time: "4 hours ago",
      status: "active",
    },
    {
      id: 3,
      type: "trucker",
      message: "New independent trucker Robert Johnson joined network",
      time: "6 hours ago",
      status: "new",
    },
    {
      id: 4,
      type: "maintenance",
      message: "MEV-003 scheduled for maintenance on 2024-01-18",
      time: "8 hours ago",
      status: "scheduled",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Meave Group LLC Dashboard</h1>
              <p className="text-blue-300">Comprehensive Logistics & Rental Management Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <MapPin className="h-4 w-4" />
            <span>Headquarters: Edinburg, TX</span>
            <span>•</span>
            <span>Nationwide Operations</span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="drivers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
            >
              Drivers
            </TabsTrigger>
            <TabsTrigger
              value="truckers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white"
            >
              Truckers
            </TabsTrigger>
            <TabsTrigger
              value="customers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white"
            >
              Customers
            </TabsTrigger>
            <TabsTrigger
              value="loads"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-orange-600 data-[state=active]:text-white"
            >
              Load Board
            </TabsTrigger>
            <TabsTrigger
              value="rentals"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-600 data-[state=active]:to-rose-600 data-[state=active]:text-white"
            >
              Rentals
            </TabsTrigger>
            <TabsTrigger
              value="financial"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-600 data-[state=active]:to-teal-600 data-[state=active]:text-white"
            >
              Financial
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-violet-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-xl border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
                      <p className="text-3xl font-bold">${(dashboardStats.totalRevenue / 1000000).toFixed(1)}M</p>
                      <p className="text-blue-200 text-xs flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12.5% from last month
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-xl border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">Active Fleet</p>
                      <p className="text-3xl font-bold">{dashboardStats.activeDrivers + dashboardStats.independentTruckers}</p>
                      <p className="text-green-200 text-xs flex items-center mt-1">
                        <Users className="h-3 w-3 mr-1" />
                        {dashboardStats.activeDrivers} drivers, {dashboardStats.independentTruckers} truckers
                      </p>
                    </div>
                    <Truck className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">Rental Fleet</p>
                      <p className="text-3xl font-bold">{dashboardStats.rentalVehicles}</p>
                      <p className="text-purple-200 text-xs flex items-center mt-1">
                        <Car className="h-3 w-3 mr-1" />
                        Luxury & Executive vehicles
                      </p>
                    </div>
                    <Car className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-600 to-red-700 text-white shadow-xl border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">Safety Score</p>
                      <p className="text-3xl font-bold">{dashboardStats.safetyScore}%</p>
                      <p className="text-orange-200 text-xs flex items-center mt-1">
                        <Shield className="h-3 w-3 mr-1" />
                        Industry leading safety
                      </p>
                    </div>
                    <Shield className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Business Performance
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Key performance indicators across all business units
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">{dashboardStats.completedDeliveries}</div>
                      <div className="text-sm text-slate-300">Completed Deliveries</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">{dashboardStats.customerSatisfaction}</div>
                      <div className="text-sm text-slate-300">Customer Rating</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">{dashboardStats.fleetUtilization}%</div>
                      <div className="text-sm text-slate-300">Fleet Utilization</div>
                    </div>
                    <div className="text-center p-4 bg-slate-700/50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-400">24/7</div>
                      <div className="text-sm text-slate-300">Operations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription className="text-slate-300">Latest updates across all operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            activity.status === "completed"
                              ? "bg-green-400"
                              : activity.status === "active"
                                ? "bg-blue-400"
                                : activity.status === "new"
                                  ? "bg-purple-400"
                                  : "bg-orange-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm text-slate-200">{activity.message}</p>
                          <p className="text-xs text-slate-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 3D Fleet Visualization */}
            <FleetVisualization3D />
          </TabsContent>

          <TabsContent value="drivers">
            <DriverManagement />
          </TabsContent>

          <TabsContent value="truckers">
            <TruckerManagement />
          </TabsContent>

          <TabsContent value="customers">
            <CustomerPortal />
          </TabsContent>

          <TabsContent value="loads">
            <LoadBoard />
          </TabsContent>

          <TabsContent value="rentals">
            <TuroRentalManagement />
          </TabsContent>

          <TabsContent value="financial">
            <FinancialDashboard />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
