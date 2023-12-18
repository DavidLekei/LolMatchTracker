import React, {Component} from 'react';

import NoteCard from './NoteCard'

import './NotesPane.css'

class NotesPane extends Component{
    render(){
        return(
            <div>
                <h1>Notes</h1>
                <div className="" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap'}}>
                    <NoteCard title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                    <NoteCard title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                    <NoteCard title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                    <NoteCard title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                    <NoteCard title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                    <NoteCard title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                    <NoteCard title="Taliyah" text="After ulting, be patient when jumping off the wall, and when using abilities after jumping off. Many players will panic around the wall"/>
                    <NoteCard title="Ahri vs Sylas" text="HOLD CHARM! If you miss a charm, he has 9 seconds to all in, and he will win"/>
                    <NoteCard title="Ekko Mid" text="Be patient, CS under tower. Ekko doesn't have very strong laning early on, but can wave clear super well post level 7. Just be patient!"/>
                </div>
            </div>
        )
    }
}

export default NotesPane;