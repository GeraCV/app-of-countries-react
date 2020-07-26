import React from 'react'
import '../styles/header.css'

const Header = ({ setDarkMode, darkMode, dark }) => {

  const body = document.getElementById('body')
  body.classList.add(`${dark}`)
  const changeColor = () => {
    setDarkMode(!darkMode)
    const bc = body.classList
    if (body.classList.contains('l-m')) {
      bc.remove('l-m'); bc.add('d-m')
    } else {
      bc.remove('d-m'); bc.add('l-m')
    }
  }

  return (
    <div className="main-header">
      <div className="container-title">
        <h2 className="title-header">
          Where in the world ?
      </h2>
      </div>
      <div className="container-mode"
        onClick={changeColor}
      >
        <i className="far fa-moon icon-moon"></i>
        <span className="subtitle-header" > Dark Mode </span>
      </div>
    </div>
  )
}

export default Header