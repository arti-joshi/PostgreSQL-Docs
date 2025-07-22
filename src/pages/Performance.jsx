"use client"

import { useState, useMemo } from "react"
import SearchBar from "../components/SearchBar"
import PerformanceCard from "../components/PerformanceCard"
import { performanceParams } from "../constants/performanceParams"

const Performance = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImpact, setSelectedImpact] = useState("all")

  const filteredParams = useMemo(() => {
    let filtered = performanceParams

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (param) =>
          param.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          param.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          param.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((param) => param.category === selectedCategory)
    }

    if (selectedImpact !== "all") {
      filtered = filtered.filter((param) => param.impact === selectedImpact)
    }

    return filtered
  }, [searchTerm, selectedCategory, selectedImpact])

  const categories = ["all", ...new Set(performanceParams.map((p) => p.category))]
  const impacts = ["all", "High", "Medium", "Low"]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Performance Parameters</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Key PostgreSQL configuration parameters that affect database performance.
        </p>
      </div>

      <div className="mb-6 space-y-4">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search performance parameters..."
        />

        <div className="flex flex-wrap gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Category:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {category === "all" ? "All" : category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Impact:</span>
            {impacts.map((impact) => (
              <button
                key={impact}
                onClick={() => setSelectedImpact(impact)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedImpact === impact
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {impact === "all" ? "All" : impact}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        {filteredParams.length > 0 ? (
          filteredParams.map((param, index) => <PerformanceCard key={index} parameter={param} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No performance parameters found matching your criteria</p>
          </div>
        )}
      </div>

      {filteredParams.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredParams.length} of {performanceParams.length} parameters
        </div>
      )}
    </div>
  )
}

export default Performance
