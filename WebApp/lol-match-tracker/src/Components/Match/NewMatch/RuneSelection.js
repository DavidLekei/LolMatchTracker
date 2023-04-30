import {React, useState} from 'react'

import RuneTypes from './RuneTypes'
import RuneOptions from './RuneOptions'


function changePrimary2(){
    console.log("changePrimary()");
}

export default function RuneSelection(props){

    const styles = {
        container: {
            display: "flex",
            flexDirection:"column",
            width: "100%",
            minHeight:"50vh",
            backgroundColor: "white",
            overflow:"auto",
            paddingBottom:"50px",
        },
        column:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        },
        runeSelection:{
            display:"flex",
            flexDirection:"row",
            width:"50vw",
            height:"600px",
        },
        primaryRuneSection:{
            display:"flex",
            flexDirection:"column",
            outline:"2px solid blue",
            width:"60%",
            justifyContent:"space-evenly",
        },
        secondaryRuneSection:{
            display:"flex",
            flexDirection:"column",
            outline:"2px solid yellow",
            width:"40%",
            justifyContent:"space-evenly",
        },
        runeRow:{
            display:"flex",
            flexDirection:"row",
        }
    }

    const [primaryCategory, changePrimary] = useState();
    const [secondaryCategory, changeSecondary] = useState();

    //let primaryCategory = "Precision";
    //let secondaryCategory = "Inspiration";

    return(
        <div style={styles.block}>
            <div style={styles.column}>
                <h2>Runes</h2>
                <div style={styles.runeSelection}>
                    <div style={styles.primaryRuneSection}>
                        <RuneTypes id="primary-rune-types" onclick={changePrimary2}/>
                        <RuneOptions type="primary" category={"Precision"}/>
                    </div>
                    <div style={styles.secondaryRuneSection}>
                        <RuneTypes onclick={changePrimary2}/>
                        <RuneOptions type="secondary" category={"Domination"} />
                    </div>
                </div>
            </div>
        </div>
    )
}