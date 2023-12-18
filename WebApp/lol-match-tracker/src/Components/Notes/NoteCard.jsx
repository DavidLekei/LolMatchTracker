import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import './Notes.css'

export default function NoteCard(props){
	return(
		<Box className="note-card"
			sx={{
				display: 'flex',
				flexWrap: 'wrap',
				alignItems:'center',
				justifyContent:'center',
				'& > :not(style)': {
					m: 1,
					width:256,
					height:256,
				},
			}}
		>
			<Paper elevation={10} style={{textAlign:'left', padding:'15px'}}>
				<h2>{props.title}</h2>
				<p>{props.text}</p>
			</Paper>
		</Box>
	)
}