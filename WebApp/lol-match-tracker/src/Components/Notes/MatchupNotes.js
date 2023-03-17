import React, {Component} from 'react';

import Button from '@mui/material/Button';

import './Notes.css'


class MatchupNotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false
        }

        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    render(){

        const editing = this.state.editing

        console.log(this.props.hidden)

        return(
            <div className={`matchup-notes ${this.props.visible ? "visible" : "hidden"}`}>
                <textarea className={`notes-input`} id="matchup-notes-text" disabled={!editing}></textarea>
                <div className={`matchup-btns`}>
                    <Button variant="contained" onClick={this.edit}>Edit</Button>
                    {
                        editing ? 
                        (
                            <Button variant="contained" onClick={this.save}>Save</Button>
                        ) :
                        (
                            <br></br>
                        )
                    }
                </div>
            </div>
        )
    }

    edit(){
        this.setState({
            editing:true
        })
    }

    save(){

        let text = document.getElementById("matchup-notes-text").value;
        console.log(text)

        this.setState({
            editing:false
        })
    }
}

export default MatchupNotes;