import React, {Component, useContext} from 'react';

import { AuthContext } from '../Auth/AuthenticationProvider';

import MenuPane from './Menu/MenuPane'
import DisplayPane from './DisplayPane'

import './MainContentPane.css';
import LandingPage from './LandingPage/LandingPage'

export default function MainContentPane(props){

    const {user, setUser} = useContext(AuthContext);

    if(!user){
        return(
            <LandingPage />
        )
    }else{
        return(
            <div className="App-content-main">
                <MenuPane />
                <DisplayPane loggedIn={props.loggedIn}/>
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