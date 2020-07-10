import React from "react"
import { Link } from "gatsby"

const Header = () => {

  return (
    <div>
      <logo>LOGO</logo>
      <nav>
        <Link to={'/contact'}>Контакты</Link>
      </nav>
    </div>
  )
}

export default Header