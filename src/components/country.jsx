import React from 'react'
import '../styles/country.css'

const Country = ({ flag, name, population, region, capital }) => {
  return (
    <article className="container-country">
      <div className="container-image">
        <img className="image" src={flag} alt={name} />
        <div className="container-information">
          <h2 className="name">
            {name}
          </h2>
          <p className="data"><strong> Population :</strong> {population}</p>
          <p className="data"><strong> Region: </strong> {region}</p>
          <p className="data"><strong> Capital: </strong>{capital}</p>
        </div>
      </div>
    </article>
  )
}

export default Country