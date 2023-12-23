import {useContext} from 'react';
import './toolbar.css';

import {Link} from "react-router-dom";

import {AuthContext} from '../../Auth/AuthenticationProvider'

import QuickActions from '../Home/QuickActions'

//Material components
import Button from '@mui/material/Button';

export default function AppToolbar(props){

    const auth = useContext(AuthContext)

    const usingAsATestButton = async () => {
        await fetch('http://localhost:8080/auth/verify', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:auth.user.user_token
            //JSON.stringify({token: auth.user.user_token}),
        }).then((response) => {
            console.log('recieved response! : ', response.status)
        })
    }

    const logOut = () => {
        auth.logout(() => {
            window.location.href="/"
        })
    }

    if(!auth.user)
    {
        return(
            <div className="App-toolbar">
                <div className="btn-container">
                    <Button variant="contained" component={Link} to="/signIn">Log In</Button>
                    <Button variant="contained" component={Link} to="/signUp">Sign Up</Button>
                </div>
            </div>
        )
    }
    return(
        <div className="App-toolbar" style={{}}>
            <div className="btn-container">
                <img src="/icons/user-example.png" />
                <h3>{auth.user.username}</h3>
                <Button onClick={logOut} variant="contained">Log Out</Button>
            </div>
            <QuickActions />
        </div>
    )
}

