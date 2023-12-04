import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import StopIcon from '@mui/icons-material/Stop';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';

export default function VideoControls(props){

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

	return(
		<div className="video-controls">
			<PlayArrowIcon className="video-player-icon" onClick={play}/>
			<PauseOutlinedIcon className="video-player-icon" onClick={pause}/>
			<StopIcon className="video-player-icon" onClick={stop}/>
			<TextSnippetOutlinedIcon className="video-player-icon" />
		</div>
	)
}