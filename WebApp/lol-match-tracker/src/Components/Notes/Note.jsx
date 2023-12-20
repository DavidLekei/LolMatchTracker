import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField'
import TextBox from '../Common/TextBox'

import API from '../../API/api'

export default function Note(props){
	const {noteId} = useParams()

	const [loading, setLoading] = useState(true)
	const [title, setTitle] = useState('')
	const [note, setNote] = useState('')

	const api = API()

	const handleSave = (data, saveComplete) => {
		api.saveNote({title: title, text: data, id: noteId}, saveComplete)
	}

	useEffect(() => {
		if(noteId){
			api.getNote(noteId, (note) => {
					setNote(note.text)
					setTitle(note.title)
					setLoading(false)
					document.getElementById('textbox').innerHTML = note.text
			})
		}else{
			setLoading(false)
		}
	}, [note])

	if(loading){
		return(<div>Loading</div>)
	}


	return(
		<div style={{height:'100%', marginLeft:'15%', marginRight:'15%', textAlign:'left'}}>
			<TextField onChange={(e) => {setTitle(e.target.value)}} style={{width:'30%'}} label="Title" value={title}/>
			<TextBox onSave={handleSave} text={note}/>
		</div>
	)
}