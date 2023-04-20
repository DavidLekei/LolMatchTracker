import React, {Component} from 'react';

import Goal from './Goal'
import {FormGroup} from '@mui/material'

import './LearningGoals.css'

class LearningGoals extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }

        this.setVisible = this.setVisible.bind(this);
        this.getGoals = this.getGoals.bind(this);
    }

    getGoals(){
        let mockGoals = {
            goals: [
                {
                    text:"Early ward",
                    complete:false
                },
                {
                    text:"Level 6 roam",
                    complete:false
                },
                {
                    text:"Play for jungle",
                    complete:false
                },
                {
                    text:"What happens if this is long? Does it wrap? I'm not sure lol",
                    comiplete:false
                }
            ]
        };

        return mockGoals;
    }
    
    render(){

        const goalsData = this.getGoals();

        const goals = goalsData.goals.map((id, index) => {
            return <Goal text={goalsData.goals[index].text}/>
        });

        return(
            <div id={`${this.props.id}`} className={`learning-goals-container ${this.state.visible ? "visible" : "hidden"}`}>
                <div className="learning-goals-container">
                    <FormGroup className="learning-goals-fg">
                        {goals}
                    </FormGroup>
                </div>
            </div>
        )
    }

    setVisible(val){
        this.setState({
            visible: val
        })
    }

}

export default LearningGoals;