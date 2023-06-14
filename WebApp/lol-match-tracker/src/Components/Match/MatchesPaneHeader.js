import React, {Component} from 'react';

import './MatchPane.css'

import AddMatchControls from './AddMatchControls';
import SearchButton from '../Common/SearchButton';

export default function MatchesPaneHeader(props){
        return(
            <div id="match-header" className="match-header">
                <h1>{props.header}</h1>
                <AddMatchControls ></AddMatchControls>
                <div className="match-text">
                    <p>{props.text}</p>
                    <div className="lv-btn-container">
                        <div className="match-filter-img" onClick={props.filter_function}>
                            <img src={`/icons/${props.filter_icon}.png`}></img>
                        </div>
                        <SearchButton searchFunction={props.search_function} tableId="" criteria={{}}/>
                    </div>
                </div>
            </div>
        )
    }


