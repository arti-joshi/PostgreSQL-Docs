"use client"

import { useState } from "react"
import { GitBranch, Calendar, Star, ArrowRight } from "lucide-react"

const VersionFeatures = () => {
  const [selectedVersion, setSelectedVersion] = useState("all")

  const versions = [
    {
      version: "16",
      releaseDate: "September 2023",
      status: "Latest",
      majorFeatures: [
        "Logical replication from standby servers",
        "SQL/JSON constructors and identity functions",
        "More query types can use parallelism",
        "Monitoring of I/O statistics with pg_stat_io",
        "Performance improvements for bulk loading and vacuuming",
      ],
      improvements: [
        "Better performance for queries with many joins",
        "Improved VACUUM performance",
        "Enhanced monitoring capabilities",
        "Better logical replication performance",
      ],
    },
    {
      version: "15",
      releaseDate: "October 2022",
      status: "Stable",
      majorFeatures: [
        "MERGE command for conditional INSERT/UPDATE/DELETE",
        "Regular expressions with ICU library support",
        "New security and monitoring functions",
        "Improved performance for in-memory and disk-based sorting",
        "Enhanced logical replication with row and column filtering",
      ],
      improvements: [
        "Up to 70% performance improvement for sorts",
        "Better compression with LZ4 and Zstandard",
        "Improved connection scalability",
        "Enhanced security features",
      ],
    },
    {
      version: "14",
      releaseDate: "September 2021",
      status: "Stable",
      majorFeatures: [
        "Stored procedures with SQL-standard exception handling",
        "Multirange data types",
        "Query performance improvements for parallel queries",
        "Heavy write workload optimizations",
        "Enhanced monitoring with compute, I/O, and memory context information",
      ],
      improvements: [
        "B-tree index improvements reducing bloat",
        "Extended statistics to improve query planning",
        "Parallel query improvements",
        "JSON convenience features and performance",
      ],
    },
    {
      version: "13",
      releaseDate: "September 2020",
      status: "Stable",
      majorFeatures: [
        "Improved indexing and lookup performance",
        "Better space utilization and performance gains",
        "Parallel processing improvements",
        "Logical replication improvements",
        "More ways to monitor PostgreSQL activity",
      ],
      improvements: [
        "B-tree index deduplication",
        "Improved performance for queries with aggregates",
        "Parallel processing for VACUUM indexes",
        "Incremental sorting performance improvements",
      ],
    },
    {
      version: "12",
      releaseDate: "October 2019",
      status: "Stable",
      majorFeatures: [
        "Most significant improvement to the query execution engine since version 7.1",
        "SQL/JSON path expressions",
        "Generated columns",
        "Pluggable table storage interface",
        "Improvements to internationalization, authentication, and providing easier ways to work with PostgreSQL",
      ],
      improvements: [
        "Significant performance improvements for partitioned tables",
        "Improved performance for queries over larger result sets",
        "Better memory management for query execution",
        "Enhanced indexing performance",
      ],
    },
    {
      version: "11",
      releaseDate: "October 2018",
      status: "Legacy",
      majorFeatures: [
        "Improved partitioning functionality",
        "Parallelism enhancements",
        "Just-in-time (JIT) compilation for expressions",
        "Covering indexes (INCLUDE clause)",
        "Window functions enhancements",
      ],
      improvements: [
        "Hash partitioning support",
        "Parallel CREATE INDEX for B-tree indexes",
        "JIT compilation performance gains",
        "Improved query parallelism",
      ],
    },
  ]

  const filteredVersions = selectedVersion === "all" ? versions : versions.filter((v) => v.version === selectedVersion)

  const getStatusColor = (status) => {
    switch (status) {
      case "Latest":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20"
      case "Stable":
        return "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20"
      case "Legacy":
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20"
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">PostgreSQL Version Features</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Major features and improvements introduced in different PostgreSQL versions.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 py-2">Filter by version:</span>
          <button
            onClick={() => setSelectedVersion("all")}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedVersion === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            All
          </button>
          {versions.map((version) => (
            <button
              key={version.version}
              onClick={() => setSelectedVersion(version.version)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedVersion === version.version
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              v{version.version}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredVersions.map((version, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      PostgreSQL {version.version}
                    </h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{version.releaseDate}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(version.status)}`}>
                  {version.status}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    Major Features
                  </h3>
                  <ul className="space-y-2">
                    {version.majorFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <GitBranch className="h-5 w-5 text-green-500 mr-2" />
                    Performance Improvements
                  </h3>
                  <ul className="space-y-2">
                    {version.improvements.map((improvement, improvementIndex) => (
                      <li key={improvementIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">Version Support Information</h3>
        <ul className="space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>• PostgreSQL follows a yearly release cycle with a new major version each year</li>
          <li>• Each major version is supported for 5 years after its initial release</li>
          <li>• It's recommended to stay on supported versions for security updates</li>
          <li>• Plan upgrades well in advance of end-of-life dates</li>
          <li>• Test thoroughly before upgrading production systems</li>
          <li>• Consider using pg_upgrade for major version upgrades</li>
        </ul>
      </div>
    </div>
  )
}

export default VersionFeatures
