import React from "react"
import Navbar from "./Navbar"
import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
