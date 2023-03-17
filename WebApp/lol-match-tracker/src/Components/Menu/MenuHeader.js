import React, {Component} from 'react';

import './MenuPane.css';

//Material 
class MenuHeader extends Component{
    render(){
        return(
            <div className="menu-header">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}

export default MenuHeader;