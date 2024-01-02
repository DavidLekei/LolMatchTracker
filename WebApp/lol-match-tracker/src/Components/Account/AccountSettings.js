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
import Stack from '@mui/material/Stack'

function AccountSetting(props){
  return(
    <div>
      <Link to={props.to}>
        <Button variant="contained">{props.text}</Button>
      </Link>
    </div>
  )
}

export default function AccountSettings(props){

    const handleSubmit = () => {
      console.log('submitted')
    }


    return(
        <div className="container" id="account-settings">
          <div className="inner-container">
            <h1>Account Settings</h1>
              <Stack spacing="2">
                <AccountSetting to="/changepassword" text="Change your password" />
                <AccountSetting to="/account/details" text="Update personal details" />
              </Stack>
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