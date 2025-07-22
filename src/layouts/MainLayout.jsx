"use client"

import { useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term) {
      navigate(`/glossary?search=${encodeURIComponent(term)}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
      />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1">
          <div className="py-6">
            <div className="px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            <Outlet />
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
