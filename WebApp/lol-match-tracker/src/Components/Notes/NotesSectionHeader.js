import React, {Component} from 'react';

import './Notes.css'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

class NotesSectionHeader extends Component{

    constructor(props){
        super(props);

        this.state = {
            expanded:false
        }

        this.expand = this.expand.bind(this);
    }

    render(){
        return(
            <div className={`section-header`} onClick={() => this.expand("matchup")}>
                    <h1>{this.props.text}</h1>
                    {
                        this.state.expanded ?
                        (
                            <ExpandLessIcon fontSize="large"></ExpandLessIcon>

                        )
                        :
                        (
                            <ExpandMoreIcon fontSize="large"></ExpandMoreIcon>
                        )
                    }
                </div>
        )
    }

    expand(element){
        this.setState({
            expanded: !this.state.expanded
        })
        let notes_section = document.getElementById(this.props.associated_notes_id);
        
        notes_section.className = `notes-section + ${this.state.expanded ? "hidden" : "visible"}`;
          
        }
}

export default NotesSectionHeader;