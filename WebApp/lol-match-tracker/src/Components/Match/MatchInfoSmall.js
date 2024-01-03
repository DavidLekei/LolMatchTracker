import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import compareStringDates from '../../Util/Dates/DateUtil'

import Button from '@mui/material/Button'

import './MatchInfo.css'
import './MatchesListview.css'

export default function MatchInfo(props){

    console.log('matchinfo props: ', props)

    return(
        <div className="match-info-container">
            <div className="row" style={{width:'30%', outline:'2px solid blue'}}>
                <div className="column">
                    <div className="row">
                        <img className="match-info-champ-img" src={`/game/champion/${props.data.championPlayed.name}.png`} />
                        <div className="column">
                            <p>Summoner 1</p>
                        </div>
                    </div>
                    <div className="row">
                        Items
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <img className="match-info-champ-img" src={`/game/champion/${props.data.championAgainst.name}.png`} />
                    </div>
                    <div className="row">
                        Items
                    </div>
                </div>
            </div>
            <div style={{width:'30%', outline:'2px solid blue'}}>
                Statistics
            </div>
            <div className="row" style={{width:'30%', outline:'2px solid blue'}}>
                <div>
                    Other players
                </div>
                <div className="column">
                    <Button>Link to Recording</Button>
                    <Button>Link to Notes</Button>
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