import {useState, useContext} from 'react'

import { SettingsContext } from './SettingsProvider';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Settings.css'

export default function Settings(props){

	const settings = useContext(SettingsContext)

	const [darkMode, setDarkMode] = useState(settings.general.dark_mode)
	const [riotAccountName, setRiotAccountName] = useState(settings.account.riot_account_name)
	const [numberOfMatches, setNumberOfMatches] = useState(settings.home.num_recent)
	const [recordAudio, setRecordAudio] = useState(settings.recording.record_audio)
	const [enableFocusMode, setEnableFocusMode] = useState(settings.recording.enable_focus_mode)
	const [downloadRecording, setDownloadRecording] = useState(settings.recording.download_recording)
	const [linkRecordingToMostRecent, setLinkRecordingToMostRecent] = useState(settings.recording.link_recording_to_most_recent)
	
	const handleNumberOfMatchesChange = (e) => {
		setNumberOfMatches(e.target.value)
	}

	const NumberOfMatchesSelect = (props) => {
		return(
			<FormControl style={{marginLeft:'50px'}} >
		        <Select
		          labelId="demo-simple-select-label"
		          id="demo-simple-select"
		          value={numberOfMatches}
		          label=""
		          onChange={handleNumberOfMatchesChange}
		        >
		          <MenuItem value={1}>1</MenuItem>
		          <MenuItem value={2}>2</MenuItem>
		          <MenuItem value={3}>3</MenuItem>
		        </Select>
		     </FormControl>
		)
	}

	return(
		<div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
			<h1>Settings</h1>
			<div>
			</div>
			<div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}> 
				<div style={{width:'50%'}}>
					<h2>General</h2>
					<FormGroup>
						<FormControlLabel control={darkMode ? <Switch defaultChecked/> : <Switch />} label="Dark Mode" />
					</FormGroup>
				</div>
				<div style={{width:'50%'}}>
					<h2>Account</h2>
					<FormGroup>
						<div style={{display:'flex', flexDirection:'row'}}>
							<p>Riot account name</p>
							<TextField id="outlined-basic" variant="outlined" style={{marginLeft:"50px"}} value={riotAccountName} />
						</div>
					</FormGroup>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Home</h2>
					<FormGroup>
						<div style={{display:'flex', flexDirection:'row'}}>
							<p>Number of recent matches to display</p>
							<NumberOfMatchesSelect />
						</div>
					</FormGroup>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Matches</h2>
					<FormGroup>
						<FormControlLabel control={<Switch />} label="Something regarding the matches page" />
					</FormGroup>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Recording</h2>
					<FormGroup>
						<FormControlLabel control={recordAudio ? <Switch defaultChecked /> : <Switch />} label="Record audio by default" />
						<FormControlLabel control={<Switch defaultChecked />} label="Automatically enable Focus Mode when Recording starts" />
						<FormControlLabel control={<Switch />} label="Automatically download Recordings" />
						<FormControlLabel control={<Switch />} label="Automatically link Recordings to most recently played match" />
					</FormGroup>
				</div>
			</div>
		</div>
	)
}