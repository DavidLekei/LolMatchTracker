import React, {Component} from 'react';

import {Link} from 'react-router-dom'

import Button from '@mui/material/Button';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'

export default function CreateMatchPage(props){

    const pageStyles = {
        container: {
            display: "flex",
            flexDirection:"column",
            width: "100%",
            minHeight:"92%",
            backgroundColor: "white",
            marginBottom:"50px",
        }
    }

    return(
        <div style={pageStyles.container}>
            <h1>Add a New Match</h1>
            <DateTimePicker label="Basic date time picker" />
        </div>
    )

}