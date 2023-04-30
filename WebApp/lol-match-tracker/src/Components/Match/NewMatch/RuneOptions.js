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
                "Future's Market",
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

        console.log(props.category)

        var keystones = runes[props.category].keystones.map((index) => {
            return <Rune id={`keystone_${index}`} category={props.category} name={index}/>
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