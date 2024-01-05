import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';

import {Link} from 'react-router-dom'

import './Notes.css'

export default function NoteCard(props){


	if(props.add){
		return(
			<Link to='/notes/new'>
				<Box 
					className="note-card"
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
					<Paper elevation={10} style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'15px'}}>
						<AddIcon fontSize="large"/>
					</Paper>
				</Box>
			</Link>
		)
	}

	return(
		<Link to={`/notes/${props.noteId}`}>
			<Box 
				className="note-card"
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