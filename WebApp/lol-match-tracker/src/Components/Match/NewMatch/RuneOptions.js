import {React, useState} from  'react'

import Rune from './Rune'

import './Rune.css'

function rowClicked(event){

    //Iterate through the children of this row, and mark the div that was clicked on as "selected", and all others get unmarked as selected
    for(var i = 0; i < event.currentTarget.children.length; i++){

        //If the user clicks directly on the img element within the Rune, then we need to check for event.target.parentElement.id (the ID of the Rune DIV)
        if(event.currentTarget.children[i].id == event.target.id || event.currentTarget.children[i].id == event.target.parentElement.id){
            event.currentTarget.children[i].className = "rune selected";
        }
        else{
            event.currentTarget.children[i].className = "rune";
        }
    }
}

export default function RuneOptions(props){
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
                "Legend Alacrity",
                "Legend Tenacity",
                "Legend Bloodline"
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
                "Taste Of Blood",
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
        },
        Sorcery:{
            keystones:[
                "Summon Aery",
                "Arcane Comet",
                "Phase Rush",
            ],
            firstRow:[
                "Nullifying Orb",
                "Manaflow Band",
                "Nimbus Cloak",
            ],
            secondRow:[
                "Transcendence",
                "Celerity",
                "Absolute Focus",
            ],
            thirdRow:[
                "Scorch",
                "Waterwalking",
                "Gathering Storm",
            ]
        },
        Resolve:{
            keystones:[
                "Grasp of the Undying",
                "Aftershock",
                "Guardian",
            ],
            firstRow:[
                "Demolish",
                "Font of Life",
                "Shield Bash",
            ],
            secondRow:[
                "Conditioning",
                "Second Wind",
                "Bone Plating",
            ],
            thirdRow:[
                "Overgrowth",
                "Revitalize",
                "Unflinching",
            ]
        },
        Inspiration:{
            keystones:[
                "Glacial Augment",
                "Unsealed Spellbook",
                "First Strike",
            ],
            firstRow:[
                "Hextech Flashtraption",
                "Magical Footwear",
                "Perfect Timing",
            ],
            secondRow:[
                "Futures Market",
                "Minion Dematerializer",
                "Biscuit Delivery",
            ],
            thirdRow:[
                "Cosmic Insight",
                "Approach Velocity",
                "Time Warp Tonic",
            ]
        },
    }

    if(props.type == "primary"){

        var keystones = runes[props.category].keystones.map((index) => {
            return <Rune id={`keystone_${index}`} category={props.category} name={index} />
        })

        var firstRow = runes[props.category].firstRow.map((index) => {
            return <Rune id={`primary_1_${index}`} category={props.category} name={index} />
        })

        var secondRow = runes[props.category].secondRow.map((index) => {
            return <Rune id={`primary_2_${index}`} category={props.category} name={index} />
        })

        var thirdRow = runes[props.category].thirdRow.map((index) => {
            return <Rune id={`primary_3_${index}`} category={props.category} name={index} />
        })

        return(
            <div>
                <div id="keystone-row" className="rune-row" onClick={(event) => rowClicked(event)}>
                    {keystones}
                </div>
                <div className="rune-row" onClick={(event) => rowClicked(event)}>
                    {firstRow}
                </div>
                <div className="rune-row" onClick={(event) => rowClicked(event)}>
                    {secondRow}
                </div>
                <div className="rune-row" onClick={(event) => rowClicked(event)}>
                    {thirdRow}
                </div>
            </div> 
            
        )
    }
    
    if(props.type == "secondary"){

        var firstRow = runes[props.category].firstRow.map((index) => {
            return <Rune id={`secondary_1_${index}`} category={props.category} name={index} />
        })

        var secondRow = runes[props.category].secondRow.map((index) => {
            return <Rune id={`secondary_2_${index}`} category={props.category} name={index} />
        })

        var thirdRow = runes[props.category].thirdRow.map((index) => {
            return <Rune id={`secondary_3_${index}`} category={props.category} name={index} />
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