import React, {Component} from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom'

import MatchInfoSmall from '../Match/MatchInfoSmall';
import StatsOverview from './StatsOverview'

import './HomePane.css'

class HomePane extends Component{

    constructor(props){
        super(props);

        this.getMatchData = this.getMatchData.bind(this);

        this.matchData = this.getMatchData();
    }

    getMatchData(){
        let mockData ={games: [
            {
                matchid:1,
                date_played:"Today",
                duration:"30:00",
                champion:"Viktor",
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
                outcome:"win",
                kills:8,
                deaths:1,
                assists:8
            }
        ]}

        return mockData;
    }

    render(){
        let matchData = this.getMatchData();
        return(
            <div className="App-content-home">
                <div><h2>Your Stats</h2></div>
                <StatsOverview></StatsOverview>
                <div><h2>Recent Matches</h2></div>
                <MatchInfoSmall
                    data={matchData.games[0]}               
                />
                <MatchInfoSmall
                    data={matchData.games[1]}              
                />
                <MatchInfoSmall
                    data={matchData.games[2]}               
                />
                <div><h2>Recent Notes</h2></div>
            </div>
        )
    }
}

export default HomePane;