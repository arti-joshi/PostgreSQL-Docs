"use client"

import { useState, useMemo } from "react"
import SearchBar from "../components/SearchBar"
import CatalogTable from "../components/CatalogTable"
import { systemCatalogTables } from "../constants/systemCatalogTables"

const SystemCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTables = useMemo(() => {
    if (!searchTerm.trim()) return systemCatalogTables

    return systemCatalogTables.filter(
      (table) =>
        table.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        table.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        table.columns.some(
          (column) =>
            column.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            column.description.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )
  }, [searchTerm])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">System Catalog Tables</h1>
        <p className="text-gray-600 dark:text-gray-400">
          PostgreSQL system catalog tables contain metadata about the database structure, including information about
          tables, columns, indexes, and constraints.
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        placeholder="Search catalog tables, columns, or descriptions..."
      />

      <div className="space-y-4">
        {filteredTables.length > 0 ? (
          filteredTables.map((table, index) => <CatalogTable key={index} table={table} />)
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No catalog tables found matching "{searchTerm}"</p>
          </div>
        )}
      </div>

      {filteredTables.length > 0 && (
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredTables.length} of {systemCatalogTables.length} catalog tables
        </div>
      )}
    </div>
  )
}

export default SystemCatalog
