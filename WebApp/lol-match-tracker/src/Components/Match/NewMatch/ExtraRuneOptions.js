import {React, useEffect, useState} from 'react'

export default function ExtraRuneOptions(props){

    const extras = [
        [
            "Adaptive",
            "AttackSpeed",
            "AbilityHaste",
        ],
        [
            "Adaptive",
            "Armor",
            "MagicResist",
        ],
        [
            "Health",
            "Armor",
            "MagicResist"
        ]
    ]

    var extraRunes = extras.map((row) => {
        return (
            <div className="rune-row">
                <img src={`/game/perk-images/StatMods/${row[0]}.png`} />
                <img src={`/game/perk-images/StatMods/${row[1]}.png`} />
                <img src={`/game/perk-images/StatMods/${row[2]}.png`} />
            </div>
        )
    })

    return(
        <div className="container" style={{marginTop:"50px"}}>
            {extraRunes}
        </div>
    )
}