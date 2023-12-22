import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import StopIcon from '@mui/icons-material/Stop';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

import {useState, useEffect} from 'react'

import './Video.css'
import AddAnnotation from './AddAnnotation'

export default function VideoControls(props){

	const [volume, setVolume] = useState(30);
	const [progress, setProgress] = useState(0)
	const [playing, setPlaying] = useState(false)
	const [isFullscreen, setIsFullscreen] = useState(false)
	const [muted, setMuted] = useState(false)
	const [volumeWhenMuted, setVolumeWhenMuted] = useState(volume)

	const handleVolumeChange = (event, newValue) => {
		getVideo().volume = (volume/100)
	    setVolume(newValue);
	};

	const getVideo = () => {
		return document.getElementById('recording-video-player')
	}

	const play = () => {
		getVideo().play()
		setPlaying(true)
	}

	const pause = () => {
		getVideo().pause()
		setPlaying(false)
	}

	const stop = () => {
		pause()
		getVideo().currentTime = 0
		setPlaying(false)
	}

	const mute = () => {
		getVideo().volume = 0.0
		setVolumeWhenMuted(volume)
		setVolume(0)
		setMuted(true)
	}

	const unmute = () => {
		getVideo().volume = volumeWhenMuted/100
		setVolume(volumeWhenMuted)
		setMuted(false)
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

	const seek = (e) => {
		const video = getVideo()
		const seekTo = (e.target.value / 100) * video.duration
		setProgress(e.target.value)
		video.currentTime = seekTo
	}

	const addAnnotation = () => {
		pause()
		const video = getVideo()
		const currentTime = video.currentTime
		const progressBar = document.getElementById('progress-bar')
		const annotationContainer = document.getElementById('annotation-container')
		const annotationInput = document.getElementById('annotation-input')
		annotationInput.style = `margin-left:${currentTime * 2}px`
		annotationContainer.className = ""
		annotationInput.focus()
	}

	useEffect(() => {
		getVideo().addEventListener('stalled', (event) => {
			console.log('stalled')
		})

		document.getElementById('video-player-overlay').addEventListener("mouseenter", (event) => {
			document.getElementById('video-controls').className = ""
		})

		document.getElementById('video-player-overlay').addEventListener("mouseleave", (event) => {
			document.getElementById('video-controls').className = "hidden"
			document.getElementById('annotation-container').className = "hidden"
		})

		getVideo().addEventListener('timeupdate', (event) => {
			const currentTime = getVideo().currentTime
			const duration = getVideo().duration
			const progressBar = document.getElementById('progress-bar')
			progressBar.value = (currentTime / duration) * 100
		})

		document.getElementById('annotation-input').addEventListener('keyup', (event) => {
			if(event.key == 'Enter'){
				const annotationContainer = document.getElementById('annotation-container')
				const annotationInput = document.getElementById('annotation-input')
				const currentTime = getVideo().currentTime

				let minutes = Math.floor(currentTime / 60)
				let seconds = Math.floor(currentTime % 60)

				if(minutes < 10){
					minutes = '0' + minutes
				}

				if(seconds < 10){
					seconds = '0' + seconds
				}

				const time = minutes + ':' + seconds

				const annotation = '@' + time + ' - ' + annotationInput.value + '\n'
				const notes = document.getElementById('textbox').innerText += annotation
				annotationInput.value = ""
				annotationContainer.className = "hidden"
			}
		})

	}, [])

	return(
		<div id="video-controls">
			<AddAnnotation />
			<div id="progress-bar-container" className="">
				<input id="progress-bar" className="" type="range" value={progress} min="0" max="100" step="0.25" onChange={seek}/>
			</div>
			<div className="video-control-buttons">
				<div className="control-group playback-controls">
					{playing ? <PauseOutlinedIcon className="video-player-icon" onClick={pause}/> : <PlayArrowIcon className="video-player-icon" onClick={play}/>}
					<StopIcon className="video-player-icon" onClick={stop}/>
				</div>
				<div className="control-group  other-controls">
					<TextSnippetOutlinedIcon className="video-player-icon" onClick={addAnnotation}/>
					<Box sx={{ width: 200 }}>
						<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
						  {muted ? <VolumeOffOutlinedIcon id="muted-icon" className="video-player-icon" onClick={unmute}/> : <VolumeDown id="volume-down" className="video-player-icon" onClick={mute}/>}
						  <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
						</Stack>
					</Box>
					{isFullscreen ? <FullscreenExitIcon id="fullscreenexit-icon" className="video-player-icon" onClick={exitFullscreen} /> : <FullscreenIcon id="fullscreen-icon" className="video-player-icon" onClick={fullscreen} />}
				</div>
			</div>
		</div>
	)
}