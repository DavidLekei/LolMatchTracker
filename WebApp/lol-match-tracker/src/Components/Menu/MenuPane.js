import React, {Component} from 'react';

import {Link} from "react-router-dom";

import MenuEntry from './MenuEntry'
import MenuHeader from './MenuHeader'
import MenuUserInfo from './MenuUserInfo'

import './MenuPane.css';

//Material 
class MenuPane extends Component{
    render(){
        return(
            <div className="App-content-menu">
                <MenuHeader text="LoL Match Tracker" />
                <MenuUserInfo image="user-example" name="David Lekei" title="Creator" />
                <div className="App-content-menu-list">
                    <Link to ="/home">
                        <div className="App-content-menu-link">
                            <MenuEntry icon="home" text="Home" />
                        </div>
                    </Link>
                    <Link to ="/matches">
                        <div className="App-content-menu-link">
                            <MenuEntry icon="matches" text="Matches" />
                        </div>
                    </Link>
                    <Link to ="/notes">
                        <div className="App-content-menu-link">
                            <MenuEntry icon="notes" text="Notes" />
                        </div>
                    </Link>
                    <Link to="/canvas">
                        <div className = "App-content-menu-link">
                            <MenuEntry icon="canvas" text="Canvas" />
                        </div>
                    </Link>
                    <Link to="/journey">
                        <div className= "App-content-menu-link">
                            <MenuEntry icon="journey" text="Journey"></MenuEntry>
                        </div>
                    </Link>
                    <Link to ="/notes">
                        <div className="App-content-menu-link">
                            <MenuEntry icon="settings" text="Settings" />
                        </div>
                    </Link>
                    <Link to ="/notes">
                        <div className="App-content-menu-link">
                            <MenuEntry icon="admin" text="Admin" />
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default MenuPane;