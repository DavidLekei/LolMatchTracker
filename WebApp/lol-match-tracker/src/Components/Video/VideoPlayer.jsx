import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

import Video from './Video'

import {useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

export default function VideoPlayer(props){

	const getVideo = () => {
		return document.getElementById('recording-video-player')
	}

	const play = () => {
		getVideo().play()
	}

	const pause = () => {
		getVideo().pause()
	}

	const stop = () => {
		pause()
		getVideo().currentTime = 0
	}

	const {videoId} = useParams()

	const [videoData, setVideoData] = useState()

	return(
		<div className="video-player-container">
			<div className="video-controls">
				<PlayArrowOutlinedIcon onClick={play}/>
				<PauseOutlinedIcon onClick={pause}/>
				<StopOutlinedIcon onClick={stop}/>
				<TextSnippetOutlinedIcon />
			</div>
			<Video className="video-player" videoId={videoId} userId="1"/>
		</div>
	)
}