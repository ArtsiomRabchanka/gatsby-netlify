import React from "react"
import { Link } from "gatsby"

const Header = () => {

  return (
    <header>
      <div className="container">
        <logo><Link to={'/'}>JAMBLOG</Link></logo>
        <nav>
          <Link to={'/contact'}>Контакты</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header