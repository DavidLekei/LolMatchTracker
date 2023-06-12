import React, {Component} from 'react';

import './MatchPane.css'

import AddMatchControls from './AddMatchControls';
import SearchButton from '../Common/SearchButton';

class MatchesPaneHeader extends Component{
    render(){
        return(
            <div id="match-header" className="match-header">
                <h1>{this.props.header}</h1>
                <AddMatchControls ></AddMatchControls>
                <div className="match-text">
                    <p>{this.props.text}</p>
                    <div className="lv-btn-container">
                        <div className="match-filter-img" onClick={this.props.filter_function}>
                            <img src={`/icons/${this.props.filter_icon}.png`}></img>
                        </div>
                        <SearchButton searchFunction={() => {console.log('search button pressed')}}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchesPaneHeader;

