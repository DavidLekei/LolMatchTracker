import {React, useState} from  'react'

import './Rune.css'

export default function Rune(props){

        let name = props.name.replaceAll(" ", "");

        return(
            <div id={props.id} className="rune">
                <img className="rune-image" src={`/game/perk-images/Styles/${props.category}/${name}/${name}.png`} id={`${name}_img`}></img>
            </div>  
        )
}