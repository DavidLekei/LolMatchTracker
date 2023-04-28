import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import AppToolbar from './Toolbar/AppToolbar'
import MatchPane from './Match/MatchPane'
import MatchInfoFull from './Match/MatchInfoFull'
import NotesPane from './Notes/NotesPane'
import HomePane from './Home/HomePane'
import Canvas from '../Test/Canvas'
import Journey from '../Components/Journey/Journey'

import './MainContentPane.css';

class DisplayPane extends Component{
    render(){
        return(
            <div id="display-pane" className="display-pane">
                <AppToolbar />
                <Routes>
                    <Route exact path="/home" element={<HomePane />} />
                    <Route path= "/matches" element={<MatchPane />} />
                    <Route path="/matches/:matchid?" element={<MatchInfoFull />} />
                    <Route path="/matches/new" element={<Canvas />} />
                    <Route exact path="/notes" element={<NotesPane />}/>
                    <Route path="/account" />
                    <Route path="/about" />
                    <Route path="/canvas" element={<Canvas />} />
                    <Route path="/journey" element={<Journey />} />
                </Routes>
            </div>
        )
    }

    btn_onclick(){
        alert("Logged in");
    }
}

export default DisplayPane;