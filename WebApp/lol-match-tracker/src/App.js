import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

import MainContentPane from './Components/MainContentPane'

function App() {
  return (
    <div className="App">
      {/* <AppToolbar /> */}
      <MainContentPane loggedIn={true}/>
    </div>
  );
}

export default App;
