import React from 'react'
import "./header.scss"

const Header = () => {
  return (
    <div className="header-wrapper">
        <h2 className="header">dro<span className="health">health</span></h2>
        <div className="booklist"><h3>Booklist</h3></div>
    </div>
  )
}

export default Header