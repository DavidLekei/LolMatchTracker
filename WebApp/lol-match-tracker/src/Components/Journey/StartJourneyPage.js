import React, {Component} from 'react';

import Button from '@mui/material/Button';

class StartJourneyPage extends Component{
    render(){
        return(
            <div id="start-journey-container" className="column journey justify-center">
                <div className="margin-25">
                    <h1>Start a New Journey!</h1>
                    <Button variant="contained" color="success">Start Now</Button>
                    <div className="font-medium margin-top-10">
                        <p className="">A <span>Journey</span> allows you to track your progress on a <span>specific</span> goal.</p>
                        <p className="">Whether it's learning a new <span>Champion</span>, a new <span>Role</span>, or simply improving a <span>Fundamental</span>, your <span>Journey</span> will allow you to visualize your progress.</p>
                    </div> 
                </div>
            </div>
        )
    }
}

export default StartJourneyPage;