import React, {Component, useContext} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import './LandingPage.css'

import LandingPageHero from './LandingPageHero';
import SignInPage from '../SignInPage/SignInPage';
import AuthButton from '../Common/AuthButton';

import { AuthContext } from '../../Auth/AuthenticationProvider';

function LandingPage(props){

    const {user, setUser} = useContext(AuthContext)
    console.log('user: ', user)

    return(
            <div className="lp-main">
                <Routes>
                    <Route path="/" element={<LandingPageHero />} />
                    <Route path="/signUp" />
                    <Route path="/signIn" element={<SignInPage />}/>
                </Routes>
            </div>
    )

}

export default LandingPage;