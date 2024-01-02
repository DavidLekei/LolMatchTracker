import './Account.css'

import {useState} from 'react'

import {Link} from 'react-router-dom'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import CircularProgress from '@mui/material/CircularProgress';

export default function AccountSettings(props){

    const handleSubmit = () => {
      console.log('submitted')
    }


    return(
        <div className="container" id="account-settings">
          <div className="inner-container">
            <h1>Account Settings</h1>
              <div>
                <Link to="/changepassword">
                  <Button variant="contained">Change your password</Button>
                </Link>
              </div>
                {/* <div className="request-input">
                  <TextField className="full-width" id="request-riot-account" name="riot_account" label="Riot Account Name" required />
                </div> */}
                {/* <div className="request-input" style={{width:'75%'}}>
                  <Button className="request-input" variant="contained" type="submit">Sign Up</Button>
                </div> */}
          </div>
        </div>
    )
}