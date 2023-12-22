import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'
import TextField from '@mui/material/TextField'
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
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

	const addLink = () => {
		console.log('adding link')
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

	const buttons = [{icon: <AddLinkOutlinedIcon />, handler: addLink}]

	return(
		<div style={{height:'100%', marginTop:'3rem', textAlign:'left'}}>
			<TextField onChange={(e) => {setTitle(e.target.value)}} style={{width:'30%'}} label="Title" value={title}/>
			<TextBox onSave={handleSave} text={note} buttons={buttons}/>
		</div>
	)
}