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

export default function MainContentPane(props){

    const {user, setUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const publicRoutes = ["/", "/signUp", "/signIn"]

    if(!user){

        return(
            <Routes>
                <Route path="/" element={<LandingPageHero />} />
                <Route path="/signUp" />
                <Route path="/signIn" element={<SignInPage />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        )
    }else{
        return(
            <div className="App-content-main">
                <MenuPane />
                <DisplayPane user={user}/>
            </div>
        )
    }
}

// class MainContentPane extends Component{

//     render(){

//         const {user, setUser} = useContext(AuthContext);

//         if(this.props.loggedIn == false)
//         {
//             return( 
//                 <LandingPage />
//             )
//         }

//         return(
//             <div className="App-content-main">
//                 <MenuPane />
//                 <DisplayPane loggedIn={this.props.loggedIn}/>
//             </div>
//         )
//     }
// }

// export default MainContentPane;