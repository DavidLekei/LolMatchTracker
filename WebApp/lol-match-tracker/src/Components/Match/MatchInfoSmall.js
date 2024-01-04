import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import compareStringDates from '../../Util/Dates/DateUtil'

import Button from '@mui/material/Button'

import './MatchInfo.css'
import './MatchesListview.css'

function ChampionInfo(props){

    console.log('championinfo props: ', props)

    const summs = props.summoners.map((summ, index) => {
        console.log('summ : ', summ)
        return <img className="match-info-img" src={`/game/summoners/${summ}.png`} />
    })

    const runes = props.runes.map((rune, index) => {
        return <img className="match-info-img" src={`/game/perk-images/Styles/${rune}.png`} />
    })

    const items = props.items.map((item, index) => {
        return <img className="match-info-img" src={`/game/item/${item}.png`} />
    })

    return(
        <div className="column champion-info">
            <div className="row">
                <img className="match-info-img champ-img" src={`/game/champion/${props.name}.png`} />
                <div className="column">
                    {summs}
                </div>
                <div className="column">
                    {runes}
                </div>
            </div>
            <div className="row items">
                {items}
            </div>
        </div>
    )
}

export default function MatchInfo(props){

    console.log('matchinfo props: ', props)

    return(
        <div className={`match-info-container ${props.data.outcome}`}>
            <div className="row" style={{width:'30%'}}>
                <ChampionInfo name={props.data.championPlayed.name} summoners={['flash', 'teleport']} runes={['7200_Domination', '7202_Sorcery']} items={[3070, 3157, 6653, 3135, 3089]} />
                <ChampionInfo name={props.data.championAgainst.name} summoners={['flash', 'ignite']} runes={['7202_Sorcery', '7203_Whimsy']} items={[6655, 3135, 4629, 3102, 3089, 3040]} />
            </div>
            <div style={{width:'30%'}}>
                <div className="column la bold" id="match-stats">
                    <div id="kda">{props.data.kda}</div>
                    <div>CS: 280</div>
                    <div>Vision: 22</div>
                </div>
            </div>
            <div className="row space-apart" style={{width:'30%'}}>
                <div>
                    Other players
                </div>
                <div className="column">
                    <Link className="match-info-icon" to={`/recordings/${props.data.id}`}>
                        <img className="match-info-img" src="/icons/video.png" />
                    </Link>
                    <Link className="match-info-icon" to="/notes">
                        <img className="match-info-img" src="/icons/notes.png" />
                    </Link>
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