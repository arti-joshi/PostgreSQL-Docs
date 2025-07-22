"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import SearchBar from "../components/SearchBar"
import GlossaryCard from "../components/GlossaryCard"
import { glossaryData } from "../constants/glossaryData"
import { searchGlossary } from "../utils/searchGlossary"

const Glossary = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")

  useEffect(() => {
    if (searchTerm) {
      setSearchParams({ search: searchTerm })
    } else {
      setSearchParams({})
    }
  }, [searchTerm, setSearchParams])

  const filteredGlossary = useMemo(() => {
    if (!searchTerm.trim()) return glossaryData
    return searchGlossary(glossaryData, searchTerm)
  }, [searchTerm])

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">PostgreSQL Glossary</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive definitions of PostgreSQL terms, concepts, and terminology.
        </p>
      </div>

      {/* Search Section */}
      <div className="sticky top-0 py-3 bg-gray-50 dark:bg-gray-900 z-10">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
          placeholder="Search glossary terms..." 
        />
      </div>

      {/* Glossary Terms */}
      <div className="space-y-3">
        {filteredGlossary.length > 0 ? (
          filteredGlossary.map((item, index) => (
            <GlossaryCard
              key={index}
              term={item.term}
              definition={item.definition}
              examples={item.examples}
              relatedTerms={item.relatedTerms}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No glossary terms found matching "{searchTerm}"</p>
          </div>
        )}
      </div>

      {/* Results Count */}
      {filteredGlossary.length > 0 && (
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Showing {filteredGlossary.length} of {glossaryData.length} terms
        </div>
      )}
    </div>
  )
}

export default Glossary
