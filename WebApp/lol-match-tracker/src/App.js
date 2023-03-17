import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

import MainContentPane from './Components/MainContentPane'
import AppToolbar from './Components/Toolbar/AppToolbar'


function App() {
  return (
    <div className="App">
      {/* <AppToolbar /> */}
      <MainContentPane />
    </div>
  );
}

export default App;
