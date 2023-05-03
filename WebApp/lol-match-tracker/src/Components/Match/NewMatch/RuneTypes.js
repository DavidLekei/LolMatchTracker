import {React} from  'react'

import './Rune.css'

export default function RuneTypes(props){

    return(
        <div id={props.id} className="rune-row" onClick={(event) => {
            console.log("RuneTypes.js - event.target.id: " + event.target.id);
            if(event.target.id != 'primary-rune-types' && event.target.id != 'secondary-rune-types'){
                props.onclick(event.target.id);
            }

        }}>
            <img className="clickable" src={"/game/perk-images/Styles/7201_Precision.png"} id="Precision"></img>
            <img className="clickable" src={"/game/perk-images/Styles/7200_Domination.png"} id="Domination"></img>
            <img className="clickable" src={"/game/perk-images/Styles/7202_Sorcery.png"} id="Sorcery"></img>
            <img className="clickable" src={"/game/perk-images/Styles/7204_Resolve.png"} id="Resolve"></img>
            <img className="clickable" src={"/game/perk-images/Styles/7203_Whimsy.png"} id="Inspiration"></img>
        </div>    
    )

}