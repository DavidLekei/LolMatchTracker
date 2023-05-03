import React, {Component} from 'react';

import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'

export default function DateTimeCalendar(props){
    return(
            <div>
                <h3>{props.label}</h3>
                <DateTimePicker></DateTimePicker>
            </div>
    )
}