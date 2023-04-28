import {React} from  'react'

import Rune from './Rune'

export default function RuneRow(props){

    if(props.type == "keystones"){
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <Rune />
                <Rune />
                <Rune />
                <Rune />
            </div> 
        )
    }

    if(props.type == "primary"){
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <Rune />
                <Rune />
                <Rune />
                <Rune />
            </div> 
        )
    }
    
    if(props.type == "secondary"){
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                <Rune />
                <Rune />
                <Rune />
            </div> 
        )
    }
}