import {React, useState, useEffect} from 'react'

import RuneTypes from './RuneTypes'
import RuneOptions from './RuneOptions'
import SecondaryRuneOptions from './SecondaryRuneOptions'
import ExtraRuneOptions from './ExtraRuneOptions'

//TODO: Fix errors that occur when the user mis-clicks on the "RuneTypes" images
//      IE: If the user clicks on whitespace, and not the actual image, the RuneTypes onclick function throws an error, which needs to be handled.


function markAllNotSelected(section){


    let options = document.getElementById(`rune-options-${section}`);

    if(options == null)
        return

    let rows = options.children

    for(var i = 0; i < rows.length; i++){

        let runes = rows[i].children;

        for(var j = 0; j < runes.length; j++){

            if(i == 0 && section != 'secondary')
                runes[j].className = "keystone"
            else    
                runes[j].className = "rune"
        }

    }
}

export default function RuneSelection(props){


    const [primaryCategory, changePrimary] = useState(null);
    const [secondaryCategory, changeSecondary] = useState(null);
    const [selectedSecondaries, updateSelectedSecondaries] = useState({
        rune1:null,
        rune2:null,
        lastUpdated:0
    })


    useEffect(() => {
        markAllNotSelected('primary')
        if(primaryCategory == secondaryCategory){
            changeSecondary(null)
        }
    }, [primaryCategory])

    useEffect(() => {
        markAllNotSelected('secondary')
    }, [secondaryCategory])


    return(
        <div>
            <div className="column">
                <h2>Runes</h2>
                <div className="rune-selection">
                    <div className="column primary-rune-section">
                        <RuneTypes id="primary-rune-types" onclick={(category) => {
                            changePrimary(category)
                    }}/>
                        <RuneOptions type="primary" category={primaryCategory}/>
                    </div>
                    <div className="column secondary-rune-section">
                        <RuneTypes id="secondary-rune-types" removeCategory={primaryCategory} onclick={(category) => {
                            console.log("Changing Secondary Category to: ", category)
                            changeSecondary(category)
                    }}/>
                        <SecondaryRuneOptions type="secondary" category={secondaryCategory} selectedRunes={selectedSecondaries} />
                        <ExtraRuneOptions />
                    </div>
                </div>
            </div>
        </div>
    )
}