import React, {Component} from 'react';

import Item from './Item'

class ItemBar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={`item-bar`}>
                <Item item_id={6653}/>
                <Item item_id={3070}/>
                <Item item_id={3089}/>
                <Item item_id={3102}/>
                <Item item_id={3135}/>
                <Item item_id={4629}/>
                <Item item_id={3364}/>
            </div>
        )
    }
}

export default ItemBar;