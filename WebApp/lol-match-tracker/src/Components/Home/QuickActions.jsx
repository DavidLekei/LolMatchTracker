import StartRecordingDialog from '../Recording/StartRecordingDialog'
import Button from '@mui/material/Button'

export default function QuickActions() {
	return(
		<div style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
			<StartRecordingDialog />
			<Button variant="contained" color="success">Start a Journey</Button>
			<Button variant="contained" color="secondary">New Note</Button>
		</div>
	)
}