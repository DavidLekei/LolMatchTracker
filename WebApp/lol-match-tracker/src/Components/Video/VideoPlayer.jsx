import Video from './Video'
import VideoControls from './VideoControls'

import './Video.css'

export default function VideoPlayer(props){

	return(
		<div id="video-player-container" className="video-player-container">
			<Video className="video-player" url={props.url} />
			<VideoControls />
		</div>
	)
}