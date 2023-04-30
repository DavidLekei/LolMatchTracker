import {React} from  'react'

export default function RuneTypes(props){

    return(
        <div id={props.id} style={{display:"flex", flexDirection:"row", width:"100%", outline:"2px solid blue", alignItems:"center", justifyContent:"space-evenly" }} onClick={(event) => {
            props.onclick(event.target.id);
        }}>
            <img src={"/game/perk-images/Styles/7201_Precision.png"} id="Precision"></img>
            <img src={"/game/perk-images/Styles/7200_Domination.png"} id="Domination"></img>
            <img src={"/game/perk-images/Styles/7202_Sorcery.png"} id="Sorcery"></img>
            <img src={"/game/perk-images/Styles/7204_Resolve.png"} id="Resolve"></img>
            <img src={"/game/perk-images/Styles/7203_Whimsy.png"} id="Inspiration"></img>
        </div>    
    )

}