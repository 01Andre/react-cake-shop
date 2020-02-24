import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    //On envoie le store créé dans store.js comme prop au Provider
    <Provider store= {store}>
    <div className="App">
      <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
