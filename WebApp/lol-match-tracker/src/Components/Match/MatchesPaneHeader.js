import React, {Component} from 'react';

import './MatchPane.css'

import MatchInfoSmall from './MatchInfoSmall'

class MatchesPaneHeader extends Component{
    render(){
        return(
            <div id="match-header" className="match-header">
                <h1>{this.props.header}</h1>
                <div className="match-text">
                    <p>{this.props.text}</p>
                    <div className="match-filter-img" onClick={this.props.filter_function}>
                        <img src={`/icons/${this.props.filter_icon}.png`}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchesPaneHeader;

