import React from 'react';
import './styles/principal.css'
import Header from './components/header'
import BarSearch from './components/barSearch'
import Feature from './components/feature'
import CountryList from './components/country-list'
import { Provider } from 'react-redux';
import store from './redux/store'
import { getCountriesAll } from './redux/actionCreator';


store.dispatch(getCountriesAll())

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BarSearch />
        <Feature />
        <CountryList />
      </Provider>
    </>
  );
}
export default App;
