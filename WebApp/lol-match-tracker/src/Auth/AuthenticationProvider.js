//TODO: Upon loading the component, check local storage if there exists a token
//      If token exists, send API request to check if it's still valid
//      If token is valid, set user to the current user, display App homepage
//      If token is NOT valid, remove from storage, display Sign In Page

import {React, Component, useContext, createContext, useState} from 'react'

const API_SERVER_URL = 'http://localhost:8080/auth/validateToken'
const ONE_DAY_IN_UNIX_SECONDS = 86400
const LOCAL_STORAGE_DATA = 'user_data'

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

export function checkLocalStorageForToken(){
    let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA));

    if(!data){
        return false
    }

    if(!data.user_token){
        return false
    }

    if(Date.now() < data.expires){
        return false
    }

    return true
}

export function addUserDataToLocalStorage(username, token){
    let data = {
        username: username,
        user_token: token,
        created: Date.now(),
        expires: Date.now() + ONE_DAY_IN_UNIX_SECONDS
    }
    localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(data))
}

function getUserDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA))
}

export async function authenticateUser(username, password){
    alert('Attempting to Authenticate: ' + username + ' / ' + password);

    // const token = await fetch('https://localhost:8000/auth/user').then(
    //     console.log()
    // )
}

export default function AutheticationProvider(props){

    const [user, setUser] = useState()

    if(!user){
        if(checkLocalStorageForToken()){
            console.log('Found Token in Local Storage: ', localStorage.getItem('user_token'))

            if(validateToken(localStorage.getItem('user_token'))){
                console.log('Token from Local Storage is still valid. Signing user in.')
                setUser(getUserDataFromLocalStorage())
            }else{
                console.log('Token from Local Storage is NOT valid. User must sign in again.')
            }
        }else{
            console.log('Token NOT FOUND in Local Storage')
        }
    }
        
    return (
        <AuthContext.Provider value={{user,  setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}