import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Home.jsx"
import Memorial from "./Memorial.jsx"
import NotFound from "./NotFound.jsx"
import Sidebar from "./Sidebar"
import Header from "./Header"

export const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="h-full bg-white">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="lg:pl-72 h-full">
          <Header setSidebarOpen={setSidebarOpen} />
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/Memorial" element={<Memorial />} /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}
