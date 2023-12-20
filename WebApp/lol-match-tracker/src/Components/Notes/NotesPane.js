import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import Button from '@mui/material/Button'

import NoteCard from './NoteCard'

import './NotesPane.css'

/*
TODO: 

    Give each NoteCard a delete button, so that the user doesn't have to open the note to delete it (less clicks the better)
    Ability for users to create 'notes folders' lol this may be a very late feature
    Search bar for the Notes 
*/
export default function NotesPane(props){

    const newNote = () => {

    }

    return(
        <div>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingLeft:'5%', paddingRight:'5%'}}>
                <h1>Notes</h1>
                <Link to="/notes/new" ><Button variant="contained" color="error">New Note</Button></Link>
            </div>
            <div className="" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                <NoteCard noteId='1' title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                <NoteCard noteId='2' title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                <NoteCard noteId='3' title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                <NoteCard noteId='4' title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                <NoteCard noteId='5' title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                <NoteCard noteId='6' title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                <NoteCard noteId='7' title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                <NoteCard noteId='8' title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                <NoteCard noteId='9' title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
            </div>
        </div>
    )
}
