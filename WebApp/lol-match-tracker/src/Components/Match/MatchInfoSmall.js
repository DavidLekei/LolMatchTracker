import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import compareStringDates from '../../Util/Dates/DateUtil'

import './MatchInfo.css'
import './MatchesListview.css'

class MatchInfoSmall extends Component{

    constructor(props){
        super(props);
    }

    render(){
        //Check filters
        if(this.props.filters != null || this.props.filters != undefined){

            //If the champions array is empty, we aren't filtering out any champions, so ignore it
            if(this.props.filters.champions.length > 0){
                if(!this.props.filters.champions.includes(this.props.data.champion)){
                    return;
                }
            }

            //If the start_date is null, we aren't filtering by start date
            if(this.props.filters.start_date != null){
                //TODO: if statement to filter out, but this cant be done until we properly format the date fields in the JSON from the server
                
                if(compareStringDates(this.props.filters.start_date, this.props.data.date_played) == 1){
                    return;
                }
            }

            //If the end_date is null, we aren't filtering by end date
            if(this.props.filters.end_date != null){
                if(compareStringDates(this.props.filters.end_date, this.props.data.date_played) == -1){
                    return;
                }
            }

            //If the outcome is null, we aren't filtering by outcome
            if(this.props.filters.outcome != null){

            }

        }

        console.log(this.props.data)
        return(
            <tr id={`match-${this.props.data.matchid}`} className={`lv-row lv-data`}>
                <Link className={`small ${ this.props.data.outcome }`} to={`/matches/` + this.props.data.id}>
                    <td className={`lv-item lv-outcome match-outcome-${this.props.data.outcome}`}>{this.props.data.outcome}</td>
                    <td className="lv-item lv-date-played">{this.props.data.datePlayed}</td>
                    <td className="lv-item lv-champ">{this.props.data.championPlayed.name}</td>
                    <td className="lv-item lv-champ-against">{this.props.data.championAgainst.name}</td>
                    <td className="lv-item lv-kda">{this.props.data.kda}</td>
                </Link>
            </tr>
        )
    } 
}

export default MatchInfoSmall;