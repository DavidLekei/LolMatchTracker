import {useState} from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Recorder from './Recorder'

export default function StartRecordingDialog(){

	const [open, setOpen] = useState(false)
	const handleOpen = () => {
		setOpen(true)
		handleStartRecording()
	}
	const handleClose = () => {setOpen(false)}

	const recorder = Recorder({stopButtonId: "stop-recording-button", callback: handleClose})

	const handleStartRecording = () => {
		recorder.start()
	}

	return(
		<div>
			<Button variant="contained" onClick={handleOpen}>Record</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Recording in Progress</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Press Stop to end the recording.
					</DialogContentText>
{/*					<TextField
						margin="dense"
						id="new-recording-name"
						label="File name"
						fullWidth
						variant="standard"
					/>*/}
				</DialogContent>
				<DialogActions>
					<Button id="stop-recording-button" variant="contained">Stop</Button>
					{/*<Button onClick={handleStartRecording}>Start</Button>*/}
				</DialogActions>
			</Dialog>
		</div>
	)
}