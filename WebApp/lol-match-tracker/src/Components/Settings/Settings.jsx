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
	const [numberOfNotes, setNumberOfNotes] = useState(3)
	const [recordAudio, setRecordAudio] = useState(settings.recording.record_audio)
	const [enableFocusMode, setEnableFocusMode] = useState(settings.recording.enable_focus_mode)
	const [downloadRecording, setDownloadRecording] = useState(settings.recording.download_recording)
	const [linkRecordingToMostRecent, setLinkRecordingToMostRecent] = useState(settings.recording.link_recording_to_most_recent)
	
	const handleNumberOfMatchesChange = (e) => {
		setNumberOfMatches(e.target.value)
	}

	const handleNumberOfNotesChange = (e) => {
		setNumberOfNotes(e.target.value)
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

	const NumberOfNotesSelect = (props) => {
		return(
			<FormControl style={{marginLeft:'50px'}} >
		        <Select
		          labelId="demo-simple-select-label"
		          id="demo-simple-select"
		          value={numberOfNotes}
		          label=""
		          onChange={handleNumberOfNotesChange}
		        >
		          <MenuItem value={1}>1</MenuItem>
		          <MenuItem value={2}>2</MenuItem>
		          <MenuItem value={3}>3</MenuItem>
		          <MenuItem value={4}>4</MenuItem>
		          <MenuItem value={5}>5</MenuItem>
		          <MenuItem value={6}>6</MenuItem>
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
					<div className="setting">
						<p>Dark mode</p>
						{darkMode ? <Switch defaultChecked /> : <Switch />}
					</div>
					<div className="setting">
						Show LP changes
						<Switch />
					</div>
				</div>
				<div style={{width:'50%'}}>
					<h2>Account</h2>
					<FormGroup>
						<div className="setting">
							<p>Riot account name</p>
							<TextField id="outlined-basic" variant="outlined" style={{marginLeft:"50px"}} value={riotAccountName} />
						</div>
					</FormGroup>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Home</h2>
					<div className="setting">
						<p>Number of recent matches to display</p>
						<NumberOfMatchesSelect />
					</div>
					<div className="setting">
						<p>Number of recent notes to display</p>
						<NumberOfNotesSelect />
					</div>
					<div className="setting">
						<p>Display progress graph</p>
						<Switch />
					</div>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Matches</h2>
					<div className="setting">
						<p>Something regarding the matches page</p>
						<Switch />
					</div>
				</div>
				<br />
				<div style={{width:'50%'}}>
					<h2>Recording</h2>
					<FormGroup>
						<div className="setting">
							<p>Record audio by default</p>
							{recordAudio ? <Switch defaultChecked /> : <Switch />}
						</div>
						<div className="setting">
							<p>Automatically enable Focus Mode when Recording starts</p>
							<Switch defaultChecked />
						</div>
						<div className="setting">
							<p>Automatically download Recordings</p>
							<Switch />
						</div>
						<div className="setting">
							<p>Automatically link Recordings to most recently played match</p>
							<Switch />
						</div>
					</FormGroup>
				</div>
			</div>
		</div>
	)
}