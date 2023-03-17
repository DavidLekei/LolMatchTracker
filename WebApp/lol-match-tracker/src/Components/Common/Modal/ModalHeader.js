import React, {Component} from 'react';

import '../Common.css'

//TODO: props should recieve an ARRAY of entries to display
class ModalHeader extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="modal-header">
                <h1>{this.props.text}</h1>
                <h1 id="modal-exit-btn" className="exit">x</h1>
            </div>
        )
    }
}

export default ModalHeader;