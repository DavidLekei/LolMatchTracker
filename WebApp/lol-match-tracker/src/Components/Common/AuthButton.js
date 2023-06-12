import React, { Component, useContext } from 'react'

import {AuthContext} from '../../Auth/AuthenticationProvider'

import Button from '@mui/material/Button/Button'

async function authenticateUser(authContext){
    console.log("AuthButton.js - authenticateUser() - authContext = ", authContext);

    if(authContext == null){
        authContext.setUser({
            username:"TestUser1",
            token:"TOKEN",
            loginTime:"1/2/3 12:12:00",
            validUntil:"1/3/3 12:12:00"
        })
    }

    //Send authContext.token to Auth server

    //if token valid, return true
    return true;
}

export default function AuthButton(props){
     const {user, setUser} = useContext(AuthContext)

    return(
        <Button 
            variant="contained" 
            color="success"    
            className="w-100"
            onClick={() => {
                if(user == null){
                    console.log("User is not logged in")
                }else{
                    console.log("User: ", user)
                }
            }}
        >
            {props.text}
        </Button>
    )
}
