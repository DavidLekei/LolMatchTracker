import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import AppToolbar from './Toolbar/AppToolbar'
import MatchPane from './Match/MatchPane'
import MatchInfoFull from './Match/MatchInfoFull'
import Note from './Notes/Note'
import NotesPane from './Notes/NotesPane'
import Recordings from './Recording/Recordings'
import RecordingPlayer from './Recording/RecordingPlayer'
import Settings from './Settings/Settings'
import HomePane from './Home/HomePane'
import Canvas from '../Test/Canvas'
import Journey from '../Components/Journey/Journey'
import CreateMatchPage from '../Components/Match/NewMatch/CreateMatchPage'
import SignInPage from './SignInPage/SignInPage';

import './MainContentPane.css';
import AccountSettings from './Account/AccountSettings';
import ChangePassword from './Account/ChangePassword';

class DisplayPane extends Component{

    constructor(props)
    {
        super(props);

        this.state = {
            user:this.props.user
        }
    }

    render(){
        console.log("Logged in as: ", this.state.user);

        let toolbar = <span></span>

        if(!this.state.user){
            toolbar = <AppToolbar />
        }

        return(
            <div id="display-pane" className="display-pane">
                {toolbar}
                 <AppToolbar /> 
                <Routes>
                    <Route path="/" element={<HomePane />} />
                    <Route exact path="/home" element={<HomePane />} />
                    <Route path= "/matches" element={<MatchPane />} />
                    <Route path="/matches/:matchid?" element={<MatchInfoFull />} />
                    <Route path="/matches/new" element={<CreateMatchPage />} />
                    <Route exact path="/notes" element={<NotesPane />}/>
                    <Route path="/notes/new" element={<Note />} />
                    <Route path="/notes/:noteId?" element={<Note />} />
                    <Route path="/recordings" element={<Recordings />} />
                    <Route path="/recordings/:videoId" element={<RecordingPlayer />} />
                    <Route path="/account" element={<AccountSettings />} />
                    <Route path="/account/changepassword" element={<ChangePassword /> } />
                    <Route path="/settings" element={<Settings />} />
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