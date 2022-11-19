import React from 'react'
import { Link } from 'react-router-dom'
import "./header.scss"

const Header = () => {
  return (
    <div className="header-wrapper">
        <h2 className="header">dro<span className="health">health</span></h2>
        <Link to="/char">
        <h3 className="character">Characters</h3>
        </Link>
        <div className="booklist"><h3>Book Inventory</h3></div>
    </div>
  )
}

export default Header