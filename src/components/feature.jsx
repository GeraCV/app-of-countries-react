import React from 'react'
import '../styles/feature.css'

const Feature = () => {
  return (
    <select className="selectRegion" name="selectRegion" id="selectRegion">
      <option className="option" value="Africa"> Filter By Region </option>
      <option className="option" value="Africa"> Africa </option>
      <option className="option" value="America"> America </option>
      <option className="option" value="Asia"> Asia </option>
      <option className="option" value="Europe"> Europe </option>
      <option className="option" value="Oceania"> Oceania </option>
    </select>
  )
}

export default Feature