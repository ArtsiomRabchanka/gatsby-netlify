import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, children }) => {

  return (
    <div className="container">
      <Header/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
