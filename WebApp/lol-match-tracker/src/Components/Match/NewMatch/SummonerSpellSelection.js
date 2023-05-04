import {React, useState, useEffect} from 'react'

export default function SummonerSpellSelection(props){

    const [summonersSelected, updateSummoners] = useState({
        unselect:"",
        spell1:"",
        spell2:"",
        lastUpdated:1,
    });

    useEffect(() => {

        console.log("summonersSelected = ", summonersSelected)

        let spell1 = document.getElementById(summonersSelected.spell1);
        let spell2 = document.getElementById(summonersSelected.spell2);
        let unselect = document.getElementById(summonersSelected.unselect);

        if(spell1 != null)
            spell1.className = "summoner-spell ss-selected"
        
        if(spell2 != null)
            spell2.className = "summoner-spell ss-selected"

        if(unselect != null)
            unselect.className = "summoner-spell ss-not-selected"
    })

    const summonerNames = [
        "Flash",
        "Ghost",
        "Teleport",
        "Ignite",
        "Barrier",
        "Exhaust",
        "Heal",
        "Smite",
        "Cleanse"
    ]

    let summoners = summonerNames.map((index) => {
        return( 
            <div>
                <img id={`${index}`} src={`/game/summoners/${index}.png`} className={`summoner-spell ss-not-selected`} onClick={(event) => {
                    if(summonersSelected.spell1 == event.target.id)
                    {
                        console.log("Clicked on: ", event.target.id)
                
                        updateSummoners({
                            ...summonersSelected,
                            unselect:event.target.id,
                            spell1: ''
                        })

                    }

                    else if(summonersSelected.spell2 == event.target.id)
                    {
                        console.log("Clicked on: ", event.target.id)
                
                        updateSummoners({
                            ...summonersSelected,
                            unselect:event.target.id,
                            spell2: ''
                        })

                    }

                    else if(summonersSelected.lastUpdated == 1){
                        updateSummoners({
                            ...summonersSelected,
                            unselect:summonersSelected.spell2,
                            spell2:index,
                            lastUpdated:2,
                        })
                    }
                    
                    else if(summonersSelected.lastUpdated == 2){
                        updateSummoners({
                            ...summonersSelected,
                            unselect:summonersSelected.spell1,
                            spell1:index,
                            lastUpdated:1,                            
                        })
                    }

                }}/>
            </div>
        )
    })

    return(
        <div className="ss-row">
            {summoners}
        </div>
    )
}