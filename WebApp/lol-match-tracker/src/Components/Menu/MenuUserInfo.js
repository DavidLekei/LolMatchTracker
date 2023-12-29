import React, {Component} from 'react';

import MenuAccountOptions from './MenuAccountOptions'

import './MenuPane.css';

//Material 
class MenuUserInfo extends Component{
    render(){
        return(
            <div className="menu-user-info">
                {/* <MenuAccountOptions /> */}
                <div className="menu-user-name">{this.props.name}</div>
                <div className="menu-user-title">{this.props.title}</div>
            </div>
        )
    }
}

export default MenuUserInfo;