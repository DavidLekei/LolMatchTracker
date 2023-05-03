import React, {Component} from 'react';

import './MatchInfo.css'
import NotesInputField from '../Notes/NotesInputField'
import NotesSectionHeader from '../Notes/NotesSectionHeader'
import ChampMatchup from './ChampMatchup'
import ItemBar from '../Item/ItemBar'
import LearningGoals from '../LearningGoals/LearningGoals'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

class MatchInfoFull extends Component{

    constructor(props){
        super(props);

        this.state = {
            matchup_expanded:false,
            champion_expanded:false,
            keymoments_expanded:false,
            learning_expanded:false,
            matchData: {},
            loading: true
        }

        this.expand = this.expand.bind(this);
        this.getMatchData = this.getMatchData.bind(this);

        this.getMatchData();
    }

    async getMatchData()
    {
        await fetch("http://localhost:8080/matches/9").then((res) => {
            if(res.ok)
                {
                    res.json().then((data) => {
                        this.setState({
                            matchData: data,
                            loading:false
                        })
                    console.log(data);
                });
            }
        })
    }

    render(){
        if(this.state.loading){
            return <div><h1>Loading...</h1></div>
        }

        return(
            <div id="test" className={`App-content-match full ${this.state.matchData.outcome}`}>
                <ChampMatchup champion={this.state.matchData.championPlayed.name} champion_against={this.state.matchData.championAgainst.name}/>
                <h1>Items</h1>
                <ItemBar />
                <NotesSectionHeader text="Matchup Notes" associated_notes_id="matchup_notes"/>
                <NotesInputField id="matchup_notes" />
                <NotesSectionHeader text="Champion Notes" associated_notes_id="champion_notes"/>
                <NotesInputField id="champion_notes" />
                <NotesSectionHeader text="Key Moments" associated_notes_id="key_moments"/>
                <NotesInputField id="key_moments" />
                <NotesSectionHeader text="Learning Goals" associated_notes_id="learning_goals"/>
                <LearningGoals id="learning_goals"></LearningGoals>
                {/* <NotesInputField id="learning_goals" /> */}
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

export default MatchInfoFull;