import React, {Component} from 'react';

import {Link} from "react-router-dom";

import './MenuPane.css';

//Material 
class MenuEntry extends Component{
    render(){
        return(
            <div className="menu-entry">
                <img className="menu-entry-img" src={`/icons/${this.props.icon}.png`}></img>
                <div className="menu-entry-text">{this.props.text}</div>
            </div>
        )
    }
}

export default MenuEntry;