import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import AppToolbar from './Toolbar/AppToolbar'
import MatchPane from './Match/MatchPane'
import NotesPane from './Notes/NotesPane'
import HomePane from './Home/HomePane'

import './MainContentPane.css';

class DisplayPane extends Component{
    render(){
        return(
            <div id="display-pane" className="display-pane">
                <AppToolbar />
                <Routes>
                    <Route exact path="/home" element={<HomePane />} />
                    <Route path= "/matches" element={<MatchPane />} />
                    <Route path="/matches/:matchid?" element={<MatchPane />} />
                    <Route exact path="/notes" element={<NotesPane />}/>
                    <Route path="/account" />
                    <Route path="/about" />
                </Routes>
            </div>
        )
    }

    btn_onclick(){
        alert("Logged in");
    }
}

export default DisplayPane;