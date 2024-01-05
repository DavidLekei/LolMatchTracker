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