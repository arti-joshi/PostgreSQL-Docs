"use client"

import { useState, useMemo } from "react"
import SearchBar from "../components/SearchBar"
import ErrorCard from "../components/ErrorCard"
import { errorGuides } from "../constants/errorGuides"

const ErrorGuide = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSeverity, setSelectedSeverity] = useState("all")

  const filteredErrors = useMemo(() => {
    let filtered = errorGuides

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (error) =>
          error.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          error.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
          error.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedSeverity !== "all") {
      filtered = filtered.filter((error) => error.severity === selectedSeverity)
    }

    return filtered
  }, [searchTerm, selectedSeverity])

  const severityOptions = ["all", "ERROR", "WARNING", "INFO"]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">PostgreSQL Error Guide</h1>
        <p className="text-gray-600 dark:text-gray-400">Common PostgreSQL errors, their causes, and solutions.</p>
      </div>

      <div className="mb-6 space-y-4">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          placeholder="Search error codes, messages, or descriptions..."
        />

        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 py-2">Filter by severity:</span>
          {severityOptions.map((severity) => (
            <button
              key={severity}
              onClick={() => setSelectedSeverity(severity)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedSeverity === severity
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {severity === "all" ? "All" : severity}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredErrors.length > 0 ? (
          filteredErrors.map((error, index) => <ErrorCard key={index} error={error} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No errors found matching your criteria</p>
          </div>
        )}
      </div>

      {filteredErrors.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredErrors.length} of {errorGuides.length} errors
        </div>
      )}
    </div>
  )
}

export default ErrorGuide
