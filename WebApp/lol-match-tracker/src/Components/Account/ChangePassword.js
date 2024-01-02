import {useState, useContext } from 'react';

import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CancellableAction from '../Common/CancellableAction';
import Alert from '@mui/material/Alert';

import API from '../../API/api'
import {AuthContext} from '../../Auth/AuthenticationProvider'

import '../Common/Common.css'


export default function ChangePassword(props){

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const api = API()
    const auth = useContext(AuthContext)

    const handleCancel = () => {
        window.history.back()
    }

    const handleResponse = () => {
        setLoading(false)
        setSuccess(true)
    }

    const handleConfirm = () => {
        const currentPassword = document.getElementById('current_password').value
        const newPassword = document.getElementById('new_password').value

        api.changePassword(currentPassword, newPassword, handleResponse)
        setLoading(true)
    }

    if(loading && !success){
        return(
            <Box sx={{display:'flex'}}>
                <CircularProgress />
            </Box>
        )
    }

    if(!loading && success){
        return(
            <Alert severity="success">Password successfully changed.</Alert>
        )
    }

    return(
        <CancellableAction onCancel={handleCancel} onConfirm={handleConfirm}>
            <h3>Change your password</h3>
            <TextField style={{marginBottom:'25px'}} className="w50" id="current_password" name="current_password" label="Current password" type="password" ></TextField>
            <TextField style={{marginBottom:'25px'}} className="w50" id="new_password" name="new_password" label="New password" type="password"></TextField>
            <TextField style={{marginBottom:'25px'}} className="w50" id="confirm_password" name="confirm_password" label="Confirm new password" type="password"></TextField>
        </CancellableAction>
    )
}