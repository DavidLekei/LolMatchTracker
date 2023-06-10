import React, {useContext} from 'react'

import Button from '@mui/material/Button/Button'
import TextField from '@mui/material/TextField/TextField'

import AuthButton from '../Common/AuthButton'
import { AuthContext } from '../../Auth/AuthenticationProvider'

import './common.css'
import './signinpage.css'

function authenticateUser(username, password){

}

function logInButtonPressed(authContext){
    //Encrypt password - do i have to do this manually if the site uses HTTPS?
    let username = document.getElementById('signin-textfield-username').value;
    let password = document.getElementById('signin-textfield-password').value;

    console.log('username: ' + username + ' password: ' + password + ' authContext: ', authContext)

    authContext.setUser({
        username: username,
        token: 'this is a valid token for testing',
        logInTime: '6/10/2023 11:35:00',
        validUntil: '6/11/2023 11:35:00'
    })
}

export default function SignInPage(props){

    const {user, setUser} = useContext(AuthContext);

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
                                logInButtonPressed({user, setUser});
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