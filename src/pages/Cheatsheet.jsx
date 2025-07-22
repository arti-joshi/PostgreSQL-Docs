"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cheatsheetData } from "../constants/cheatsheetData"

const Cheatsheet = () => {
  const [copiedCommand, setCopiedCommand] = useState(null)

  const copyToClipboard = async (text, commandIndex) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCommand(commandIndex)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">PostgreSQL Cheatsheet</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Quick reference for common PostgreSQL commands and operations.
        </p>
      </div>

      <div className="space-y-8">
        {cheatsheetData.sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
          >
            <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
            </div>

            <div className="p-6">
              <div className="grid gap-6">
                {section.commands.map((cmd, cmdIndex) => {
                  const commandKey = `${sectionIndex}-${cmdIndex}`
                  return (
                    <div key={cmdIndex} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">{cmd.command}</h3>
                        <button
                          onClick={() => copyToClipboard(cmd.example, commandKey)}
                          className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {copiedCommand === commandKey ? (
                            <>
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-green-600">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-3">{cmd.description}</p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Syntax:</h4>
                        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-3">
                          <code className="text-sm text-gray-800 dark:text-gray-200">{cmd.syntax}</code>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Example:</h4>
                        <div className="bg-gray-800 dark:bg-gray-900 rounded-md p-3">
                          <code className="text-sm text-green-400">{cmd.example}</code>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cheatsheet
