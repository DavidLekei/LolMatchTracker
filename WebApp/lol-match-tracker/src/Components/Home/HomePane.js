import React, {Component} from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom'

import QuickActions from './QuickActions'
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
                datePlayed:"4/27/2023",
                duration:"30:00",
                championPlayed:{
                    name: "Viktor",
                },
                championAgainst:{
                    name:"Syndra",
                },
                outcome:"Loss",
                kda: "4/7/10"
            },
            {
                matchid:2,
                datePlayed:"3/3/2023",
                duration:"33:28",
                championPlayed:{
                    name:"Taliyah",
                },
                championAgainst:{
                    name:"Yasuo",
                },
                outcome:"Win",
                kda: "12/4/16"
            },
            {
                matchid:3,
                datePlayed:"2/28/2023",
                duration:"27:23",
                championPlayed:{ 
                    name:"Ahri",
                },
                championAgainst:{
                    name:"Zed",
                },
                outcome:"Win",
                kda:"8/2/14"
            }
        ]}

        return mockData;
    }

    render(){
        let matchData = this.getMatchData();
        return(
            <div className="App-content-home">
                <QuickActions />

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