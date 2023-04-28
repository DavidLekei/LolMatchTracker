import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import Button from '@mui/material/Button';
import DateTimeCalendar from './DateTimeCalendar'

//Local imports
import ChampionSelectField from '../../Game/Champions/ChampionSelectField'

export default function CreateMatchPage(props){

    const pageStyles = {
        container: {
            display: "flex",
            flexDirection:"column",
            width: "100%",
            minHeight:"92%",
            backgroundColor: "white",
            marginBottom:"50px",
        },
        block: {
            display:"flex",
            flexDirection:"row",
            marginTop: "20px",
            alignItems:"center",
            justifyContent:"center",
        },
        row:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
        },
        column:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
        },
        marginTop:{
            marginTop:"20px",
        },
        marginRight: {
            marginRight:"10px",
        },
        input: {
            maxWidth:"25%",
            textAlign:"center",
            fontWeight:"bold",
        }
    }

    return(
        <div style={pageStyles.container}>
            <h1>Add a New Match</h1>
            <DateTimeCalendar label="Date Played"/>
            <div style={pageStyles.block}>
                <div style={pageStyles.row}>
                    <p style={pageStyles.marginRight}><b>Duration</b></p>
                    <input defaultValue={"15:00"} style={pageStyles.input}></input>
                </div>
            </div>

            <div style={pageStyles.block}>
                <div style={{display:"flex", flexDirection: "column", marginRight:"50px"}}>
                    <ChampionSelectField label="Champion Played"></ChampionSelectField>
                </div>
                <div>
                <ChampionSelectField label="Champion Against"></ChampionSelectField>
                </div>
            </div>

            <div style={pageStyles.block}>
                <div style={pageStyles.column}>
                    <h2>Build</h2>
                    <div style={pageStyles.row}>
                        <p>Item 1</p>
                        <p>Item 2</p>
                        <p>Item 3</p>
                        <p>Item 4</p>
                        <p>Item 5</p>
                        <p>Item 6</p>
                        <p>Trinket</p>
                    </div>
                </div>
            </div>
        </div>
    )

}