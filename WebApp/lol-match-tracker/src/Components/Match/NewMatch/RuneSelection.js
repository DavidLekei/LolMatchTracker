import {React, useState, useEffect} from 'react'

import RuneTypes from './RuneTypes'
import RuneOptions from './RuneOptions'

//TODO: Fix errors that occur when the user mis-clicks on the "RuneTypes" images
//      IE: If the user clicks on whitespace, and not the actual image, the RuneTypes onclick function throws an error, which needs to be handled.

export default function RuneSelection(props){


    const [primaryCategory, changePrimary] = useState("Precision");
    const [secondaryCategory, changeSecondary] = useState("Domination");


    useEffect(() => {
        console.log("useEffect() called")
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
                        <RuneOptions type="secondary" category={secondaryCategory} />
                    </div>
                </div>
            </div>
        </div>
    )
}