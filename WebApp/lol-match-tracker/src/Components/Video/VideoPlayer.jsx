import Video from './Video'
import VideoControls from './VideoControls'

import {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

export default function VideoPlayer(props){

	const [showControls, setShowControls] = useState(false)

	const {videoId} = useParams()

	document.getElementById('video-player-overlay').addEventListener("mouseenter", (event) => {
		setShowControls(true)
	})

	document.getElementById('video-player-overlay').addEventListener("mouseleave", (event) => {
		setShowControls(false)
	})

	return(
		<div className="video-player-container">
			<Video className="video-player" videoId={videoId} userId="1" />
			{showControls?<VideoControls />:null}
		</div>
	)
}