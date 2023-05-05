import {React, useState, useEffect} from 'react'

import RuneTypes from './RuneTypes'
import RuneOptions from './RuneOptions'
import SecondaryRuneOptions from './SecondaryRuneOptions'
import ExtraRuneOptions from './ExtraRuneOptions'

//TODO: Fix errors that occur when the user mis-clicks on the "RuneTypes" images
//      IE: If the user clicks on whitespace, and not the actual image, the RuneTypes onclick function throws an error, which needs to be handled.

export default function RuneSelection(props){


    const [primaryCategory, changePrimary] = useState(null);
    const [secondaryCategory, changeSecondary] = useState(null);


    useEffect(() => {
        if(primaryCategory == secondaryCategory){
            changeSecondary(null)
        }
    })


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
                            changeSecondary(category)
                    }}/>
                        <SecondaryRuneOptions type="secondary" category={secondaryCategory} />
                        <ExtraRuneOptions />
                    </div>
                </div>
            </div>
        </div>
    )
}