import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ location, title, children }) => {

  return (
    <div>
      <Header/>
      <main className="container">{children}</main>
    </div>
  )
}

export default Layout
