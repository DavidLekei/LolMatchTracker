import React, {Component} from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom'

import MatchInfoSmall from '../Match/MatchInfoSmall';
import StatsOverview from './StatsOverview'
import RankSection from './RankSection'
import NoteCard from '../Notes/NoteCard'

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

        const mockRankData =  {
            division: 'Diamond',
            level: '2',
            lp: '72',
            server: 'North America'
        }

        const mockGoalData = {
            division: 'Master',
            lp: '0',
            server: 'North America'
        }
        return(
            <div className="App-content-home">
                <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                    <div style={{width:'30%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                        <RankSection current data={mockRankData}/>
                        <RankSection goal data={mockGoalData}/>
                    </div>
                    {/*<div><h2>Your Stats</h2></div>*/}
                    {/*<StatsOverview></StatsOverview>*/}
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
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
                    </div>
                </div>
                <div style={{width:'100%'}}>
                    <h2>Recent Notes</h2>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                        <NoteCard small title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                        <NoteCard small title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                        <NoteCard small title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePane;