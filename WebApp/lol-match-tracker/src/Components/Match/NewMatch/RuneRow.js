import {React, useState} from  'react'

import Rune from './Rune'

function rowClicked(event){
    for(var i = 0; i < event.currentTarget.children.length; i++){

        if(event.currentTarget.children[i].id == event.target.id){
            event.currentTarget.children[i].className = "selected";
        }
        else{
            event.currentTarget.children[i].className = "";
        }
    }
}

export default function RuneRow(props){

    if(props.type == "keystones"){
        return(
            <div id="keystone-row" style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                <Rune id="keystone_1"  />
                <Rune id="keystone_2"  />
                <Rune id="keystone_3"  />
                <Rune id="keystone_4"  />
            </div> 
        )
    }

    if(props.type == "primary"){
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                <Rune id={`primary_1_` + props.rowNumber}  />
                <Rune id={`primary_2_` + props.rowNumber}  />
                <Rune id={`primary_3_` + props.rowNumber}  />
                <Rune id={`primary_4_` + props.rowNumber}  />
            </div> 
        )
    }
    
    if(props.type == "secondary"){
        return(
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}} onClick={(event) => rowClicked(event)}>
                <Rune id={`secondary_1_` + props.rowNumber}  />
                <Rune id={`secondary_2_` + props.rowNumber}  />
                <Rune id={`secondary_3_` + props.rowNumber}  />
            </div> 
        )
    }
}