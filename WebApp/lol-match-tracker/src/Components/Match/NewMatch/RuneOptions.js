import {React, useState} from  'react'

import Rune from './Rune'

function rowClicked(event){
    for(var i = 0; i < event.currentTarget.children.length; i++){

        if(event.currentTarget.children[i].id == event.target.id){
            event.currentTarget.children[i].className = "rune selected";
        }
        else{
            event.currentTarget.children[i].className = "rune";
        }
    }
}

export default function RuneOptions(props){
    console.log("?")
    console.log("Currently Selected Category = " + props.category);

    const runes = {
        Precision:{
            keystones:[
                "Press The Attack",
                "Lethal Tempo",
                "Conqueror",
                "Fleet Footwork",
            ],
            firstRow:[
                "Overheal",
                "Triumph",
                "Presence of Mind"
            ],
            secondRow:[
                "Legend: Alacrity",
                "Legend: Tenacity",
                "Legend: Bloodline"
            ],
            thirdRow:[
                "Coup De Grace",
                "Cut Down",
                "Last Stand"
            ]
        },
        Domination:{
            keystones:[
                "Electrocute",
                "Predator",
                "Dark Harvest",
                "Hail of Blades"
            ],
            firstRow:[
                "Cheap Shot",
                "Taste of Blood",
                "Sudden Impact"
            ],
            secondRow:[
                "Zombie Ward",
                "Ghost Poro",
                "Eyeball Collection",
            ],
            thirdRow:[
                "Treasure Hunter",
                "Ingenious Hunter",
                "Relentless Hunter",
                "Ultimate Hunter"
            ]
        }
    }

    console.log(runes[props.category]);

    if(props.type == "primary"){

        var keystones = runes[props.category].keystones.map((index) => {
            return <Rune id={`keystone_${index}`} name={index}/>
        })

        var firstRow = runes[props.category].firstRow.map((index) => {
            return <Rune id={`primary_1_${index}`} name={index} />
        })

        var secondRow = runes[props.category].secondRow.map((index) => {
            return <Rune id={`primary_2_${index}`} name={index} />
        })

        var thirdRow = runes[props.category].thirdRow.map((index) => {
            return <Rune id={`primary_3_${index}`} name={index} />
        })

        return(
            <div>
                <div id="keystone-row" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {keystones}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {firstRow}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {secondRow}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {thirdRow}
                </div>
            </div> 
            
        )
    }
    
    if(props.type == "secondary"){

        var firstRow = runes[props.category].firstRow.map((index) => {
            return <Rune id={`secondary_1_${index}`} name={index} />
        })

        var secondRow = runes[props.category].secondRow.map((index) => {
            return <Rune id={`secondary_2_${index}`} name={index} />
        })

        var thirdRow = runes[props.category].thirdRow.map((index) => {
            return <Rune id={`secondary_3_${index}`} name={index} />
        })

        return(
            <div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {firstRow}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {secondRow}
                </div>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                    {thirdRow}
                </div>
            </div> 
        )
    }
}