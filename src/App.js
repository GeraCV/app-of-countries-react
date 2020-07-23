import React from 'react'
import './styles/principal.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Principal from './components/principal'
import OnlyCountry from './components/onlyCountry'
import { Provider } from 'react-redux'
import store from './redux/store'
import { getCountriesAll } from './redux/actionCreator'


store.dispatch(getCountriesAll())

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route path="/:name" component={OnlyCountry} />
            <Route path="/" exact component={Principal} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}
export default App;
