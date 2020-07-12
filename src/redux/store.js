import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_COUNTRIES_ALL } from './actions'

const initialState = {
  countries: []
}

const rootReducer = (state = initialState, action) => {
  if (action.type === GET_COUNTRIES_ALL) {
    return {
      ...state,
      countries: action.data
    }
  }
  return state
}

export default createStore(rootReducer, applyMiddleware(thunk))