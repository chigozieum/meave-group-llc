"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Users,
  Building2,
  Phone,
  Mail,
  MapPin,
  Star,
  TrendingUp,
  Package,
  Clock,
  DollarSign,
  Search,
  Plus,
} from "lucide-react"

export default function CustomerPortal() {
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const customers = [
    {
      id: "CUST-001",
      name: "Chevron Phillips Chemical",
      type: "Enterprise",
      industry: "Petrochemicals",
      contact: {
        name: "Sarah Mitchell",
        email: "sarah.mitchell@cpchem.com",
        phone: "(713) 555-0198",
      },
      address: "The Woodlands, TX",
      status: "active",
      rating: 4.9,
      totalRevenue: 1250000,
      activeShipments: 8,
      completedShipments: 156,
      onTimeDelivery: 98.5,
      paymentTerms: "Net 30",
      creditLimit: 500000,
      lastShipment: "2024-01-14",
      preferredServices: ["Heavy Haul", "Hazmat"],
      contractExpiry: "2024-12-31",
    },
    {
      id: "CUST-002",
      name: "ExxonMobil Corporation",
      type: "Enterprise",
      industry: "Oil & Gas",
      contact: {
        name: "Michael Rodriguez",
        email: "michael.rodriguez@exxonmobil.com",
        phone: "(713) 555-0187",
      },
      address: "Spring, TX",
      status: "active",
      rating: 4.7,
      totalRevenue: 980000,
      activeShipments: 5,
      completedShipments: 124,
      onTimeDelivery: 96.8,
      paymentTerms: "Net 45",
      creditLimit: 750000,
      lastShipment: "2024-01-13",
      preferredServices: ["Tanker", "Heavy Haul"],
      contractExpiry: "2025-06-30",
    },
    {
      id: "CUST-003",
      name: "Caterpillar Inc.",
      type: "Enterprise",
      industry: "Manufacturing",
      contact: {
        name: "Jennifer Chen",
        email: "jennifer.chen@caterpillar.com",
        phone: "(713) 555-0176",
      },
      address: "Houston, TX",
      status: "active",
      rating: 4.8,
      totalRevenue: 750000,
      activeShipments: 3,
      completedShipments: 89,
      onTimeDelivery: 97.2,
      paymentTerms: "Net 30",
      creditLimit: 400000,
      lastShipment: "2024-01-12",
      preferredServices: ["Lowboy", "Heavy Haul"],
      contractExpiry: "2024-09-15",
    },
    {
      id: "CUST-004",
      name: "Dell Technologies",
      type: "Mid-Market",
      industry: "Technology",
      contact: {
        name: "David Park",
        email: "david.park@dell.com",
        phone: "(512) 555-0165",
      },
      address: "Round Rock, TX",
      status: "active",
      rating: 4.6,
      totalRevenue: 420000,
      activeShipments: 2,
      completedShipments: 67,
      onTimeDelivery: 94.5,
      paymentTerms: "Net 30",
      creditLimit: 200000,
      lastShipment: "2024-01-11",
      preferredServices: ["Dry Van", "Express"],
      contractExpiry: "2024-08-20",
    },
  ]

  const recentShipments = [
    {
      id: "SH-4521",
      customer: "Chevron Phillips Chemical",
      origin: "Houston, TX",
      destination: "Dallas, TX",
      status: "delivered",
      deliveryDate: "2024-01-14",
      value: 15000,
    },
    {
      id: "SH-4520",
      customer: "ExxonMobil Corporation",
      origin: "Beaumont, TX",
      destination: "Austin, TX",
      status: "in-transit",
      deliveryDate: "2024-01-15",
      value: 12500,
    },
    {
      id: "SH-4519",
      customer: "Caterpillar Inc.",
      origin: "Houston, TX",
      destination: "San Antonio, TX",
      status: "delivered",
      deliveryDate: "2024-01-12",
      value: 18000,
    },
  ]

  const customerStats = {
    totalCustomers: customers.length,
    activeCustomers: customers.filter((c) => c.status === "active").length,
    averageRating: (customers.reduce((sum, c) => sum + c.rating, 0) / customers.length).toFixed(1),
    totalRevenue: customers.reduce((sum, c) => sum + c.totalRevenue, 0),
  }

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.industry.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const selectedCustomerData = customers.find((customer) => customer.id === selectedCustomer)

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Customer Relationship Management
          </CardTitle>
          <CardDescription>Manage customer relationships, track performance, and grow accounts</CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Customer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{customerStats.totalCustomers}</div>
                    <div className="text-sm text-gray-600">Total Customers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Users className="h-8 w-8 text-green-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{customerStats.activeCustomers}</div>
                    <div className="text-sm text-gray-600">Active Customers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <Star className="h-8 w-8 text-yellow-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">{customerStats.averageRating}</div>
                    <div className="text-sm text-gray-600">Avg Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                  <div className="ml-4">
                    <div className="text-2xl font-bold">${(customerStats.totalRevenue / 1000000).toFixed(1)}M</div>
                    <div className="text-sm text-gray-600">Total Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Customers and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Customers by Revenue</CardTitle>
                <CardDescription>Highest value customer accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers
                    .sort((a, b) => b.totalRevenue - a.totalRevenue)
                    .slice(0, 5)
                    .map((customer, index) => (
                      <div key={customer.id} className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <Avatar>
                          <AvatarFallback>
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-gray-600">{customer.industry}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">${(customer.totalRevenue / 1000).toFixed(0)}K</div>
                          <div className="text-sm text-gray-600">{customer.rating} ⭐</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Shipments</CardTitle>
                <CardDescription>Latest customer shipment activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentShipments.map((shipment) => (
                    <div key={shipment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{shipment.id}</div>
                        <div className="text-sm text-gray-600">{shipment.customer}</div>
                        <div className="text-xs text-gray-500">
                          {shipment.origin} → {shipment.destination}
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={shipment.status === "delivered" ? "default" : "secondary"}>
                          {shipment.status}
                        </Badge>
                        <div className="text-sm font-medium mt-1">${shipment.value.toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search customers by name or industry..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Customer
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Customer List and Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Directory</CardTitle>
                <CardDescription>Click on a customer to view details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredCustomers.map((customer) => (
                    <div
                      key={customer.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedCustomer === customer.id
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedCustomer(customer.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>
                            {customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{customer.name}</h3>
                            <Badge variant={customer.type === "Enterprise" ? "default" : "secondary"}>
                              {customer.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div>{customer.industry}</div>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 mr-1 text-yellow-500" />
                              {customer.rating} • ${(customer.totalRevenue / 1000).toFixed(0)}K revenue
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Customer Details */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
                <CardDescription>
                  {selectedCustomerData
                    ? `Details for ${selectedCustomerData.name}`
                    : "Select a customer to view details"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedCustomerData ? (
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h4 className="font-semibold mb-3">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-gray-500" />
                          {selectedCustomerData.contact.name}
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2 text-gray-500" />
                          {selectedCustomerData.contact.email}
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 text-gray-500" />
                          {selectedCustomerData.contact.phone}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          {selectedCustomerData.address}
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div>
                      <h4 className="font-semibold mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-green-700">{selectedCustomerData.onTimeDelivery}%</div>
                          <div className="text-sm text-green-600">On-Time Delivery</div>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-blue-700">{selectedCustomerData.rating}</div>
                          <div className="text-sm text-blue-600">Customer Rating</div>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-purple-700">
                            {selectedCustomerData.activeShipments}
                          </div>
                          <div className="text-sm text-purple-600">Active Shipments</div>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <div className="text-lg font-bold text-orange-700">
                            {selectedCustomerData.completedShipments}
                          </div>
                          <div className="text-sm text-orange-600">Completed</div>
                        </div>
                      </div>
                    </div>

                    {/* Business Information */}
                    <div>
                      <h4 className="font-semibold mb-3">Business Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Payment Terms</span>
                          <span className="font-medium">{selectedCustomerData.paymentTerms}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Credit Limit</span>
                          <span className="font-medium">${(selectedCustomerData.creditLimit / 1000).toFixed(0)}K</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Contract Expiry</span>
                          <span className="font-medium">{selectedCustomerData.contractExpiry}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last Shipment</span>
                          <span className="font-medium">{selectedCustomerData.lastShipment}</span>
                        </div>
                      </div>
                    </div>

                    {/* Preferred Services */}
                    <div>
                      <h4 className="font-semibold mb-3">Preferred Services</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCustomerData.preferredServices.map((service) => (
                          <Badge key={service} variant="outline">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button className="flex-1">Create Quote</Button>
                      <Button variant="outline" className="flex-1">
                        Send Message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    Select a customer from the list to view their details
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shipments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Shipment Tracking
              </CardTitle>
              <CardDescription>Track and manage customer shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentShipments.map((shipment) => (
                  <div key={shipment.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="font-semibold">{shipment.id}</div>
                        <Badge variant={shipment.status === "delivered" ? "default" : "secondary"}>
                          {shipment.status}
                        </Badge>
                      </div>
                      <div className="text-lg font-bold">${shipment.value.toLocaleString()}</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-700">Customer</div>
                        <div>{shipment.customer}</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Route</div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {shipment.origin} → {shipment.destination}
                        </div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-700">Delivery Date</div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {shipment.deliveryDate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Customer Satisfaction Trends</CardTitle>
                <CardDescription>Average customer ratings over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Q1 2024</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }} />
                      </div>
                      <span className="text-sm font-medium">4.6</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Q2 2024</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "94%" }} />
                      </div>
                      <span className="text-sm font-medium">4.7</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Q3 2024</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "96%" }} />
                      </div>
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Q4 2024</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: "98%" }} />
                      </div>
                      <span className="text-sm font-medium">4.9</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue by Customer Type</CardTitle>
                <CardDescription>Revenue distribution across customer segments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">$2.98M</div>
                    <div className="text-sm text-blue-600">Enterprise Customers (70%)</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">$1.27M</div>
                    <div className="text-sm text-green-600">Mid-Market Customers (30%)</div>
                  </div>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium">15% growth in enterprise segment</span>
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
