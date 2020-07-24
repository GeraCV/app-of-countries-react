import React from 'react'
import '../styles/barSearch.css'
import { useDispatch } from 'react-redux'
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
    // console.log(name)
    dispatch(getNameCounty(name))
  }


  return (
    <div className="container-bar-search">
      <i className=" icon-search fas fa-search"></i>
      <input className="inpt-search"
        type="text"
        placeholder="Search for a country..."
        onChange={writingCountry}
      />
    </div>
  )
}

export default BarSearch