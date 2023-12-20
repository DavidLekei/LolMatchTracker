import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import {Link} from 'react-router-dom'

import './Notes.css'

export default function NoteCard(props){

	const handleClick = () => {
		console.log('notecard clicked with id: ', props.noteId)
	}

	return(
		<Link to={`/notes/${props.noteId}`}>
			<Box 
				className="note-card"
				onClick={handleClick}
				sx={props.small ? {
					'& > :not(style)': {
						m: 1,
						width:256,
						height:256,
					},
				} : {
					'& > :not(style)':{
						m: 1,
						width:400,
						height:400,
					}
				}}
			>
				<Paper elevation={10} style={{textAlign:'left', padding:'15px'}}>
					<h2>{props.title}</h2>
					<p>{props.text}</p>
				</Paper>
			</Box>
		</Link>
	)
}