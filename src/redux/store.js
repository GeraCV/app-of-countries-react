import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { GET_COUNTRIES_ALL, GET_REGION_COUNTRIES, GET_NAME_OF_COUNTRIES } from './actions'


const initialState = {
  countries: [],
  filteringRegionCountries: [],
  nameRegionFiltered: '',
  filteringNameCountry: []

}

const rootReducer = (state = initialState, action) => {
  // console.log(action.data)
  switch (action.type) {
    case GET_COUNTRIES_ALL: {
      return {
        ...state,
        countries: action.data
      }
    }
    case GET_REGION_COUNTRIES: {

      const { nameRegion } = action.data
      if ('' === nameRegion) {
        return { ...state, filteringRegionCountries: [], nameRegionFiltered: '' }
      }
      const filteringRegionCountries =
        state.countries.filter(country => country.region === nameRegion)
      return { ...state, filteringRegionCountries, nameRegionFiltered: nameRegion }
    }

    case GET_NAME_OF_COUNTRIES: {
      // console.log(action.data)
      const name = action.data
      if ('' === name) {
        return { ...state, filteringNameCountry: [] }
      }
      const filteringNameCountry = state.countries.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
      return { ...state, filteringNameCountry }

    }

    default:
      return state
  }
}

export default createStore((rootReducer), composeWithDevTools(applyMiddleware(thunk)))