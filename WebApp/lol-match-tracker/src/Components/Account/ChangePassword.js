import { useContext } from 'react';

import { TextField, backdropClasses } from '@mui/material';
import CancellableAction from '../Common/CancellableAction';

import API from '../../API/api'
import {AuthContext} from '../../Auth/AuthenticationProvider'

import '../Common/Common.css'


export default function ChangePassword(props){

    const api = API()
    const auth = useContext(AuthContext)

    const handleCancel = () => {
        window.history.back()
    }

    const handleConfirm = () => {
        const currentPassword = document.getElementById('current_password').value
        const newPassword = document.getElementById('new_password').value

        api.changePassword()
    }

    return(
        <CancellableAction onCancel={handleCancel} onConfirm={handleConfirm}>
            <h3>Change your password</h3>
            <TextField style={{marginBottom:'25px'}} className="w50" id="current_password" name="current_password" label="Current password" ></TextField>
            <TextField style={{marginBottom:'25px'}} className="w50" id="new_password" name="new_password" label="New password" ></TextField>
            <TextField style={{marginBottom:'25px'}} className="w50" id="confirm_password" name="confirm_password" label="Confirm new password"></TextField>
        </CancellableAction>
    )
}