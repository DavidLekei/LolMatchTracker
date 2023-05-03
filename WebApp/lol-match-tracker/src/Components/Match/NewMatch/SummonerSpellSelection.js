import {React, Component} from 'react'

export default function SummonerSpellSelection(props){

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
        return <img src={`/game/summoners/${index}.png`} className="summoner-spell"/>
    })

    return(
        <div className="ss-row">
            {summoners}
        </div>
    )
}