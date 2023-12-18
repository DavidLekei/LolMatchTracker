import {useContext} from 'react';
import './toolbar.css';

import {Link} from "react-router-dom";

import {AuthContext} from '../../Auth/AuthenticationProvider'

import QuickActions from '../Home/QuickActions'

//Material components
import Button from '@mui/material/Button';

export default function AppToolbar(props){

    const auth = useContext(AuthContext)

    if(!auth.user)
    {
        return(
            <div className="App-toolbar">
                <div className="btn-container">
                    <Button variant="contained" component={Link} to="/signIn">Log In</Button>
                    <Button variant="contained">Sign Up</Button>
                </div>
            </div>
        )
    }
    return(
        <div className="App-toolbar" style={{}}>
            <QuickActions />
            <div className="btn-container">
                <img src="/icons/user-example.png" />
                <h3>{auth.user.username}</h3>
                <Button variant="contained">Log Out</Button>
            </div>
        </div>
    )
}

