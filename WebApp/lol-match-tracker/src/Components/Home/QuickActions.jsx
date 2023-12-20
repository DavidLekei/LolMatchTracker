import StartRecordingDialog from '../Recording/StartRecordingDialog'
import Button from '@mui/material/Button'

export default function QuickActions() {


	//TODO: Make this configurable in Settings, to allow user to choose which pages they want the quick actions to display
	//And then we should be able to implement that here using something like 'if window.location.pathname IN [quickactionpathnames]'
	if(window.location.pathname == '/home'){
		return(
			<div style={{width:'100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
				<StartRecordingDialog />
				<Button variant="contained" color="success">Start a Journey</Button>
				<Button variant="contained" color="secondary">New Note</Button>
			</div>
		)
	}
}