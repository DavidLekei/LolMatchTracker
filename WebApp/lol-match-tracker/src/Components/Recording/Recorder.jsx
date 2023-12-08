import {useContext} from 'react'

import { AuthContext } from '../../Auth/AuthenticationProvider';

async function uploadVideo(blob, username, token){

	const formData = new FormData()
	formData.append('recording', blob, 'test2')

	await fetch(`http://localhost:8080/recording?username=${username}&token=${token}`, {
			method: "POST",
			body: formData,//blob,//.arrayBuffer(),
			headers:{
				//'Content-Type':'multipart/form-data'
				//'Content-Type':'application/json'
				//'Content-Type':'video/h264',
				//'Access-Control-Allow-Origin':'http://localhost:8080'
			}
		}).then((res) => {
		})
}

export default function Recorder(props){

	const {user} = useContext(AuthContext)

	const constraints = {video: {displaySurface: "monitor", logicalSurface: false}, audio: true, systemAudio:"include"} //TODO: Get audio:true/false from user settings
	let chunks = []

	
	const onSuccess = (stream) => {

		const mediaRecorder = new MediaRecorder(stream, {mimeType: 'video/webm'}) //Will throw an exception for mp4, as Chrome apparently does not support mp4

		mediaRecorder.ondataavailable = (e) => {
			chunks.push(e.data)
		}

		mediaRecorder.onstop = (e) => {
			const blob = new Blob(chunks, {'type' : 'video/webm'})
			chunks = []
			uploadVideo(blob, user.username, user.user_token)
			//const videoURL = window.URL.createObjectURL(blob)
		}


		let stopButton = document.getElementById(props['stopButtonId'])
		stopButton.onclick = () => {
			console.log('stopped')
			mediaRecorder.stop()
			props['callback']()
		}
	

		mediaRecorder.start()
	}

	const onError = (error) => {
		alert('ERROR: Could not start recorder.')
		console.log('error:', error)
		props['callback']()
	}


	const start = () => {
		//First, check to see if the users browser supports this function. TODO: Handle if they don't
		if(navigator.mediaDevices.getDisplayMedia){
			navigator.mediaDevices.getDisplayMedia(constraints).then(onSuccess, onError)
		}
	}

	return({
		start:start,
	})
}