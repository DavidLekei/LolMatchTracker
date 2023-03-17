import React, {Component} from 'react';

import Button from '@mui/material/Button';

import './Notes.css'


class NotesInputField extends Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false,
            visible: false
        }

        this.setVisible = this.setVisible.bind(this);
        this.edit = this.edit.bind(this);
        this.save = this.save.bind(this);
    }

    render(){

        const editing = this.state.editing

        return(
            <div id={this.props.id}  className={`notes-section ${this.state.visible ? "visible" : "hidden"}`}>
                <textarea className={`notes-input`} id={`${this.props.id}-text`} disabled={!editing}></textarea>
                <div className={`notes-btns`}>
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

    setVisible(val){
        this.setState({
            visible: val
        })
    }

    edit(){
        this.setState({
            editing:true
        })
    }

    save(){

        let text = document.getElementById(`${this.props.id}-text`).value;
        console.log("Saving Text: " + text)

        this.setState({
            editing:false
        })
    }
}

export default NotesInputField;