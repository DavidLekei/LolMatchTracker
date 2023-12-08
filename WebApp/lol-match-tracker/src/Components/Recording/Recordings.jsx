import {useState} from 'react'

import VideoPlayer from '../Video/VideoPlayer'
import Recording from './Recording'
import RecordingsControls from './RecordingsControls'
import API from '../../API/api'

import Button from '@mui/material/Button'

import './Recording.css'

export default function Recordings(props){

	const api = API()
	console.log(api)

	const [loaded, setLoaded] = useState(false)
	const [recordings, setRecordings] = useState();

	const onClick = () => {
		window.location = '/recordings/1'
	}

	const createRecordings = (data) => {
		let recordings = data.map((recording, index) => {
			return(
				<Recording data={recording} onClick={onClick} />
			)
		})

		setLoaded(true)
		setRecordings(recordings)
	}

	if(!loaded){
		api.getRecordings(createRecordings);
	}

	return(
		<div className="pane">
			<h1 className="white">Recordings</h1>
			<RecordingsControls />
			<div className="recordings-container">
				{recordings ? recordings : <div>Loading</div>}
			</div>

			{/*<VideoPlayer />*/}

			{/*<Button variant="contained" onClick={checkVideo}>Check Video</Button>*/}
		</div>
	)
}