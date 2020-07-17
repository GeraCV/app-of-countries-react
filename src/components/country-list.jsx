import React from 'react'
import Country from './country'
import '../styles/countryList.css'
import { useSelector } from 'react-redux'


const CountryList = () => {

  const countryList = useSelector(state => {
    if ('' !== state.nameRegionFiltered) {
      return state.filteringRegionCountries
    }
    if (state.filteringNameCountry.length > 0) {
      return state.filteringNameCountry
    }

    return state.countries
  })

  return (
    <div className="countryList">
      {
        countryList.map(({ name, flag, region, population, capital }) => {
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


export default CountryList