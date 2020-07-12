import React from 'react'
import Country from './country'
import '../styles/countryList.css'
import { connect } from 'react-redux'


const CountryList = ({ countries }) => {


  return (
    <div className="countryList">
      {
        countries.map(({ name, flag, region, population, capital }) => {
          return (
            <Country
              key={name}
              flag={flag}
              name={name}
              population={population}
              region={region}
              capital={capital}
            />)
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CountryList)