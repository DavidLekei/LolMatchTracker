import {React, Component} from 'react'

export default function SummonerSpellSelection(props){

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
    }

    return(
        <div style={styles.block}>
                <div style={styles.column}>
                    <h2>Summoner Spells</h2>
                </div>
            </div>
    )
}