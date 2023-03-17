import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

import MenuPane from './Menu/MenuPane'
import MatchPane from './Match/MatchPane'
import NotesPane from './Notes/NotesPane'
import HomePane from './Home/HomePane'
import DisplayPane from './DisplayPane'

import './MainContentPane.css';

class MainContentPane extends Component{
    render(){
        return(
            <div className="App-content-main">
            <Router>
                <MenuPane />
                <DisplayPane />
            </Router>
            </div>
        )
    }

    btn_onclick(){
        alert("Logged in");
    }
}

export default MainContentPane;