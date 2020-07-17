import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { GET_COUNTRIES_ALL, GET_REGION_COUNTRIES } from './actions'


const initialState = {
  countries: [],
  filteringRegionCountries: [],
  nameRegionFiltered: ''

}

const rootReducer = (state = initialState, action) => {
  console.log(action.data)
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

    default:
      return state
  }
}

export default createStore((rootReducer), composeWithDevTools(applyMiddleware(thunk)))