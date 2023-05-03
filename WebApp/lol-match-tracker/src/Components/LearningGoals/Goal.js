import React, {Component} from 'react';

import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';

import './LearningGoals.css'

class Goal extends Component{
    
    render(){
        return(
                <FormControlLabel control={<Checkbox color="success"/>} label={this.props.text} />
        )
    }
}

export default Goal;