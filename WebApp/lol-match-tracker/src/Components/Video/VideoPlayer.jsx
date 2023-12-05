import Video from './Video'
import VideoControls from './VideoControls'

import {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

import './Video.css'

export default function VideoPlayer(props){

	const {videoId} = useParams()

	return(
		<div id="video-player-container" className="video-player-container">
			<Video className="video-player" videoId={videoId} userId="1" />
			<VideoControls />
		</div>
	)
}