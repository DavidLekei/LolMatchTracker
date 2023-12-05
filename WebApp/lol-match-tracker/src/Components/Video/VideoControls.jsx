import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import StopIcon from '@mui/icons-material/Stop';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import {useState, useEffect} from 'react'

import './Video.css'

export default function VideoControls(props){

	const [volume, setVolume] = useState(30);

	const [isFullscreen, setIsFullscreen] = useState(false)

	const handleVolumeChange = (event, newValue) => {
		getVideo().volume = (volume/100)
	    setVolume(newValue);
	};

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

	const mute = () => {
		getVideo().volume = 0.0
		setVolume(0)
	}

	const max = () => {
		getVideo().volume = 1.0
		setVolume(100)
	}

	const fullscreen = () => {
		document.getElementById('video-player-container').requestFullscreen()
		getVideo().width = 1920
		setIsFullscreen(true)
	}

	const exitFullscreen = () => {
		document.exitFullscreen()
		getVideo().width = 1080
		setIsFullscreen(false)
	}

	useEffect(() => {
		document.getElementById('video-player-overlay').addEventListener("mouseenter", (event) => {
			document.getElementById('video-controls').className = "video-controls"
		})

		document.getElementById('video-player-overlay').addEventListener("mouseleave", (event) => {
			document.getElementById('video-controls').className = "video-controls hidden"
		})
	}, [])

	return(
		<div id="video-controls" className="video-controls">
			<div className="control-group playback-controls">
				<PlayArrowIcon className="video-player-icon" onClick={play}/>
				<PauseOutlinedIcon className="video-player-icon" onClick={pause}/>
				<StopIcon className="video-player-icon" onClick={stop}/>
			</div>
			<div className="control-group  other-controls">
				<TextSnippetOutlinedIcon className="video-player-icon" />
				<Box sx={{ width: 200 }}>
					<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
					  <VolumeDown id="volume-down" onClick={mute}/>
					  <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
					  <VolumeUp id="volume-up" onClick={max}/>
					</Stack>
				</Box>
				{isFullscreen ? <FullscreenExitIcon id="fullscreenexit-icon" className="video-player-icon" onClick={exitFullscreen} /> : <FullscreenIcon id="fullscreen-icon" className="video-player-icon" onClick={fullscreen} />}
			</div>
		</div>
	)
}