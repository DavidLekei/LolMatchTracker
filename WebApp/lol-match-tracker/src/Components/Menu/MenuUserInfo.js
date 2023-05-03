import React, {Component} from 'react';

import './MenuPane.css';

//Material 
class MenuUserInfo extends Component{
    render(){
        return(
            <div className="menu-user-info">
                <img className="menu-user-img" src={`/icons/${this.props.image}.png`}></img>
                <div className="menu-user-name">{this.props.name}</div>
                <div className="menu-user-title">{this.props.title}</div>
            </div>
        )
    }
}

export default MenuUserInfo;