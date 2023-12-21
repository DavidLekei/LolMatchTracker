import StartRecordingDialog from '../Recording/StartRecordingDialog'
import Button from '@mui/material/Button'

export default function QuickActions() {


	//TODO: Make this configurable in Settings, to allow user to choose which pages they want the quick actions to display
	//And then we should be able to implement that here using something like 'if window.location.pathname IN [quickactionpathnames]'
	if(window.location.pathname == '/home'){
		return(
			<div id="quick-actions" style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
				<StartRecordingDialog />
				<Button sx={{fontSize:'12px', backgroundColor:'#78B7EB'}} variant="contained">Start a Journey</Button>
				<Button sx={{fontSize:'12px',backgroundColor:'#55616B'}} variant="contained">New Note</Button>
			</div>
		)
	}
}