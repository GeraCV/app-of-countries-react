import React from 'react'
import BarSearch from './barSearch'
import Feature from './feature'
import CountryList from './country-list'
import '../styles/main.css'

const Principal = () => {
  return (
    <>
      <div className="main">
        <div className="container-searching">
          <BarSearch />
          <Feature />
        </div>
        <CountryList />
      </div>
    </>
  )
}

export default Principal