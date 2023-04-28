import {React} from 'react'

import RuneTypes from './RuneTypes'
import RuneRow from './RuneRow'

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

    return(
        <div style={styles.block}>
            <div style={styles.column}>
                <h2>Runes</h2>
                <div style={styles.runeSelection}>
                    <div style={styles.primaryRuneSection}>
                        <RuneTypes />
                        <RuneRow type="keystones" />
                        <RuneRow type="primary"/>
                        <RuneRow type="primary"/>
                        <RuneRow type="primary"/>
                    </div>
                    <div style={styles.secondaryRuneSection}>
                        <RuneTypes />
                        <RuneRow type="secondary"/>
                        <RuneRow type="secondary"/>
                        <RuneRow type="secondary"/>
                    </div>
                </div>
            </div>
        </div>
    )
}