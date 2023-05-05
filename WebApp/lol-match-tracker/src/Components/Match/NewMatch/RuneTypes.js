import {React} from  'react'

import './Rune.css'

export default function RuneTypes(props){

    const categories = [
        {
            name:"Precision",
            imgName: "7201_Precision"
        },
        {
            name:"Domination",
            imgName: "7200_Domination"
        },
        {
            name:"Sorcery",
            imgName: "7202_Sorcery"
        },
        {
            name:"Resolve",
            imgName: "7204_Resolve"
        },
        {
            name:"Inspiration",
            imgName: "7203_Whimsy"
        }
    ]

    let runeTypes = categories.map((category) => {
        if(category.name != props.removeCategory){
            return <img className="clickable" src={`/game/perk-images/Styles/${category.imgName}.png`} id={category.name}></img>
        }
    })

    return(
        <div id={props.id} className="rune-row rune-type-row" onClick={(event) => {
            if(event.target.id != 'primary-rune-types' && event.target.id != 'secondary-rune-types'){
                props.onclick(event.target.id);
            }

        }}>
            {runeTypes}
        </div>    
    )

}