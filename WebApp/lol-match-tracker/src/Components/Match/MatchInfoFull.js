import {useState, useEffect} from 'react';

import './MatchInfo.css'
import ChampionInfo from './ChampionInfo'
import CircularProgressWithText from '../Common/CircularProgressWithText';
import NotesInputField from '../Notes/NotesInputField'
import NotesSectionHeader from '../Notes/NotesSectionHeader'
import ChampMatchup from './ChampMatchup'
import ItemBar from '../Item/ItemBar'
import LearningGoals from '../LearningGoals/LearningGoals'
import NoteCard from '../Notes/NoteCard'
import Recording from '../Recording/Recording'
import MatchStats from './MatchStats'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';


const mockData = [
    {
        "id": 7,
        "datePlayed": "2023-04-27 15:56:41.0",
        "duration": "20:14:15",
        "riot_id": null,
        "championPlayed": {
            "id": 2,
            "name": "Ahri"
        },
        "championAgainst": {
            "id": 157,
            "name": "Zed"
        },
        "items": [
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            },
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            },
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            },
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            },
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            },
            {
                "id": 0,
                "name": null,
                "effect": null,
                "stats": null
            }
        ],
        "trinket": {
            "id": 0,
            "name": null,
            "effect": null
        },
        "runePage": {
            "id": 0,
            "keystone": {
                "id": 1,
                "name": "Press The Attack",
                "category": "Precision",
                "effect": null
            },
            "primaries": [
                {
                    "id": 6,
                    "name": "Triumph",
                    "category": "Precision",
                    "effect": null
                },
                {
                    "id": 6,
                    "name": "Triumph",
                    "category": "Precision",
                    "effect": null
                },
                {
                    "id": 9,
                    "name": "Legend: Tenacity",
                    "category": "Precision",
                    "effect": null
                }
            ],
            "secondaries": [
                {
                    "id": 20,
                    "name": "Sudden Impact",
                    "category": "Domination",
                    "effect": null
                },
                {
                    "id": 27,
                    "name": "Ultimate Hunter",
                    "category": "Domination",
                    "effect": null
                }
            ],
            "extras": [
                {
                    "id": 1,
                    "name": "Attack Speed",
                    "category": null,
                    "effect": "+10% Attack Speed"
                },
                {
                    "id": 0,
                    "name": "Adaptive Force",
                    "category": null,
                    "effect": "+9 Adaptive Force"
                },
                {
                    "id": 3,
                    "name": "Armor",
                    "category": null,
                    "effect": "+6 Armor"
                }
            ],
            "user": 0
        },
        "matchNotes": 1,
        "user": 1,
        "totalTeamKills":"35",
        "kills":15, 
        "deaths":5,
        "assists":14,
        "kda": "15/5/14",
        "cs": 140,
        "vs":22,
        "outcome": "Win",
        "summonerSpell1": "1",
        "summonerSpell2": "2"
    },
]


export default function MatchInfoFull(props){

    const [match, setMatch] = useState(null)

    useEffect(
        () => {
                async function getMatchData(){
                    await fetch("http://localhost:8080/matches/user/1").then((res) => {
                        if(res.ok)
                        {
                            res.json().then((data) => {
                                setMatch(mockData[0]);
                            });
                        }
                    })
                }
            getMatchData();

            // if(match){
            //     matchLoaded()
            // }
        }, [match]
    );

    if(match == null){
        return <CircularProgress />
    }


    return(
        <div className="full-match-info-container column mt-2">
            <Typography variant="h3" className="row la bold" style={{marginLeft:'3.5rem'}}>
                Ranked Solo/Duo - 1/5/2024 - Ahri Journey: Game 4
            </Typography>
            <div className="full-match-info-container row mt-2">
                <div className="column" style={{width:'60%'}}>
                    <div className="row fw ca space-apart">
                        <ChampionInfo style={{marginLeft:'3.5rem'}} name={match.championPlayed.name} outcome={match.outcome} summoners={['flash', 'teleport']} runes={['7200_Domination', '7202_Sorcery']} items={[3070, 3157, 6653, 3135, 3089, 0, 3363]} />
{/*                        <Typography variant="h5" className="bold">
                            {match.kills}/{match.deaths}/{match.assists}
                        </Typography>*/}
                        <ChampionInfo style={{marginRight:'3.5rem'}} enemy name={match.championAgainst.name} outcome={match.outcome} summoners={['flash', 'ignite']} runes={['7202_Sorcery', '7203_Whimsy']} items={[6655, 3135, 4629, 3102, 3089, 3040, 3340]} />
                    </div>

                    <MatchStats match={match}/>
                </div>
                <div className="column" style={{width:'50%'}}>
                    <Typography variant="h5">
                        Recordings
                    </Typography>
                    <div>
                        <Recording data={{'videoId': 1, 'title': 'Test Recording', 'championPlayed': 'Ahri', 'championAgainst': 'Zed', 'outcome': 'Win', 'date': '1/4/2024', 'thumbnail': 'test_thumbnail.jpg'}} />
                    </div>
                    <Divider orientation="horizontal" variant="middle" flexItem style={{margin: '2rem 0rem'}}/>
                    <Typography variant="h5">
                        Notes 
                    </Typography>
                    <div className="row wrap space-evenly">
                        <NoteCard noteId='1' small title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                        <NoteCard noteId='2' small title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                        <NoteCard noteId='3' small title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                        <NoteCard small add />
                    </div>
                </div>
            </div>
        </div>
    )
}

// class MatchInfoFull extends Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             matchup_expanded:false,
//             champion_expanded:false,
//             keymoments_expanded:false,
//             learning_expanded:false,
//             matchData: {},
//             loading: true
//         }

//         this.expand = this.expand.bind(this);
//         this.getMatchData = this.getMatchData.bind(this);

//         this.getMatchData();
//     }

//     async getMatchData()
//     {
//         await fetch("http://localhost:8080/matches/9").then((res) => {
//             if(res.ok)
//                 {
//                     res.json().then((data) => {
//                         this.setState({
//                             matchData: data,
//                             loading:false
//                         })
//                     console.log(data);
//                 });
//             }
//         })
//     }

//     render(){
//         if(this.state.loading){
//             return <div><h1>Loading...</h1></div>
//         }

//         return(
//             <div id="test" className={`App-content-match full ${this.state.matchData.outcome}`}>
//                 <ChampMatchup champion={this.state.matchData.championPlayed.name} champion_against={this.state.matchData.championAgainst.name}/>
//                 <h1>Items</h1>
//                 <ItemBar />
//                 <NotesSectionHeader text="Matchup Notes" associated_notes_id="matchup_notes"/>
//                 <NotesInputField id="matchup_notes" />
//                 <NotesSectionHeader text="Champion Notes" associated_notes_id="champion_notes"/>
//                 <NotesInputField id="champion_notes" />
//                 <NotesSectionHeader text="Key Moments" associated_notes_id="key_moments"/>
//                 <NotesInputField id="key_moments" />
//                 <NotesSectionHeader text="Learning Goals" associated_notes_id="learning_goals"/>
//                 <LearningGoals id="learning_goals"></LearningGoals>
//                 {/* <NotesInputField id="learning_goals" /> */}
//             </div>
//         )
//     }

//     expand(element){
//         if(element == "matchup")
//         {
//             this.setState({
//                 matchup_expanded:!this.state.matchup_expanded,
//                 champion_expanded:false,
//                 keymoments_expanded:false,
//                 learning_expanded:false
//             })
//         }
//         else if(element == "champion")
//         {
//             this.setState({
//                 matchup_expanded:false,
//                 champion_expanded:!this.state.champion_expanded,
//                 keymoments_expanded:false,
//                 learning_expanded:false
//             })
//         }
//         else if(element == "keymoments")
//         {
//             this.setState({
//                 matchup_expanded:false,
//                 champion_expanded:false,
//                 keymoments_expanded:!this.state.keymoments_expanded,
//                 learning_expanded:false
//             })
//         }
//         else if(element == "learning")
//         {
//             this.setState({
//                 matchup_expanded:false,
//                 champion_expanded:false,
//                 keymoments_expanded:false,
//                 learning_expanded:!this.state.learning_expanded
//             })
//         }
//     }

// }

// export default MatchInfoFull;