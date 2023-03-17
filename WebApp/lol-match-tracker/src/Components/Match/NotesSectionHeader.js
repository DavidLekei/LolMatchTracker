import React, {Component} from 'react';

import './Notes.css'

class NotesSectionHeader extends Component{

    constructor(props){
        super(props);

        this.expand = this.expand.bind(this);
    }

    render(){
        return(
            <div className={`section-header`} onClick={() => this.expand("matchup")}>
                    <h1>Match Up Notes</h1>
                    {
                        this.state.matchup_expanded ?
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
        if(element == "matchup")
        {
            this.setState({
                matchup_expanded:!this.state.matchup_expanded,
                champion_expanded:false,
                keymoments_expanded:false,
                learning_expanded:false
            })
        }
        else if(element == "champion")
        {
            this.setState({
                matchup_expanded:false,
                champion_expanded:!this.state.champion_expanded,
                keymoments_expanded:false,
                learning_expanded:false
            })
        }
        else if(element == "keymoments")
        {
            this.setState({
                matchup_expanded:false,
                champion_expanded:false,
                keymoments_expanded:!this.state.keymoments_expanded,
                learning_expanded:false
            })
        }
        else if(element == "learning")
        {
            this.setState({
                matchup_expanded:false,
                champion_expanded:false,
                keymoments_expanded:false,
                learning_expanded:!this.state.learning_expanded
            })
        }
    }

}

export default NotesSectionHeader;