import Recording from './Recording'

import Button from '@mui/material/Button'

import './Recording.css'

export default function Recordings(props){

	let video = document.getElementById('recording-video-player')

	const checkVideo = () => {
		console.log('?')

		// video.addEventListener('seeking', (e) => {
		// 	console.log(e)
		// })
		console.log(video.seekable.start(0), ' - ', video.seekable.end(0))
	}

	return(
		<div className="pane">
			<h1 className="white">Recordings</h1>
			{/*<Recording />*/}
			<video id="recording-video-player" controls preload='auto' width='1080'>
				{/*<source src="/video/1.mp4" type="video/mp4" />*/}
				<source src='http://localhost:8080/recordings?videoId=1&userId=1' type="video/mp4"/>
			</video>

			<Button variant="contained" onClick={checkVideo}>Check Video</Button>
		</div>
	)
}