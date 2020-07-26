import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/justCountry.css'
import { NavLink } from 'react-router-dom'


const OnlyCountry = ({ match }) => {
  const countries = useSelector(state => state.countries.filter(country => country.name.toLowerCase() === match.params.name.toLowerCase()))[0]
  const languages = countries.languages.map(la => la.name).join(', ')

  return (
    <div className="container-onlyCountry">
      <NavLink to="/" className="nav">
        <div className="container-btn">
          <i className="icon-flecha fas fa-hand-point-left"></i>
          <button className="btn-back" > Back </button>
        </div>
      </NavLink>
      <article className="co-country">
        <div className="co-image">
          <img className="image-country" src={countries.flag} alt={countries.name} />
        </div>
        <div className="main-container-information">
          <div className="first-container-information">
            <h2 className="name-country">
              {countries.name}
            </h2>
            <p className="data-c"><strong> Native Name :</strong> {countries.nativeName}</p>
            <p className="data-c"><strong> Population: </strong> {countries.population}</p>
            <p className="data-c"><strong> Region : </strong>{countries.region}</p>
            <p className="data-c"><strong> Sub Region :</strong> {countries.subregion}</p>
            <p className="data-c"><strong> Capital :</strong> {countries.capital}</p>
          </div>
          <div className="second-container-information">
            <p className="data-c"><strong> Top Level Domain :</strong> {countries.topLevelDomain}</p>
            <p className="data-c"><strong> Currencies :</strong> {countries.currencies[0].name}</p>
            <p className="data-c"><strong> Languages :</strong> {languages}</p>
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
        </div>
      </article>
    </div>
  )
}

export default OnlyCountry