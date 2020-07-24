import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
    <div className="main-header">
      <div className="container-title">
        <h2 className="title-header">
          Where in the world ?
      </h2>
      </div>
      <div className="container-mode">
        <i className="far fa-moon"></i>
        <a className="subtitle-header" href="ed.team"> Dark Mode </a>
      </div>
    </div>
  )
}

export default Header