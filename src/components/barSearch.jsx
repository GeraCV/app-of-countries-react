import React from 'react'
import '../styles/barSearch.css'
import { useSelector, useDispatch } from 'react-redux'
import { GET_NAME_OF_COUNTRIES } from '../redux/actions'

const getNameCounty = name => {
  return {
    type: GET_NAME_OF_COUNTRIES,
    data: name
  }

}

const BarSearch = () => {

  const dispatch = useDispatch()

  const writingCountry = e => {
    const name = e.target.value
    console.log(name)
    dispatch(getNameCounty(name))
  }


  return (
    <input className="barsearch"
      type="text"
      placeholder="Search for a country..."
      onChange={writingCountry}
    />
  )
}

export default BarSearch