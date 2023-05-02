import React, {Component} from 'react';

import './NewMatch.css'

import Button from '@mui/material/Button';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'

//Local imports
import NewMatchData from './NewMatchData'
import ChampionSelectField from '../../Game/Champions/ChampionSelectField'
import SummonerSpellSelection from '../../Match/NewMatch/SummonerSpellSelection'
import RuneSelection from '../../Match/NewMatch/RuneSelection'

export default function CreateMatchPage(props){

    const pageStyles = {
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
        <div className="new-match-container">
            <div className="new-match-column">
                <div>
                    <h1>Add a New Match</h1>
                </div>
                <div className="new-match-row">
                        <NewMatchData label="Date Played" component={<DateTimePicker></DateTimePicker>} />
                        <NewMatchData label="Duration" component={<input defaultValue={"15:00"} style={{borderRadius:"5%", paddingLeft:"20px", paddingTop:"20px", paddingBottom:"20px"}} />}/>
                </div>

                <div className="new-match-row">
                    <div style={{display:"flex", flexDirection: "column", marginRight:"50px"}}>
                        <NewMatchData label="Champion Played" component={<ChampionSelectField id="new-champ-played"/>} />
                    </div>
                    <div>
                        <NewMatchData label="Champion Against" component={<ChampionSelectField id="new-champ-against"/>} />
                    </div>
                </div>

                <div className="new-match-row">
                        <h2>K/D/A</h2>
                </div>

                <div className="new-match-row">
                        <h2>Build</h2>
                        <div className="row">
                            <p>Item 1</p>
                            <p>Item 2</p>
                            <p>Item 3</p>
                            <p>Item 4</p>
                            <p>Item 5</p>
                            <p>Item 6</p>
                            <p>Trinket</p>
                        </div>
                </div>

                <RuneSelection />

                <div className="new-match-row">
                    <NewMatchData label="Summoner Spells" component={<SummonerSpellSelection />} />
                </div>

                <div>
                        <Button variant="contained" color="success">Add</Button>
                </div>
            </div>
        </div>
    )

}