import React, {Component} from 'react';

import './Canvas.css'

import Listview from '../Components/Common/Listview/Listview'
import MatchInfoSmall from '../Components/Match/MatchInfoSmall'

export default function Canvas(props){

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

    let matchData = getMatchData()

    let tcolumns = [
        "Date Played",
        "Champion",
        "Against",
        "K/D/A",
        "Outcome"
    ]

    return(
        <div className = "canvas">
            <Listview id="test" columns={tcolumns}>
                <MatchInfoSmall
                    columns={tcolumns} data={matchData.games[1]} filters={props.filters}             
                />
            </Listview>
        </div>
    )
}