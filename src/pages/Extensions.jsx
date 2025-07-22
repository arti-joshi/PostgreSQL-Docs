"use client"

import { useState } from "react"
import { Puzzle, Star } from "lucide-react"

const Extensions = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const extensions = [
    {
      name: "pg_stat_statements",
      category: "Performance",
      description: "Tracks execution statistics of all SQL statements executed by a server.",
      popularity: "High",
      installation: "CREATE EXTENSION pg_stat_statements;",
      usage: "SELECT query, calls, total_time, mean_time FROM pg_stat_statements ORDER BY mean_time DESC LIMIT 10;",
      benefits: ["Query performance monitoring", "Identify slow queries", "Track query frequency"],
    },
    {
      name: "PostGIS",
      category: "Spatial",
      description: "Spatial and geographic objects for PostgreSQL, enabling location queries.",
      popularity: "High",
      installation: "CREATE EXTENSION postgis;",
      usage: "SELECT ST_Distance(geom1, geom2) FROM spatial_table;",
      benefits: ["Geographic data types", "Spatial indexing", "Location-based queries"],
    },
    {
      name: "uuid-ossp",
      category: "Data Types",
      description: "Functions to generate universally unique identifiers (UUIDs).",
      popularity: "High",
      installation: 'CREATE EXTENSION "uuid-ossp";',
      usage: "SELECT uuid_generate_v4();",
      benefits: ["UUID generation", "Primary key alternatives", "Distributed systems support"],
    },
    {
      name: "hstore",
      category: "Data Types",
      description: "Key-value pair storage within a single PostgreSQL value.",
      popularity: "Medium",
      installation: "CREATE EXTENSION hstore;",
      usage: "SELECT data->'key' FROM table_with_hstore WHERE data ? 'key';",
      benefits: ["Flexible schema", "Key-value storage", "NoSQL-like features"],
    },
    {
      name: "pg_trgm",
      category: "Text Search",
      description: "Trigram matching for fast similarity searches and fuzzy string matching.",
      popularity: "Medium",
      installation: "CREATE EXTENSION pg_trgm;",
      usage: "SELECT * FROM table WHERE column % 'search_term';",
      benefits: ["Fuzzy text search", "Similarity matching", "Fast text indexing"],
    },
    {
      name: "pgcrypto",
      category: "Security",
      description: "Cryptographic functions for PostgreSQL including hashing and encryption.",
      popularity: "Medium",
      installation: "CREATE EXTENSION pgcrypto;",
      usage: "SELECT crypt('password', gen_salt('bf'));",
      benefits: ["Password hashing", "Data encryption", "Cryptographic functions"],
    },
    {
      name: "pg_partman",
      category: "Partitioning",
      description: "Extension to help manage partitioned tables and automate partition maintenance.",
      popularity: "Medium",
      installation: "CREATE EXTENSION pg_partman;",
      usage: "SELECT partman.create_parent('public.sales', 'sale_date', 'range', 'monthly');",
      benefits: ["Automated partitioning", "Partition maintenance", "Performance optimization"],
    },
    {
      name: "timescaledb",
      category: "Time Series",
      description: "Time-series database built on PostgreSQL for IoT and monitoring data.",
      popularity: "High",
      installation: "CREATE EXTENSION timescaledb;",
      usage: "SELECT create_hypertable('metrics', 'time');",
      benefits: ["Time-series optimization", "Automatic partitioning", "Compression"],
    },
    {
      name: "pg_repack",
      category: "Maintenance",
      description: "Online table reorganization without locks for removing bloat.",
      popularity: "Medium",
      installation: "-- Install via package manager, then: CREATE EXTENSION pg_repack;",
      usage: "pg_repack -d database_name -t table_name",
      benefits: ["Online table reorganization", "Bloat removal", "No downtime maintenance"],
    },
    {
      name: "plpgsql",
      category: "Languages",
      description: "Procedural language for PostgreSQL (installed by default).",
      popularity: "High",
      installation: "-- Usually pre-installed",
      usage: "CREATE FUNCTION my_function() RETURNS INTEGER AS $$ BEGIN RETURN 42; END; $$ LANGUAGE plpgsql;",
      benefits: ["Stored procedures", "Complex logic", "Performance optimization"],
    },
  ]

  const categories = ["all", ...new Set(extensions.map((ext) => ext.category))]

  const filteredExtensions =
    selectedCategory === "all" ? extensions : extensions.filter((ext) => ext.category === selectedCategory)

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case "High":
        return "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20"
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20"
      case "Low":
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20"
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20"
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">PostgreSQL Extensions</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Extend PostgreSQL functionality with these popular extensions for various use cases.
        </p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 py-2">Filter by category:</span>
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
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredExtensions.map((extension, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Puzzle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{extension.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{extension.category}</span>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(extension.popularity)}`}
              >
                {extension.popularity}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">{extension.description}</p>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Installation:</h4>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
                  <code className="text-sm text-gray-800 dark:text-gray-200">{extension.installation}</code>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Usage Example:</h4>
                <div className="bg-gray-800 dark:bg-gray-900 rounded-md p-3">
                  <code className="text-sm text-green-400">{extension.usage}</code>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {extension.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Extension Management Tips</h3>
        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
          <li>
            • Use{" "}
            <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">SELECT * FROM pg_available_extensions;</code> to
            see available extensions
          </li>
          <li>
            • Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">SELECT * FROM pg_extension;</code> to see
            installed extensions
          </li>
          <li>• Extensions are installed per database, not server-wide</li>
          <li>• Some extensions require superuser privileges to install</li>
          <li>• Always test extensions in development before production deployment</li>
          <li>• Keep extensions updated with PostgreSQL version upgrades</li>
        </ul>
      </div>
    </div>
  )
}

export default Extensions
