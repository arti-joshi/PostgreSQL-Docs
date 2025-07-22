"use client"
import { useTheme } from "../contexts/ThemeContext"
import { Menu, Sun, Moon, Database } from "lucide-react"
import SearchBar from "./SearchBar"

const Navbar = ({ onMenuClick, searchTerm, onSearchChange }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section with logos and menu */}
          <div className="flex items-center">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Company Logo */}
            <img
              src="/company-logo.svg"
              alt="IntelliDB Enterprise"
              className="h-12 w-12 ml-2 lg:ml-0"
            />

            {/* Divider */}
            <div className="h-9 w-px bg-gray-300 dark:bg-gray-600 mx-4" />

            {/* PostgreSQL Logo and Text */}
            <div className="flex items-center">
              <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
                PostgreSQL Docs
              </h1>
            </div>
          </div>

          {/* Center section with search */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={onSearchChange} 
              placeholder="Search documentation..."
            />
          </div>

          {/* Right section with theme toggle */}
          <div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={onSearchChange} 
            placeholder="Search documentation..."
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
