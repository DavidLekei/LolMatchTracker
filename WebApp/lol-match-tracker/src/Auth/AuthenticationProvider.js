//TODO: Upon loading the component, check local storage if there exists a token
//      If token exists, send API request to check if it's still valid
//      If token is valid, set user to the current user, display App homepage
//      If token is NOT valid, remove from storage, display Sign In Page

import {React, Component, useContext, createContext, useState, useEffect} from 'react'

const API_SERVER_URL = 'http://localhost:8080/auth/authenticate'
const ONE_DAY_IN_UNIX_SECONDS = 86400000
const LOCAL_STORAGE_DATA = 'user_data'

export const AuthContext = createContext({});

export async function validateToken(data, setUser){

    if(Date.now() < data.expires){
        setUser(getUserDataFromLocalStorage())
        return true
    }

        console.log('Token has expired, fetching new one.')

        await fetch(API_SERVER_URL,
        {
          method: 'POST',
          headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: data.user_token 
        }).then((response) => {
            if(response.ok){
                response.json().then((data) => {
                    console.log('data returned from API: ', data);
                    setUser(data)
                })
            }
        })
}

export function checkLocalStorageForToken(){
    let data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA));

    if(!data){
        return false
    }

    if(!data.user_token){
        return false
    }

    return true
}

export function addUserDataToLocalStorage(user_data, token){
    console.log("Adding user_data to local storage. user_data: ", user_data)
    let data = {
        ...user_data,
        created: Date.now(),
        expires: Date.now() + ONE_DAY_IN_UNIX_SECONDS
    }
    localStorage.setItem(LOCAL_STORAGE_DATA, JSON.stringify(data))
}

function getUserDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA))
}

export async function authenticateUser(username, password, callback){

    const user = await fetch(`http://localhost:8080/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({username: username, password: password}),
    }).then((response) => {
        if(response.ok){
            console.log('user authenticated!')
            response.json().then((data) => {
                console.log('data returned: ', data)
                callback(data)
            })
        }
    })
}

export default function AutheticationProvider(props){

    const [isAuthenticated, setIsAuthenticated] = useState()
    const [token, setToken] = useState()
    const [user, setUser] = useState()


    if(!user){

        if(checkLocalStorageForToken()){

            validateToken(JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA)), setUser)

        }
        else{
            console.log('Token NOT FOUND in Local Storage')
        }  
    }
        
    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                setIsAuthenticated,
                token,
                setToken,
                user,
                setUser,
                authenticateUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}