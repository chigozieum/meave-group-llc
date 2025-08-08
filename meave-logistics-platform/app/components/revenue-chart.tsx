"use client"

import { useMemo } from "react"

const revenueData = [
  { month: "Jan", revenue: 280000, target: 300000, growth: 15 },
  { month: "Feb", revenue: 320000, target: 325000, growth: 18 },
  { month: "Mar", revenue: 350000, target: 350000, growth: 22 },
  { month: "Apr", revenue: 380000, target: 375000, growth: 25 },
  { month: "May", revenue: 420000, target: 400000, growth: 28 },
  { month: "Jun", revenue: 450000, target: 425000, growth: 32 },
  { month: "Jul", revenue: 485000, target: 450000, growth: 35 },
  { month: "Aug", revenue: 520000, target: 475000, growth: 38 },
  { month: "Sep", revenue: 560000, target: 500000, growth: 42 },
  { month: "Oct", revenue: 595000, target: 525000, growth: 45 },
  { month: "Nov", revenue: 630000, target: 550000, growth: 48 },
  { month: "Dec", revenue: 670000, target: 575000, growth: 52 },
]

export default function RevenueChart() {
  const maxValue = useMemo(() => {
    return Math.max(...revenueData.map((d) => Math.max(d.revenue, d.target)))
  }, [])

  return (
    <div className="h-64 p-4">
      <div className="flex items-end justify-between h-full space-x-2">
        {revenueData.map((data, index) => {
          const revenueHeight = (data.revenue / maxValue) * 100
          const targetHeight = (data.target / maxValue) * 100

          return (
            <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
              <div className="flex-1 flex items-end justify-center space-x-1 w-full">
                <div className="relative flex-1 max-w-4">
                  <div
                    className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t transition-all duration-1000 ease-out"
                    style={{
                      height: `${revenueHeight}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  />
                </div>
                <div className="relative flex-1 max-w-4">
                  <div
                    className="bg-gradient-to-t from-green-600 to-green-400 rounded-t transition-all duration-1000 ease-out border-2 border-dashed border-green-300"
                    style={{
                      height: `${targetHeight}%`,
                      animationDelay: `${index * 100 + 50}ms`,
                    }}
                  />
                </div>
              </div>
              <div className="text-xs text-gray-600 font-medium">{data.month}</div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center space-x-6 mt-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
          <span className="text-gray-600">Actual Revenue</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-green-400 rounded border border-dashed border-green-300"></div>
          <span className="text-gray-600">Target Revenue</span>
        </div>
      </div>
    </div>
  )
}
