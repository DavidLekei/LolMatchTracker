import {useState} from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function StartRecordingModal(){

	const [open, setOpen] = useState(false)
	const handleOpen = () => {setOpen(true)}
	const handleClose = () => {setOpen(false)}

	const handleStartRecording = () => {
		console.log("Recording starting...")
	}

	return(
		<div>
			<Button variant="contained">Record</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Start Recording</DialogTitle>
				<DialogContent>
					<DialogContentText>
						You may choose to name the recording now, or later, or use an auto generated file name.
					</DialogContentText>
					<TextField
						margin="dense"
						id="new-recording-name"
						label="File name"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleStartRecording}>Start</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}