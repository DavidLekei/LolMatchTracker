import React, {Component} from 'react';

class DateInput extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="date-input">
                <h3>{this.props.label}</h3>
                <input type="date" id={this.props.id}></input>
            </div>
        )
    }
}

export default DateInput;