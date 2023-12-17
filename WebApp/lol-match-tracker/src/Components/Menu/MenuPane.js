import React, {useContext} from 'react';

import {Link} from "react-router-dom";

import { AuthContext } from '../../Auth/AuthenticationProvider';

import MenuEntry from './MenuEntry'
import MenuHeader from './MenuHeader'
import MenuUserInfo from './MenuUserInfo'

import './MenuPane.css';

//Material 
export default function MenuPane(props){

        const {user, setUser} = useContext(AuthContext)

        return(
            <div className="App-content-menu">
                <MenuHeader image="logo.svg" />
                {/*<MenuUserInfo image="user-example" name={user.username} title={user.title?user.title : ''} />*/}
                <div className="App-content-menu-list">
                    <div className="App-content-menu-link">
                        <Link to ="/home">
                            <MenuEntry icon="home" text="Home" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to ="/matches">
                            <MenuEntry icon="matches" text="Matches" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to ="/notes">
                            <MenuEntry icon="notes" text="Notes" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to="/recordings">
                            <MenuEntry icon="video" text="Recordings" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to="/canvas">
                            <MenuEntry icon="canvas" text="Canvas" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to="/journey">
                            <MenuEntry icon="journey" text="Journey"></MenuEntry>
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to ="/settings">
                            <MenuEntry icon="settings" text="Settings" />
                        </Link>
                    </div>
                    <div className="App-content-menu-link">
                        <Link to ="/notes">
                            <MenuEntry icon="admin" text="Admin" />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }