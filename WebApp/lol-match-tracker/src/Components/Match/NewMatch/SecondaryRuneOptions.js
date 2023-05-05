import {React, useState, useEffect} from 'react'

import Rune from './Rune'

import './Rune.css'

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

function rowClicked(event, selectedRunes){

    //Iterate through the children of this row, and mark the div that was clicked on as "selected", and all others get unmarked as selected
    for(var i = 0; i < event.currentTarget.children.length; i++){

        //If the user clicks directly on the img element within the Rune, then we need to check for event.target.parentElement.id (the ID of the Rune DIV)
        if(event.currentTarget.children[i].id == event.target.id || event.currentTarget.children[i].id == event.target.parentElement.id){
            event.currentTarget.children[i].className = "selected";

            if(selectedRunes.rune1 == null){
                selectedRunes.rune1 = event.currentTarget.children[i].id
                selectedRunes.lastUpdated = 1
            }
            else if(selectedRunes.rune2 == null){
                selectedRunes.rune2 = event.currentTarget.children[i].id
                selectedRunes.lastUpdated = 2
            }
            else{
                if(selectedRunes.lastUpdated == 1)
                {
                    document.getElementById(selectedRunes.rune2).className = "not-selected"
                    selectedRunes.rune2 = event.currentTarget.children[i].id
                    selectedRunes.lastUpdated = 2
                }
                else if(selectedRunes.lastUpdated == 2){
                    document.getElementById(selectedRunes.rune1).className = "not-selected"
                    selectedRunes.rune1 = event.currentTarget.children[i].id
                    selectedRunes.lastUpdated = 1
                }
            }
        }
        else{
            event.currentTarget.children[i].className = "not-selected";
        }
    }
}

function markAllNotSelected(selectedRunes){
    let rows = document.getElementById(`rune-options-secondary`).children

    for(var i = 0; i < rows.length; i++){

        let runes = rows[i].children;

        for(var j = 0; j < runes.length; j++){
            if(runes[j].id != selectedRunes.rune1 && runes[j].id != selectedRunes.rune2){
                runes[j].className = "not-selected"
            }
        }

    }
}


export default function SecondaryRuneOptions(props){

    const [selectedRunes, updateSelectedRunes] = useState({
            rune1:null,
            rune2:null,
            lastUpdated:0
        }
    )

    if(props.category == null){
        return(
            <div className="empty-rune-options">

            </div>
        )
    }

    var firstRow = runes[props.category].firstRow.map((index) => {
        return <Rune id={`${index}`} category={props.category} name={index} />
    })

    var secondRow = runes[props.category].secondRow.map((index) => {
        return <Rune id={`${index}`} category={props.category} name={index} />
    })

    var thirdRow = runes[props.category].thirdRow.map((index) => {
        return <Rune id={`${index}`} category={props.category} name={index} />
    })

    const rows = [firstRow, secondRow, thirdRow]

    const options = rows.map((row) => {
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={
                (event) => {
                    rowClicked(event, selectedRunes)
                    if(selectedRunes.rune1 != null && selectedRunes.rune2 != null){
                        markAllNotSelected(selectedRunes)
                    }
                }
            }>
            {row}
            </div>
        )
    }) 

    return(
        <div id={`rune-options-${props.type}`}>
            {options}
        </div> 
    )
}