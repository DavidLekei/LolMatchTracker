import {useEffect, useState} from 'react'

import TextField from '@mui/material/TextField'
import SvgIcon from '@mui/material/SvgIcon'

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CircularProgress from '@mui/material/CircularProgress';

import './Common.css'

const styles = {
	noteContainer: {
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		height: '80%',
		justifyContent: 'space-evenly'
	},
	textboxcontainer: {
		width:'100%',
		height: '100%',
		marginTop:'2%',
		border:'1px solid rgba(0, 0, 0, 0.23)',
    	borderRadius:'4px 4px 0px 0px'
	},
	textboxcontrols:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-between',
		width:'100%',
		padding:'5px 0px 5px 5px'
	}
}

function TextBoxControls(props){

	const [saving, setSaving] = useState(false)
	const [saveSuccess, setSaveSuccess] = useState(false)
	const [boldEnabled, setBoldEnabled] = useState(false)
	const [italicsEnabled, setItalicsEnabled] = useState(false)


	const customButtons = props.buttons.map((button, index) => {
		return <SvgIcon onClick={button.handler} sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}>{button.icon}</SvgIcon>
	})

	/*
	TODO:
		Remove TextEffect: If TextEffect is already applied to the selection (ie the entire range is under the same parent element <span>), remove the parent element
		Combine TextEffects: Example: Italicized text is highlighted and the Bold button is pressed, the Italizced text should now be both Bold and Italicized
		Fix the TextBoxControls height growing during Saving due to the Spinner being too large
		Implement the rest of the text effect's (underline, size, color, spellcheck, list)
		The handleSave/handleDelete functions should really be implemented by the parent container and be passed in via props to make this component truly de-coupled to this Notes page
		Maybe the API server can handle trimming 'loose' <span> tags, so it's not done client side, but can be processed before storing in the database
	*/

	const applyTextEffect = (effect, effecteEnabled, enableEffectFunction) => {

		if(window.getSelection().type == "Caret"){
			enableEffectFunction(!effecteEnabled)
			return
		}

		const range = window.getSelection().getRangeAt(0)

		if(range.endContainer == range.startContainer){ //Then we know there are NOT any <span> elements in the middle of the range
			const span = document.createElement("span")
			span.classList.add(effect)
			span.appendChild(range.extractContents())
			range.insertNode(span)
			return
		}else{

			const span = document.createElement("span")
			let prevStyles = []

			var start = range.startContainer.data.substring(range.startOffset, range.startContainer.data.length)
			var end = range.endContainer.data.substring(0, range.endOffset)

			var sibling = range.startContainer.nextSibling

			while(sibling != null && sibling != range.endContainer && sibling != range.endContainer.parentNode){

				if(sibling.nodeName == "SPAN"){
					prevStyles.concat(sibling.classList)
					start = start + sibling.innerText
				}

				if(sibling.nodeName == "#text"){
					start = start + sibling.data
				}

				sibling = sibling.nextSibling
			}

			const data = start + end

			range.extractContents()
			span.innerText = data
			prevStyles.forEach((style) => {
				span.classList.add(style)
			})
			span.classList.add(effect)
			range.insertNode(span)
		}
	}


	const handleBold = (e) => {
		applyTextEffect('bold', boldEnabled, setBoldEnabled)
	}

	const handleItalics = (e) => {
		applyTextEffect('italic', italicsEnabled, setItalicsEnabled)
	}

	const handleUnderline = (e) => {

	}

	const handleFontSize = (e) => {

	}

	const handleFontColor = (e) => {

	}

	const handleSpellCheck = (e) => {

	}

	const handleAddList = (e) => {

	}

	const handleSave = (e) => {
		setSaving(true)
		props.onSave(document.getElementById('textbox').innerHTML, (result) => {
			setSaveSuccess(result)
			setSaving(false)

			setTimeout(() => {
				setSaveSuccess(false)
			}, 1000)
		})
	}

	const handleDelete = (e) => {

	}

	useEffect(() => {

		const textboxcontainer = document.getElementById('textbox')
		const controlsContainer = document.getElementById('textbox-controls-container')

		controlsContainer.onmousedown = (e) => {
			e.preventDefault()
		}
		textboxcontainer.onfocus = (e) => {
			const controlsContainer = document.getElementById('textbox-controls-container')
			controlsContainer.classList.remove('textbox-unfocused')
			controlsContainer.classList.add('textbox-focused')
		}
		textboxcontainer.onblur = (e) => {
			const controlsContainer = document.getElementById('textbox-controls-container')
			controlsContainer.classList.add('textbox-unfocused')
			controlsContainer.classList.remove('textbox-focused')
		}
	})

	return(
		<div id="textbox-controls-container" className="textbox-unfocused" style={styles.textboxcontrols}>
			<div style={{display:'flex', flexDirection:'row'}}>
				<FormatBoldIcon onClick={handleBold} sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon ${boldEnabled ? 'enabled' : ''}`}/>
			<FormatItalicIcon onClick={handleItalics} sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon ${italicsEnabled ? 'enabled' : ''}`}/>
			<FormatUnderlinedIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}/>
			<FormatSizeIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}/>
			<FormatColorTextIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}/>
			<SpellcheckIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}/>
			<FormatListBulletedIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className={`textbox-control-icon`}/>
			</div>
			<div id="custom-buttoms">
				{customButtons}
			</div>
			<div style={{display:'flex', flexDirection:'row'}}>
				{saveSuccess ? <DoneOutlinedIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px', color:'green'}} className="textbox-control-icon"/> : null}
				{saving ? <CircularProgress sx={{width:'.5em', height:'.5em', marginRight:'15px'}} /> : <SaveOutlinedIcon onClick={handleSave} sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className="textbox-control-icon"/>}
				<DeleteOutlinedIcon sx={{width:'1.25em', height:'1.25em', marginRight:'15px'}} className="textbox-control-icon"/>
				{/*<SvgIcon sx={{width:'1.5em', height:'1.5em'}}><HelpOutlineIcon className="textbox-control-icon"/></SvgIcon>*/}
			</div>
		</div>
	)
}

export default function TextBox(props){
	return(
		<div style={styles.noteContainer}>
			<div id='textbox-container' style={styles.textboxcontainer}>
				<div id="textbox" style={{height:'100%'}} contentEditable="true"></div>
				{/*<textarea id="textbox" style={{height:'100%'}} placeholder="Enter information about a Champion, a Match, etc..."/>*/}
			</div>
			<TextBoxControls onSave={props.onSave} buttons={props.buttons}/>
		</div>
	)
}