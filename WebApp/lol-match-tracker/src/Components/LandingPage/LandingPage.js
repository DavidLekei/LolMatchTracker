import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import './LandingPage.css'

import LandingPageHero from './LandingPageHero';
import SignInPage from '../SignInPage/SignInPage';

class LandingPage extends Component{

    render(){
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

}

export default LandingPage;