import React, {useContext} from 'react';

import { AuthContext } from '../Auth/AuthenticationProvider';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Navigate,
    useNavigate
  } from "react-router-dom";

import MenuPane from './Menu/MenuPane'
import DisplayPane from './DisplayPane'

import './MainContentPane.css';
import LandingPageHero from './LandingPage/LandingPage'
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage'
import Splash from './splash/Splash'

export default function MainContentPane(props){

    const {user, setUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const publicRoutes = ["/", "/signUp", "/signIn"]

    if(!user){

        return(
            <Routes>
                <Route path="/" element={<LandingPageHero />} />
                <Route path="/signUp" element={<SignUpPage />}/>
                <Route path="/signIn" element={<SignInPage />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }else{
        return(
            <Splash fadeText="tracker.io">
                <div className="App-content-main">
                    <MenuPane />
                    <DisplayPane user={user}/>
                </div>
            </Splash>
        )
    }
}