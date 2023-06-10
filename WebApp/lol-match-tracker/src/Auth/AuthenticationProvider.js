import {React, Component, useContext, createContext, useState} from 'react'

export const AuthContext = createContext({});

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

        
    return (
        <AuthContext.Provider value={{user,  setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}