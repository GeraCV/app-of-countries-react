import React from 'react'
import '../styles/feature.css'
import { useDispatch, useSelector } from 'react-redux'
import { GET_REGION_COUNTRIES } from '../redux/actions'


const getRegionCountries = nameRegion => {
  return {
    type: GET_REGION_COUNTRIES,
    data: { nameRegion }
  }
}

const Feature = () => {

  const nameRegionFiltered = useSelector((state) => state.nameRegionFiltered)
  const dispatch = useDispatch()

  const selectionRegion = e => {
    const nameRegion = e.target.value
    dispatch(getRegionCountries(nameRegion))
  }

  return (
    <select
      className="selectRegion"
      onChange={selectionRegion}
      value={nameRegionFiltered}
    >
      <option className="option" value=""> Filter by region </option>
      <option className="option" value="Africa"> Africa </option>
      <option className="option" value="Americas"> Americas </option>
      <option className="option" value="Asia"> Asia </option>
      <option className="option" value="Europe"> Europe </option>
      <option className="option" value="Oceania"> Oceania </option>
    </select>
  )
}

export default Feature