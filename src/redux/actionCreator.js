const { GET_COUNTRIES_ALL } = require("./actions");

const getCountriesAll = () => async dispatch => {
  const answear = await fetch('https://restcountries.eu/rest/v2/all')
  const response = await answear.json()
  return dispatch({
    type: GET_COUNTRIES_ALL,
    data: response
  })
}

export { getCountriesAll }