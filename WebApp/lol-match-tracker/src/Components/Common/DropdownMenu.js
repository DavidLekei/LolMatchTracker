import React, {Component} from 'react';

//TODO: props should recieve an ARRAY of entries to display
class DropdownMenu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="dropdown">
                <h3>{this.props.label}</h3>
                <select id={this.props.id}>
                    <option value="Ahri">Ahri</option>
                    <option value="Taliyah">Taliyah</option>
                    <option value="Viktor">Viktor</option>
                </select>
            </div>
        )
    }
}

export default DropdownMenu;