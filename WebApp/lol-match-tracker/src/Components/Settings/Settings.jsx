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

function SettingSection(props){
	return(
		<div style={{width:'50%'}}>
				<h2>{props.heading}</h2>
				{props.children}
		</div>
	)
}

function Setting(props){
	return(
		<div>
			<div className="setting">
				{props.setting}
				{props.element}
			</div>
		</div>
	)
}

export default function Settings(props){

	const settings = useContext(SettingsContext)
	console.log('settings: ', settings)

	const [darkMode, setDarkMode] = useState(settings.general.dark_mode)
	const [showLPChanges, setShowLPChanges] = useState(settings.general.show_lp_changes)
	const [riotAccountName, setRiotAccountName] = useState(settings.account.riot_account_name)
	const [numberOfMatches, setNumberOfMatches] = useState(settings.home.num_recent)
	const [numberOfNotes, setNumberOfNotes] = useState(settings.home.num_notes)
	const [recordAudio, setRecordAudio] = useState(settings.recording.record_audio)
	const [enableFocusMode, setEnableFocusMode] = useState(settings.recording.enable_focus_mode)
	const [downloadRecording, setDownloadRecording] = useState(settings.recording.download_recording)
	const [linkRecordingToMostRecent, setLinkRecordingToMostRecent] = useState(settings.recording.link_recording_to_most_recent)
	const [quickActionsEveryPage, setQuickActionsEveryPage] = useState(settings.quick_actions.every_page)
	const [enabledQuickActions, setEnabledQuickActions] = useState(settings.quick_actions.enabled)

	const handleNumberOfMatchesChange = (e) => {
		setNumberOfMatches(e.target.value)
	}

	const handleNumberOfNotesChange = (e) => {
		setNumberOfNotes(e.target.value)
	}

	const ranks = ['Unranked', 'Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Emerald', 'Diamond', 'Master', 'Grandmaster', 'Challenger']

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

	//TODO Make the MenuItems or whatever, have sub-sections ie - Diamond / Diamond 1, Diamond2, Diamond 3, Diamond 4
	const RankSelect = (props) => {
		return(
			<FormControl sx={{width:'25%'}} >
				<Select
					id={props.id}
					value={props.setting}
					label=""
					onChange={() => {console.log('todo: change this handler')}}
				>
					{ranks.map((rank, index) => {
						return(
							<MenuItem value={rank}>{rank}</MenuItem>
						)
					})}
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
				<SettingSection heading="General">
					<Setting setting="Dark mode" element={darkMode ? <Switch defaultChecked /> : <Switch />}/>
					<Setting setting="Show LP changes" element={showLPChanges ? <Switch defaultChecked /> : <Switch />} />
				</SettingSection>
				<SettingSection heading="Account">
					<Setting setting="Riot account name" element={<TextField id="outlined-basic" variant="outlined" style={{marginLeft:"50px"}} value={riotAccountName} />} />
					<Setting setting="Starting rank" element={<RankSelect id="setting-starting-rank" setting={settings.account.starting_rank}/>} />
					<Setting setting="Current rank" element={<RankSelect id="setting-current-rank" setting={settings.account.current_rank}/>} />
					<Setting setting="Goal rank" element={<RankSelect id="setting-goal-rank" setting={settings.account.goal_rank}/>} />
				</SettingSection> 
				<SettingSection heading="Home">
					<Setting setting="Number of recent matches to display" element={<NumberOfMatchesSelect />} />
					<Setting setting="Number of recent notes to display" element={<NumberOfNotesSelect />} />
					<Setting setting="Display progress graph" element={<Switch />} />
				</SettingSection>
				<SettingSection heading="Matches">
					<Setting setting="Something regarding the matches page" element={<Switch />} />
				</SettingSection>
				<SettingSection heading="Recording">
					<Setting setting="Record audio by default" element={recordAudio ? <Switch defaultChecked /> : <Switch />} />
					<Setting setting="Automatically enable Focus Mode when Recording starts" element={enableFocusMode ? <Switch defaultChecked /> : <Switch />} />
					<Setting setting="Automatically download Recordings" element={downloadRecording? <Switch defaultChecked /> : <Switch />} />
					<Setting setting="Automatically link Recordings to most recently played match" element={linkRecordingToMostRecent? <Switch defaultChecked/> : <Switch />} />
				</SettingSection>
				<SettingSection heading="Quick Actions">
					<Setting setting="Show quick actions on every page" element={quickActionsEveryPage ? <Switch defaultChecked /> : <Switch />} />
					<Setting setting="Enabled quick actions" element={<div>settings.quick_actions.enabled</div>} />
				</SettingSection>
			</div>
		</div>
	)
}