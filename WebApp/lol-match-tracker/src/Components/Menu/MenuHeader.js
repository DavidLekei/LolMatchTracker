import React from 'react';

import './MenuPane.css';

//Material 
export default function MenuHeader(props){
        return(
            <div className="menu-header" onClick={() => {window.location.href="/home"}}>
                {props.image ? <img className="menu-header-logo" src={props.image} /> : <h1>{props.text}</h1>}
            </div>
        )
    }
