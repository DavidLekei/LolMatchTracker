import Video from './Video'

import {useParams} from 'react-router-dom'

export default function VideoPlayer(props){

	const {videoId} = useParams()

	return(
		<div className="video-player-container">
			<Video videoId={videoId} userId="1" />
		</div>
	)
}