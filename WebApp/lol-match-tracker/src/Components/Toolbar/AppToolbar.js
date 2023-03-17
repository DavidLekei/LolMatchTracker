import React, {Component} from 'react';
import './toolbar.css';

import {Link, BrowserRouter as Router} from "react-router-dom";

//Material components
import Button from '@mui/material/Button';

class AppToolbar extends Component{
    render(){
        return(
            <div className="App-toolbar">
                <div className="btn-container">
                    <Button variant="contained">Log In</Button>
                    <Button variant="contained">Sign Up</Button>
                    {/* <Router>
                        <Link to="/login"><Button variant="contained" onClick={this.btn_onclick}>Log in</Button></Link>
                        <Button variant="contained">Sign Up</Button>
                    </Router> */}
                </div>
            </div>
        )
    }

    btn_onclick(){
        alert("Logged in");
    }
}

export default AppToolbar;