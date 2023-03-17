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
            date_played:"Today",
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
            date_played:"3/3/2023",
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
            date_played:"2/28/2023",
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

export default function MatchesListview(){
    let {matchid} = useParams();
    let matchData = getMatchData();

    //TODO: Fetch match data from server/API
    if(typeof matchid === 'undefined'){
        return(
            <div className="match-listview">
                <MatchesListviewHeader />
                <MatchInfoSmall
                    data={matchData.games[0]}               
                />
                <MatchInfoSmall
                    data={matchData.games[1]}              
                />
                <MatchInfoSmall
                    data={matchData.games[2]}               
                />
                <MatchInfoSmall
                    data={matchData.games[0]}               
                />
                <MatchInfoSmall
                    data={matchData.games[1]}              
                />
                <MatchInfoSmall
                    data={matchData.games[2]}               
                />
                <MatchInfoSmall
                    data={matchData.games[2]}               
                />
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
