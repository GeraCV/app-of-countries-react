import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/justCountry.css'
import { NavLink } from 'react-router-dom'


const OnlyCountry = ({ match }) => {
  const countries = useSelector(state => state.countries.filter(country => country.name.toLowerCase() === match.params.name.toLowerCase()))[0]
  const languages = countries.languages.map(la => la.name).join(', ')

  return (
    <div className="container-justcountry">
      <NavLink to="/">
        <div className="container-btn">
          <button className="btn-back" > Back </button>
        </div>
      </NavLink>
      <article className="container-j-country">
        <div className="container-j-image">
          <img className="image-j" src={countries.flag} alt={countries.name} />
        </div>
        <div className="container-information-j">
          <h2 className="name-j">
            {countries.name}
          </h2>
          <p className="data-j"><strong> Native Name :</strong> {countries.nativeName}</p>
          <p className="data-j"><strong> Population: </strong> {countries.population}</p>
          <p className="data-j"><strong> Region : </strong>{countries.region}</p>
          <p className="data-j"><strong> Sub Region :</strong> {countries.subregion}</p>
          <p className="data-j"><strong> Capital :</strong> {countries.capital}</p>
        </div>
        <div className="container-information-two-j">
          <p className="data-j"><strong> Top Level Domain :</strong> {countries.topLevelDomain}</p>
          <p className="data-j"><strong> Currencies :</strong> {countries.currencies[0].name}</p>
          <p className="data-j"><strong> Languages :</strong> {languages}</p>
        </div>
        <div className="container-border-country">
          {
            countries.borders != ''
              ? <>
                <p className="text-b-country"> <strong> Border Countries: </strong> </p>
                <a href="www.yotube.com" className="b-c-b"> {countries.borders[0]} </a>
                <a href="www.yotube.com" className="b-c-b"> {countries.borders[1]} </a>
                <a href="www.yotube.com" className="b-c-b"> {countries.borders[2]} </a>
              </>
              : ''
          }
        </div>
      </article>
    </div>
  )
}

export default OnlyCountry