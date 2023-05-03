import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import MainContentPane from './Components/MainContentPane'

function App() {
  return (
    <div className="App">
      {/* <AppToolbar /> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MainContentPane loggedIn={true}/>
      </LocalizationProvider>
    </div>
  );
}

export default App;
