import React, { useState } from 'react'
import './styles/root.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Principal from './components/principal'
import OnlyCountry from './components/onlyCountry'
import { Provider } from 'react-redux'
import store from './redux/store'
import { getCountriesAll } from './redux/actionCreator'


store.dispatch(getCountriesAll())

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const dark = darkMode ? 'd-m' : 'l-m'
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} dark={dark} />
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
