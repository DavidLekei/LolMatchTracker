import {useState} from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';

export default function SaveRecordingModal(props){

	const [open, setOpen] = useState(props.open)
	const [title, setTitle] = useState('loltitle1')

	const handleSave = () => {
		props.onSave(title)
	}

	return(
		<div>
			<Dialog open={open} onClose={props.onCancel}>
				<DialogTitle>Save Recording</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You may choose to give the recording a title now
					</DialogContentText>
					<TextField
						margin="dense"
						id="new-recording-name"
						label="Title"
						fullWidth
						variant="standard"
						onChange={(e) => {setTitle(e.target.value)}}
					/>
					<br></br>
					<br></br>
					<br></br>
					<DialogContentText>
						Link to your latest match?
					</DialogContentText>
					<Checkbox defaultChecked />
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleSave}>Save</Button>
					<Button onClick={props.onCancel}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}