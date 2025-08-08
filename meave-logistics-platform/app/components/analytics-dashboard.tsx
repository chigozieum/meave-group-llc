"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, TrendingUp, Target, Zap, Brain, AlertTriangle, CheckCircle, ArrowUp, ArrowDown } from "lucide-react"

export default function AnalyticsDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("monthly")

  const performanceData = [
    { month: "Jan", revenue: 320000, efficiency: 78, satisfaction: 4.5, utilization: 82 },
    { month: "Feb", revenue: 340000, efficiency: 81, satisfaction: 4.6, utilization: 85 },
    { month: "Mar", revenue: 365000, efficiency: 83, satisfaction: 4.6, utilization: 87 },
    { month: "Apr", revenue: 380000, efficiency: 85, satisfaction: 4.7, utilization: 89 },
    { month: "May", revenue: 395000, efficiency: 87, satisfaction: 4.7, utilization: 91 },
    { month: "Jun", revenue: 410000, efficiency: 89, satisfaction: 4.8, utilization: 88 },
    { month: "Jul", revenue: 425000, efficiency: 91, satisfaction: 4.8, utilization: 90 },
    { month: "Aug", revenue: 440000, efficiency: 92, satisfaction: 4.9, utilization: 92 },
    { month: "Sep", revenue: 455000, efficiency: 94, satisfaction: 4.9, utilization: 94 },
    { month: "Oct", revenue: 470000, efficiency: 95, satisfaction: 4.9, utilization: 96 },
    { month: "Nov", revenue: 485000, efficiency: 96, satisfaction: 5.0, utilization: 97 },
    { month: "Dec", revenue: 500000, efficiency: 97, satisfaction: 5.0, utilization: 98 },
  ]

  const competitiveAnalysis = [
    { metric: "On-Time Delivery", meave: 96.8, competitor1: 92.5, competitor2: 89.3, industry: 91.2 },
    { metric: "Customer Satisfaction", meave: 4.8, competitor1: 4.3, competitor2: 4.1, industry: 4.2 },
    { metric: "Fleet Utilization", meave: 87.3, competitor1: 82.1, competitor2: 79.8, industry: 81.5 },
    { metric: "Safety Score", meave: 96.7, competitor1: 91.2, competitor2: 88.9, industry: 90.1 },
    { metric: "Fuel Efficiency", meave: 6.8, competitor1: 6.2, competitor2: 5.9, industry: 6.1 },
    { metric: "Revenue Growth", meave: 23.5, competitor1: 15.2, competitor2: 12.8, industry: 14.1 },
  ]

  const predictiveInsights = [
    {
      title: "Revenue Forecast",
      prediction: "$6.2M by Q4 2024",
      confidence: 92,
      trend: "up",
      impact: "high",
      description: "Based on current growth trajectory and market conditions",
    },
    {
      title: "Fleet Expansion Need",
      prediction: "5 additional trucks by Q2",
      confidence: 87,
      trend: "up",
      impact: "medium",
      description: "Demand analysis suggests capacity constraints approaching",
    },
    {
      title: "Fuel Cost Optimization",
      prediction: "12% savings potential",
      confidence: 78,
      trend: "down",
      impact: "medium",
      description: "Route optimization and fuel hedging strategies",
    },
    {
      title: "Customer Churn Risk",
      prediction: "Low risk (2.3%)",
      confidence: 94,
      trend: "down",
      impact: "low",
      description: "Strong satisfaction scores indicate stable relationships",
    },
  ]

  const kpiTrends = [
    {
      title: "Revenue Growth",
      current: "23.5%",
      previous: "18.2%",
      change: "+5.3%",
      trend: "up",
      target: "25%",
      status: "on-track",
    },
    {
      title: "Operational Efficiency",
      current: "94.2%",
      previous: "91.8%",
      change: "+2.4%",
      trend: "up",
      target: "95%",
      status: "on-track",
    },
    {
      title: "Customer Retention",
      current: "97.7%",
      previous: "96.1%",
      change: "+1.6%",
      trend: "up",
      target: "98%",
      status: "on-track",
    },
    {
      title: "Profit Margin",
      current: "28.5%",
      previous: "26.8%",
      change: "+1.7%",
      trend: "up",
      target: "30%",
      status: "approaching",
    },
  ]

  const marketInsights = {
    marketShare: 12.8,
    marketGrowth: 8.5,
    competitivePosition: "Strong",
    opportunities: [
      "Expand into Louisiana market",
      "Add specialized heavy haul services",
      "Develop intermodal capabilities",
      "Target renewable energy sector",
    ],
    threats: ["Rising fuel costs", "Driver shortage", "Increased competition", "Regulatory changes"],
  }

  // Simple chart component
  const SimpleLineChart = ({ data, dataKey, color }: any) => {
    const maxValue = Math.max(...data.map((item: any) => item[dataKey]))

    return (
      <div className="h-64 flex items-end justify-between space-x-2 p-4">
        {data.map((item: any, index: number) => {
          const height = (item[dataKey] / maxValue) * 100
          return (
            <div key={item.month} className="flex-1 flex flex-col items-center space-y-2">
              <div className="flex-1 flex items-end w-full">
                <div
                  className={`w-full rounded-t transition-all duration-1000 ease-out ${color}`}
                  style={{
                    height: `${height}%`,
                    animationDelay: `${index * 100}ms`,
                  }}
                />
              </div>
              <div className="text-xs text-gray-600 font-medium">{item.month}</div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Advanced Analytics Dashboard
              </CardTitle>
              <CardDescription>
                AI-powered insights and predictive analytics for strategic decision making
              </CardDescription>
            </div>
            <div className="flex space-x-2">
              <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export Report</Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="predictive">Predictive</TabsTrigger>
          <TabsTrigger value="competitive">Competitive</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* KPI Trend Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiTrends.map((kpi, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">{kpi.title}</span>
                      <Badge variant={kpi.status === "on-track" ? "default" : "secondary"}>{kpi.status}</Badge>
                    </div>
                    <div className="text-2xl font-bold">{kpi.current}</div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex items-center text-sm ${
                          kpi.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {kpi.trend === "up" ? (
                          <ArrowUp className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDown className="h-3 w-3 mr-1" />
                        )}
                        {kpi.change}
                      </div>
                      <span className="text-xs text-gray-500">Target: {kpi.target}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Key metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleLineChart
                data={performanceData}
                dataKey="efficiency"
                color="bg-gradient-to-t from-blue-600 to-blue-400"
              />
            </CardContent>
          </Card>

          {/* Performance Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Efficiency Metrics</CardTitle>
                <CardDescription>Operational efficiency breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Route Optimization</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: "94%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Fuel Efficiency</span>
                      <span>89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: "89%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Load Utilization</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: "92%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Time Management</span>
                      <span>96%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: "96%" }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quality Metrics</CardTitle>
                <CardDescription>Service quality indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">96.8%</div>
                    <div className="text-sm text-green-600">On-Time Delivery Rate</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">4.8/5.0</div>
                    <div className="text-sm text-blue-600">Customer Satisfaction</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">99.2%</div>
                    <div className="text-sm text-purple-600">Damage-Free Delivery</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">0.8%</div>
                    <div className="text-sm text-orange-600">Customer Churn Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI-Powered Predictions
              </CardTitle>
              <CardDescription>Machine learning insights for strategic planning</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {predictiveInsights.map((insight, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{insight.title}</h3>
                      <Badge
                        variant={
                          insight.impact === "high"
                            ? "destructive"
                            : insight.impact === "medium"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {insight.impact} impact
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div className="text-lg font-bold text-blue-700">{insight.prediction}</div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Confidence Level</span>
                        <span className="text-sm font-medium">{insight.confidence}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${insight.confidence}%` }}
                        />
                      </div>

                      <p className="text-sm text-gray-600">{insight.description}</p>

                      <div className="flex items-center">
                        {insight.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-600 mr-2" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-600 mr-2" />
                        )}
                        <span className={`text-sm ${insight.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {insight.trend === "up" ? "Positive trend" : "Optimization opportunity"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Revenue Forecast Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Forecast Model</CardTitle>
              <CardDescription>12-month revenue projection with confidence intervals</CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleLineChart
                data={performanceData}
                dataKey="revenue"
                color="bg-gradient-to-t from-blue-600 to-blue-400"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitive" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Competitive Analysis</CardTitle>
              <CardDescription>Performance comparison with industry competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {competitiveAnalysis.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold mb-4">{item.metric}</h3>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{item.meave}</div>
                        <div className="text-sm text-gray-600">Meave Group</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">{item.competitor1}</div>
                        <div className="text-sm text-gray-600">Competitor 1</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">{item.competitor2}</div>
                        <div className="text-sm text-gray-600">Competitor 2</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-600">{item.industry}</div>
                        <div className="text-sm text-gray-600">Industry Avg</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Competitive Advantages</CardTitle>
                <CardDescription>Areas where Meave Group excels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium">On-Time Delivery</div>
                      <div className="text-sm text-gray-600">96.8% vs 91.2% industry avg</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium">Customer Satisfaction</div>
                      <div className="text-sm text-gray-600">4.8/5.0 vs 4.2/5.0 industry avg</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium">Safety Score</div>
                      <div className="text-sm text-gray-600">96.7% vs 90.1% industry avg</div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Improvement Opportunities</CardTitle>
                <CardDescription>Areas for competitive enhancement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium">Market Share</div>
                      <div className="text-sm text-gray-600">12.8% - opportunity for growth</div>
                    </div>
                    <Target className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium">Service Diversification</div>
                      <div className="text-sm text-gray-600">Expand specialized services</div>
                    </div>
                    <Target className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <div className="font-medium">Geographic Reach</div>
                      <div className="text-sm text-gray-600">Expand beyond Texas market</div>
                    </div>
                    <Target className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="market" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Market Position</CardTitle>
                <CardDescription>Current market standing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-700">{marketInsights.marketShare}%</div>
                    <div className="text-sm text-gray-600">Market Share</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-700">{marketInsights.marketGrowth}%</div>
                    <div className="text-sm text-gray-600">Market Growth Rate</div>
                  </div>
                  <div className="text-center">
                    <Badge variant="default" className="text-lg px-4 py-2">
                      {marketInsights.competitivePosition}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">Competitive Position</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Opportunities</CardTitle>
                <CardDescription>Strategic expansion areas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketInsights.opportunities.map((opportunity, index) => (
                    <div key={index} className="flex items-center p-2 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Threats</CardTitle>
                <CardDescription>Risk factors to monitor</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {marketInsights.threats.map((threat, index) => (
                    <div key={index} className="flex items-center p-2 bg-red-50 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{threat}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Optimization Recommendations
              </CardTitle>
              <CardDescription>AI-generated suggestions for operational improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">High Impact Optimizations</h3>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Route Optimization Enhancement</h4>
                      <Badge variant="destructive">High Impact</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Implement advanced AI routing algorithms to reduce empty miles by 15%
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $180K/year</span>
                      <span>Implementation: 2-3 months</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Fuel Management System</h4>
                      <Badge variant="default">Medium Impact</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Deploy fuel monitoring and optimization system across fleet
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $125K/year</span>
                      <span>Implementation: 1-2 months</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Predictive Maintenance</h4>
                      <Badge variant="default">Medium Impact</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Implement IoT sensors for predictive maintenance scheduling
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $95K/year</span>
                      <span>Implementation: 3-4 months</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Quick Wins</h3>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Driver Training Program</h4>
                      <Badge variant="secondary">Quick Win</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Enhanced fuel-efficient driving training for all drivers
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $45K/year</span>
                      <span>Implementation: 2-4 weeks</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Load Board Automation</h4>
                      <Badge variant="secondary">Quick Win</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Automate load matching and booking processes</p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $35K/year</span>
                      <span>Implementation: 3-6 weeks</span>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Customer Portal Enhancement</h4>
                      <Badge variant="secondary">Quick Win</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Improve customer self-service capabilities</p>
                    <div className="flex justify-between text-sm">
                      <span>Potential Savings: $25K/year</span>
                      <span>Implementation: 4-6 weeks</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ROI Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>ROI Analysis</CardTitle>
              <CardDescription>Return on investment for optimization initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { initiative: "Route Optimization", investment: 50000, savings: 180000, roi: 260 },
                  { initiative: "Fuel Management", investment: 35000, savings: 125000, roi: 257 },
                  { initiative: "Predictive Maintenance", investment: 75000, savings: 95000, roi: 127 },
                  { initiative: "Driver Training", investment: 15000, savings: 45000, roi: 200 },
                  { initiative: "Load Automation", investment: 25000, savings: 35000, roi: 40 },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{item.initiative}</div>
                      <div className="text-sm text-gray-600">
                        Investment: ${(item.investment / 1000).toFixed(0)}K | Annual Savings: $
                        {(item.savings / 1000).toFixed(0)}K
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{item.roi}%</div>
                      <div className="text-sm text-gray-600">ROI</div>
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
