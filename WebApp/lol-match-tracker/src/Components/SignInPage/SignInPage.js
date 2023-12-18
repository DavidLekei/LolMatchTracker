import React, {useContext, useState} from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button/Button'
import TextField from '@mui/material/TextField/TextField'

import AuthButton from '../Common/AuthButton'
import { AuthContext, addUserDataToLocalStorage } from '../../Auth/AuthenticationProvider'

import './common.css'
import './signinpage.css'

function logInButtonPressed(authContext, loadingState, callback){
    //Encrypt password - do i have to do this manually if the site uses HTTPS?
    let username = document.getElementById('signin-textfield-username').value;
    let password = document.getElementById('signin-textfield-password').value;

    console.log('username: ' + username + ' password: ' + password + ' authContext: ', authContext)

    //TODO: Need to send Auth server API request here
    //      Auth server would be the one returning the token
    let data = {
        username: username,
        user_token: 'user_token',
        title: 'Creator'
    }

    //3 second delay to 'simulate' network
    setTimeout(() => {
        console.log("Timed out")
        loadingState.setLoading(false)
        authContext.setUser(data)
        addUserDataToLocalStorage(data, 'user_token')
        console.log("Set Local Storage for key 'token': ", data.token);
        //TODO: Navigate to /home should only be called if the log in was successful.
        //      I think this means that the logInButtonPressed function will need to be made to be async
        //      and I'll need to implement some kind of hook upon response from the auth server
        callback('/home')
    }, 3000)

}

export default function SignInPage(props){

    const {user, setUser} = useContext(AuthContext);

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    if(loading){
        return (
            <div style={{width:'100%', height:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundImage: 'linear-gradient(to right top, #3dd9f5, #10ccf9, #00befa, #14affa, #3d9ff5)'}}>
                <h1>tracker.io</h1>
            </div>
        )
    }

    if(user){
        return <Navigate to="/" />
    }

    return(
        <div className="h-fullscreen w-fullscreen flex-cntnr-col flex-center-children">
            <div className="h-100 content flex-cntnr-col flex-center-children">
                <div className="w-100 flex-cntnr-row flex-center-children signin-header">
                    <h2>Sign in to LoL Match Tracker</h2>
                </div>
                <form id="sign-in-dialog" className="flex-cntnr-col border-soft border-rounded">
                        <div className="w-100 flex-cntnr-row signin-dialog-margin font-bold font-small">
                            Username or email address
                        </div>
                        <div className="w-100 flex-cntnr-row signin-dialog-margin">
                            <TextField
                                id="signin-textfield-username"
                                className="w-100 signin-dialog-textfield"
                                variant="outlined"
                                size="small"
                            />
                        </div>
                        <div className="w-100 flex-cntnr-row signin-dialog-margin space-apart font-bold font-small">
                            <span>Password</span>
                            <span>Forgot password?</span>
                        </div>
                        <div className="w-100 flex-cntnr-row signin-dialog-margin">
                            <TextField
                                id="signin-textfield-password"
                                className="w-100 signin-dialog-textfield"
                                variant="outlined"
                                size="small"
                                type="password"
                            />
                        </div>
                        <div className="w-100 flex-cntnr-row signin-dialong-margin">
                        <Button 
                            variant="contained" 
                            color="success"    
                            className="w-100"
                            onClick={() => {
                                setLoading(true)
                                logInButtonPressed({user, setUser}, {loading, setLoading}, navigate);
                            }}
                        >
                            Log in
                        </Button>
                        </div>
                </form>
                <div className="w-100 flex-cntnr-row flex-center-children space-evenly signin-footer">
                    <span>About</span>
                    <span>Contact</span>
                    <span>Security</span>
                    <span>Help</span>
                </div>
            </div>
        </div>
    )
}