import {React, useState} from  'react'

import './Rune.css'

export default function Rune(props){

    console.log("Name: ", props)

        return(
            <div id={props.id} className="rune">
                {props.name}
            </div>  
        )

}