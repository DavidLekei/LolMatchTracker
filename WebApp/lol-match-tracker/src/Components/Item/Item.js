import React, {Component} from 'react';

import './Item.css'

class Item extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={`item-icon`}>
                <img src={`/game/item/${this.props.item_id}.png`} />
            </div>
        )
    }
}

export default Item;