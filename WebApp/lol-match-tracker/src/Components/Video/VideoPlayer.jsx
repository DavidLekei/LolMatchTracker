import Video from './Video'

import {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

export default function VideoPlayer(props){

	const {videoId} = useParams()

	const [videoData, setVideoData] = useState()

	return(
		<div className="video-player-container">
			<Video videoId={videoId} userId="1" />
		</div>
	)
}