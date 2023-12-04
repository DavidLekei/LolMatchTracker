import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

import {useState} from 'react'

import './Common.css'

export default function EditableText(props){

	let element
	const [text, setText] = useState(props.children)
	const [editing, setEditing] = useState(false)

	const getElement = () => {
		return document.getElementById(props.id)
	}

	const handleEdit = (e) =>{
		const _element = getElement()
		const done = document.getElementById('done-icon')

		_element.contentEditable=true
		setText(text)
		setEditing(true)
	}

	const handleDone = (e) =>{
		const _element = getElement()
		_element.contentEditable = false
		setText(_element.innerText)
		setEditing(false)

		if(_element.innerText != text){
			props.onEdit(_element.innerText)
		}
	}

	const handleCancel = (e) =>{
		const _element = getElement()
		_element.contentEditable = false
		_element.innerText = text
		setEditing(false)
	}


	let editIcon = <span id="edit-icon" className="editable-text-icon" onClick={handleEdit}>{props.icon ? props.icon : <EditOutlinedIcon />}</span>
	let doneIcon = <span id="done-icon" className="editable-text-icon" onClick={handleDone}>{props.doneIcon ? props.doneIcon : <DoneOutlinedIcon />}</span>
	let cancelIcon = <span id="cancel-icon" className="editable-text-icon" onClick={handleCancel}>{props.cancelIcon ? props.cancelIcon : <ClearOutlinedIcon />}</span>

	switch(props.element){

	case 'p':
		element = <p id={props.id}>{text}</p>
		break;

	case 'h1':
		element = <h1 id={props.id}>{text}</h1>
		break;

	case 'h2':
		element = <h2 id={props.id}>{text}</h2>
		break;

	case 'h3':
		element = <h3 id={props.id}>{text}</h3>
		break;

	case 'h4':
		element = <h4 id={props.id}>{text}</h4>
		break;

	case 'h5':
		element = <h5 id={props.id}>{text}</h5>
		break;

	case 'h6':
		element = <h6 id={props.id}>{text}</h6>
		break;

	default:
		element = <p id={props.id}>{text}</p>
	}

	if(props.bold){
		element = <b>{element}</b>
	}

	return(
		<div className="editable-text">
			{(!props.editIconPosition || props.editIconPosition === 'start') && !editing?editIcon:null}
			{element}
			{editing?doneIcon:null}
			{editing?cancelIcon:null}
			{props.editIconPosition === 'end' && !editing?editIcon:null}
		</div>
	)
}