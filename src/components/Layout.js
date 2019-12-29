import React from "react"
import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
