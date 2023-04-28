import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import Button from '@mui/material/Button';

class AddMatchControls extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{height:"100px;", marginTop:"15px"}}>
                <Link className={``} to={`/matches/new`}>
                    <Button variant="contained" color="success">Add Match</Button>
                </Link>
                <Button variant="contained" style={{marginLeft:"15px"}}>Import from Riot</Button>
            </div>
        )
    }
}

export default AddMatchControls;