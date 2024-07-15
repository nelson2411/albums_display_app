import React from "react"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="text-black min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
