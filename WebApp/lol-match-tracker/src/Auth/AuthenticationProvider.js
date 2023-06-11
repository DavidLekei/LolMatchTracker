//TODO: Upon loading the component, check local storage if there exists a token
//      If token exists, send API request to check if it's still valid
//      If token is valid, set user to the current user, display App homepage
//      If token is NOT valid, remove from storage, display Sign In Page

import {React, Component, useContext, createContext, useState} from 'react'

const API_SERVER_URL = 'http://localhost:8080/auth/validateToken'

export const AuthContext = createContext({});

export async function validateToken(token){
    let response = await fetch(API_SERVER_URL);

    if(response.ok){
        let data = response.json()
        console.log('AuthenticationProvider - validateToken() - response.json(): ', data)

        if(data.isValid){
            return true
        }

    }else{
        console.log('AuthenticationProvider - validateToken() - ERROR - Request Failed')
    }

    return false
}

function checkLocalStorageForToken(){
    if(localStorage.getItem("token")){
        return true
    }

    return false
}

export async function authenticateUser(username, password){
    alert('Attempting to Authenticate: ' + username + ' / ' + password);

    // const token = await fetch('https://localhost:8000/auth/user').then(
    //     console.log()
    // )
}

export default function AutheticationProvider(props){

    const [user, setUser] = useState(
        // username:"TestUser1",
        // token:"dMcO0lm1AKnCvo11n52CC2nbk2512nan",
        // loginTime:"1/2/3 12:12:00",
        // validUntil:"1/3/3 12:12:00"
    )

    if(checkLocalStorageForToken()){
        console.log('Found Token in Local Storage: ', localStorage.getItem('token'))

        if(validateToken(localStorage.getItem('token'))){
            console.log('Token from Local Storage is still valid. Signing user in.')
        }else{
            console.log('Token from Local Storage is NOT valid. User must sign in again.')
        }
    }else{
        console.log('Token NOT FOUND in Local Storage')
    }
        
    return (
        <AuthContext.Provider value={{user,  setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}