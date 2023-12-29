import {useContext} from 'react';

import { SettingsContext } from '../Settings/SettingsProvider';
import {AuthContext} from '../../Auth/AuthenticationProvider'

import {BrowserRouter as Router, Link} from 'react-router-dom'

import MatchInfoSmall from '../Match/MatchInfoSmall';
import StatsOverview from './StatsOverview'
import RankSection from './RankSection'
import RankChart from './RankChart'
import NoteCard from '../Notes/NoteCard'

import './HomePane.css'

//THOUGHTS: Using the same gradient applied to the welcome message to style the match history wins, and maybe make the losses 'grey'.
//Would this give a feeling of more like 'this game didn't progress my LP but it wasn't a negative experience'
export default function HomePane(props){

    const user = useContext(AuthContext)
    const settings = useContext(SettingsContext)

    const greetings = ["Let's get grinding", "Time to queue up", "Put in the work", "Keep climbing"]

    const getMatchData = () => {
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

        let matchData = getMatchData();

        const mockRankData =  {
            division: settings.general.current_rank,
            level: '2',
            lp: '72',
            server: 'North America'
        }

        const mockGoalData = {
            division: settings.general.goal_rank,
            lp: '0',
            server: 'North America'
        }

        const greeting = greetings[Math.floor(Math.random() * greetings.length )]

        return(
            <div className="App-content-home">
                <div id="home-content-column" style={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-evenly', alignItems:'center',}}>
                    <div style={{fontSize:'36px'}}>
                        <h1 className={`welcome-gradient ${settings.general.goal_rank}`}>{greeting}, {user.user.username}!</h1>
                    </div>
                    <div style={{width:'100%', minHeight:'30rem', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
                        <RankSection current data={mockRankData}/>
                        <RankChart settings={settings}/>
                        <RankSection goal data={mockGoalData}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', marginTop:'10rem', marginBottom:'10rem'}}>
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
                    <h2>Recent Notes</h2>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                        <NoteCard noteId='1' small title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                        <NoteCard noteId='2' small title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                        <NoteCard noteId='3' small title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                    </div>
                </div>
            </div>
        )
}