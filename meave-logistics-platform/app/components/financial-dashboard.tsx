"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  BarChart3,
  Calculator,
  Target,
  AlertCircle,
  CheckCircle,
} from "lucide-react"

export default function FinancialDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")

  const financialData = {
    revenue: {
      current: 4250000,
      previous: 3850000,
      growth: 10.4,
      target: 5000000,
    },
    expenses: {
      fuel: 850000,
      maintenance: 125000,
      insurance: 95000,
      salaries: 720000,
      other: 180000,
    },
    profitMargin: 28.5,
    cashFlow: 1275000,
    accountsReceivable: 485000,
    accountsPayable: 235000,
  }

  const monthlyData = [
    { month: "Jan", revenue: 320000, expenses: 245000, profit: 75000 },
    { month: "Feb", revenue: 340000, expenses: 255000, profit: 85000 },
    { month: "Mar", revenue: 365000, expenses: 270000, profit: 95000 },
    { month: "Apr", revenue: 380000, expenses: 275000, profit: 105000 },
    { month: "May", revenue: 395000, expenses: 285000, profit: 110000 },
    { month: "Jun", revenue: 410000, expenses: 290000, profit: 120000 },
    { month: "Jul", revenue: 425000, expenses: 295000, profit: 130000 },
    { month: "Aug", revenue: 440000, expenses: 305000, profit: 135000 },
    { month: "Sep", revenue: 455000, expenses: 315000, profit: 140000 },
    { month: "Oct", revenue: 470000, expenses: 320000, profit: 150000 },
    { month: "Nov", revenue: 485000, expenses: 325000, profit: 160000 },
    { month: "Dec", revenue: 500000, expenses: 330000, profit: 170000 },
  ]

  const expenseBreakdown = [
    { name: "Fuel", value: 850000, color: "#ef4444", percentage: 43.6 },
    { name: "Salaries", value: 720000, color: "#3b82f6", percentage: 36.9 },
    { name: "Other", value: 180000, color: "#8b5cf6", percentage: 9.2 },
    { name: "Maintenance", value: 125000, color: "#f59e0b", percentage: 6.4 },
    { name: "Insurance", value: 95000, color: "#10b981", percentage: 4.9 },
  ]

  const kpis = [
    {
      title: "Total Revenue",
      value: `$${(financialData.revenue.current / 1000000).toFixed(2)}M`,
      change: `+${financialData.revenue.growth}%`,
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Profit Margin",
      value: `${financialData.profitMargin}%`,
      change: "+2.3%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-600",
    },
    {
      title: "Cash Flow",
      value: `$${(financialData.cashFlow / 1000000).toFixed(2)}M`,
      change: "+15.2%",
      trend: "up",
      icon: CreditCard,
      color: "text-purple-600",
    },
    {
      title: "A/R Outstanding",
      value: `$${(financialData.accountsReceivable / 1000).toFixed(0)}K`,
      change: "-8.5%",
      trend: "down",
      icon: Calculator,
      color: "text-orange-600",
    },
  ]

  // Simple chart component to replace Recharts
  const SimpleBarChart = ({ data, dataKey, color }: any) => {
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

  const SimplePieChart = ({ data }: any) => {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
          {data.map((item: any, index: number) => (
            <div
              key={item.name}
              className="absolute inset-0 rounded-full border-8 border-transparent"
              style={{
                borderTopColor: item.color,
                transform: `rotate(${index * (360 / data.length)}deg)`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">100%</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>
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
                Financial Dashboard
              </CardTitle>
              <CardDescription>Comprehensive financial overview and performance metrics</CardDescription>
            </div>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="profitability">Profitability</TabsTrigger>
          <TabsTrigger value="forecasting">Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                      <p className="text-2xl font-bold">{kpi.value}</p>
                      <p
                        className={`text-xs flex items-center mt-1 ${
                          kpi.trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {kpi.trend === "up" ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {kpi.change} from last period
                      </p>
                    </div>
                    <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Revenue vs Expenses Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Expenses Trend</CardTitle>
              <CardDescription>Monthly comparison of revenue and expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <SimpleBarChart data={monthlyData} dataKey="revenue" color="bg-gradient-to-t from-blue-600 to-blue-400" />
            </CardContent>
          </Card>

          {/* Financial Health Indicators */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Financial Health Score</CardTitle>
                <CardDescription>Overall financial performance rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Liquidity Ratio</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-bold">2.1</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Debt-to-Equity</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-bold">0.35</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">ROI</span>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm font-bold">18.5%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Working Capital</span>
                    <div className="flex items-center">
                      <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-sm font-bold">$250K</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-green-800">Excellent Financial Health</span>
                    </div>
                    <p className="text-xs text-green-700 mt-1">
                      Strong cash flow and healthy profit margins indicate excellent financial position.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Targets</CardTitle>
                <CardDescription>Progress towards annual goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Revenue Target ($5M)</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Profit Margin (30%)</span>
                      <span>95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: "95%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Fleet Expansion (20 trucks)</span>
                      <span>90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-purple-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Market Expansion</span>
                      <span>75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-orange-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by service type and customer segment</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleBarChart
                  data={monthlyData}
                  dataKey="revenue"
                  color="bg-gradient-to-t from-blue-600 to-blue-400"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Sources</CardTitle>
                <CardDescription>Breakdown by service type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Heavy Haul</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "65%" }}
                        />
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Standard Freight</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "25%" }}
                        />
                      </div>
                      <span className="text-sm font-medium">25%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Specialized Transport</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: "10%" }}
                        />
                      </div>
                      <span className="text-sm font-medium">10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Distribution of operational costs</CardDescription>
              </CardHeader>
              <CardContent>
                <SimplePieChart data={expenseBreakdown} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Details</CardTitle>
                <CardDescription>Detailed breakdown of major expense categories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {expenseBreakdown.map((expense, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: expense.color }} />
                        <span className="font-medium">{expense.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${(expense.value / 1000).toFixed(0)}K</div>
                        <div className="text-sm text-gray-600">{expense.percentage.toFixed(1)}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profitability" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Profit Trends</CardTitle>
                <CardDescription>Monthly profit analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <SimpleBarChart
                  data={monthlyData}
                  dataKey="profit"
                  color="bg-gradient-to-t from-green-600 to-green-400"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profitability Metrics</CardTitle>
                <CardDescription>Key profitability indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">28.5%</div>
                    <div className="text-sm text-green-600">Gross Profit Margin</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">18.2%</div>
                    <div className="text-sm text-blue-600">Net Profit Margin</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">22.8%</div>
                    <div className="text-sm text-purple-600">Return on Assets</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">31.5%</div>
                    <div className="text-sm text-orange-600">Return on Equity</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Financial Forecasting
              </CardTitle>
              <CardDescription>Projected financial performance for next 12 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <SimpleBarChart
                    data={monthlyData}
                    dataKey="revenue"
                    color="bg-gradient-to-t from-blue-600 to-blue-400"
                  />
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-blue-700">$6.2M</div>
                    <div className="text-sm text-blue-600">Projected Revenue (2024)</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-green-700">$1.8M</div>
                    <div className="text-sm text-green-600">Projected Profit (2024)</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-lg font-bold text-purple-700">29.2%</div>
                    <div className="text-sm text-purple-600">Projected Margin</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
