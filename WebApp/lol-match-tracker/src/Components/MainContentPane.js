import React, {Component} from 'react';

import {
    BrowserRouter as Router,
  } from "react-router-dom";

import MenuPane from './Menu/MenuPane'
import DisplayPane from './DisplayPane'

import './MainContentPane.css';
import LandingPage from './LandingPage/LandingPage'

class MainContentPane extends Component{
    render(){

        if(this.props.loggedIn == false)
        {
            return( 
                <LandingPage />
            )
        }

        return(
            <div className="App-content-main">
            <Router>
                <MenuPane />
                <DisplayPane loggedIn={this.props.loggedIn}/>
            </Router>
            </div>
        )
    }

    btn_onclick(){
        alert("Logged in");
    }
}

export default MainContentPane;