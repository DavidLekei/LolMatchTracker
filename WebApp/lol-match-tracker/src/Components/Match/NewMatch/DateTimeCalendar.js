import React, {Component} from 'react';

import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'

export default function DateTimeCalendar(props){
    return(
        <div>
            <DateTimePicker label={props.label}></DateTimePicker>
        </div>
    )
}