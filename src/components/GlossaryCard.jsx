"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

const GlossaryCard = ({ term, definition, examples, relatedTerms }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{term}</h3>
        {isExpanded ? (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        )}
      </div>

      <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">{definition}</p>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {examples && examples.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-3">
                {examples.map((example, index) => (
                  <code key={index} className="block text-sm text-gray-800 dark:text-gray-200 mb-1">
                    {example}
                  </code>
                ))}
              </div>
            </div>
          )}

          {relatedTerms && relatedTerms.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Related Terms:</h4>
              <div className="flex flex-wrap gap-2">
                {relatedTerms.map((related, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {related}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default GlossaryCard
