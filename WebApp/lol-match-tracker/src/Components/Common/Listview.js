import React, {Component} from 'react';

import { useParams } from "react-router-dom";

import './MatchPane.css'
import './MatchesListview.css'

import MatchInfoSmall from './MatchInfoSmall'
import MatchInfoFull from './MatchInfoFull'
import MatchesListviewHeader from './MatchesListviewHeader'

function getMatchData(){
    let mockData ={games: [
        {
            matchid:1,
            date_played:"2023-03-12",
            duration:"30:00",
            champion:"Viktor",
            champion_against:"Sylas",
            outcome:"loss",
            kills:4,
            deaths:7,
            assists:10
        },
        {
            matchid:2,
            date_played:"2023-03-03",
            duration:"33:28",
            champion:"Taliyah",
            champion_against:"Ziggs",
            outcome:"win",
            kills:12,
            deaths:4,
            assists:16
        },
        {
            matchid:3,
            date_played:"2023-02-27",
            duration:"27:23",
            champion:"Ahri",
            champion_against:"Zed",
            outcome:"win",
            kills:8,
            deaths:1,
            assists:8
        }
    ]}

    return mockData;
}

export default function Listview(props){
    let {matchid} = useParams();
    let matchData = getMatchData();

    //TODO: Write functions to add/remove columns from the header
    //TODO: This needs to be taken out of here so that the user can add/remove columns to be displayed.
    //NOTE: MatchPane is also a functional component that utilizes useState(), which will most likely need to be used here eventually as well, so we can refer to MatchPane.js
    let columns = [
        "Date Played",
        "Champion",
        "Against",
        "K/D/A",
        "Outcome"
    ]

    console.log(props.filters);

    //TODO: Fetch match data from server/API
    //TODO: The matchinfosmall's should be created using a map()
    //TODO: The CSS implemented to make this table look good with 4 columns is BAD, need a better solution once we start letting users customize columns
    if(typeof matchid === 'undefined'){
        return(
            <div id="match-lv-container" className="lv-container">
                <MatchesListviewHeader columns={columns}/>
                <div>
                    <table id="match-listview" className="match-listview">
                        
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[0]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[1]} filters={props.filters}             
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                        <MatchInfoSmall
                            columns={columns} data={matchData.games[2]} filters={props.filters}              
                        />
                    </table>
                </div>
            </div>
        )

        
    }else{
        return(
            <div className="App-content-match">
                <MatchInfoFull matchid={matchid} data={matchData.games[matchid - 1]}/>
            </div>
        )
    }
}
