import React, {Component} from 'react';

import {Link, useNavigate} from 'react-router-dom'

import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import compareStringDates from '../../Util/Dates/DateUtil'

import Button from '@mui/material/Button'

import './MatchInfo.css'
import './MatchesListview.css'

import ChampionInfo from './ChampionInfo'

export default function MatchInfo(props){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/matches/${props.data.id}`)
    }

    const handleRecordingsClick = (e) => {
        e.stopPropagation()
        navigate(`/recordings/${props.data.matchid}`)
    }

    const handleNotesClick = (e) => {
        e.stopPropagation()
        navigate(`/notes/${props.data.matchid}`)
    }

    return(
        <div className={`match-info-container ${props.data.outcome}`} onClick={handleClick}>
            <div className="row space-apart" style={{width:'40%'}}>
                <ChampionInfo name={props.data.championPlayed.name} outcome={props.data.outcome} summoners={['flash', 'teleport']} runes={['7200_Domination', '7202_Sorcery']} items={[3070, 3157, 6653, 3135, 3089, 0, 3363]} />
                <ChampionInfo name={props.data.championAgainst.name} summoners={['flash', 'ignite']} runes={['7202_Sorcery', '7203_Whimsy']} items={[6655, 3135, 4629, 3102, 3089, 3040, 3340]} />
            </div>
            <div style={{width:'30%'}}>
                <div className="row la bold space-evenly" id="match-stats">
                    <div id="kda">{props.data.kda}</div>
                    <div className="column la">
                        <div>KP: 62%</div>
                        <div>CS: 280</div>
                        <div>VS: 22</div>
                    </div>
                </div>
            </div>
            {/* <div className="row space-apart" style={{width:'30%'}}> */}
                {/* <div>
                    Other players
                </div> */}
            <div>
                <div className="column">
                    <img className="match-info-img match-info-icon" src="/icons/video.png" onClick={handleRecordingsClick}/>
                    <img className="match-info-img match-info-icon" src="/icons/notes.png" onClick={handleNotesClick}/>
                </div>
            </div>
        </div>
    )
}

// class MatchInfoSmall extends Component{

//     constructor(props){
//         super(props);
//     }

//     render(){
//         //Check filters
//         if(this.props.filters != null || this.props.filters != undefined){

//             //If the champions array is empty, we aren't filtering out any champions, so ignore it
//             if(this.props.filters.champions.length > 0){
//                 if(!this.props.filters.champions.includes(this.props.data.champion)){
//                     return;
//                 }
//             }

//             //If the start_date is null, we aren't filtering by start date
//             if(this.props.filters.start_date != null){
//                 //TODO: if statement to filter out, but this cant be done until we properly format the date fields in the JSON from the server
                
//                 if(compareStringDates(this.props.filters.start_date, this.props.data.date_played) == 1){
//                     return;
//                 }
//             }

//             //If the end_date is null, we aren't filtering by end date
//             if(this.props.filters.end_date != null){
//                 if(compareStringDates(this.props.filters.end_date, this.props.data.date_played) == -1){
//                     return;
//                 }
//             }

//             //If the outcome is null, we aren't filtering by outcome
//             if(this.props.filters.outcome != null){

//             }

//         }

//         let championPlayedName = this.props.data.championPlayed.name;

//         return(
//             <tr id={`match-${this.props.data.matchid}`} className={`lv-row lv-data ${this.props.data.outcome}`} style={{paddingLeft:""}}>
//                 <Link className={`small`} to={`/matches/` + this.props.data.id}>
//                     <td><img src={`/game/champion/${championPlayedName}.png`} style={{width:"80px", height:"80px"}}></img></td>
//                     {/*<td><img src={`/game/champion/${this.props.data.championAgainst.name}.png`} style={{width:"80px", height:"80px"}}></img></td>*/}
//                     {/*<td className={`lv-item lv-outcome match-outcome-${this.props.data.outcome}`}>{this.props.data.outcome}</td>*/}
//                     <td className="lv-item lv-date-played">{this.props.data.datePlayed}</td>
//                     {/* <td className="lv-item lv-champ">{this.props.data.championPlayed.name}</td> */}
//                     {/* <td className="lv-item lv-champ-against">{this.props.data.championAgainst.name}</td> */}
//                     <td className="lv-item lv-kda">{this.props.data.kda}</td>
//                 </Link>
//             </tr>
//         )
//     } 
// }

// export default MatchInfoSmall;