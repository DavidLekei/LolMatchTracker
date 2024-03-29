import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { BrowserRouter as Router} from "react-router-dom";

import MainContentPane from './Components/MainContentPane'
import AuthenticationProvider from './Auth/AuthenticationProvider';
import SettingsProvider from './Components/Settings/SettingsProvider'

function App() {
  return (
    <div className="App">
      {/* <AppToolbar /> */}
        <Router>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AuthenticationProvider>
              <SettingsProvider>
                <MainContentPane loggedIn={false}/>
              </SettingsProvider>
            </AuthenticationProvider>
          </LocalizationProvider>
        </Router>
    </div>
  );
}

export default App;
