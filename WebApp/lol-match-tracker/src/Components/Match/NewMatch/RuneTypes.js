import {React} from  'react'

export default function RuneTypes(props){

    return(
        <div id={props.id} style={{display:"flex", flexDirection:"row", width:"100%", outline:"2px solid blue", alignItems:"center", justifyContent:"space-evenly" }} onClick={() => {
            console.log("test")
            props.onclick();
        }}>
            <img src={"/game/perk-images/Styles/7201_Precision.png"}></img>
            <img src={"/game/perk-images/Styles/7200_Domination.png"}></img>
            <img src={"/game/perk-images/Styles/7202_Sorcery.png"}></img>
            <img src={"/game/perk-images/Styles/7204_Resolve.png"}></img>
            <img src={"/game/perk-images/Styles/7203_Whimsy.png"}></img>
        </div>    
    )

}