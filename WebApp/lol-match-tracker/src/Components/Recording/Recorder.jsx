async function uploadVideo(blob){

	const formData = new FormData()
	formData.append('recording', blob, 'test2')

	await fetch("http://localhost:8080/recording", {
			method: "POST",
			body: formData,//blob,//.arrayBuffer(),
			headers:{
				//'Content-Type':'multipart/form-data'
				//'Content-Type':'application/json'
				//'Content-Type':'video/h264',
				//'Access-Control-Allow-Origin':'http://localhost:8080'
			}
		}).then((res) => {
			console.log('uploadVideo! response')
		})
}

export default function Recorder(props){
	const constraints = {audio: false, video: {displaySurface: "window", logicalSurface: false}} //TODO: Get audio:true/false from user settings
	let chunks = []

	const onSuccess = (stream) => {

		const mediaRecorder = new MediaRecorder(stream)

		mediaRecorder.ondataavailable = (e) => {
			chunks.push(e.data)
		}

		mediaRecorder.onstop = (e) => {
			const blob = new Blob(chunks, {'type' : 'video/h264'})
			chunks = []
			uploadVideo(blob)
			//const videoURL = window.URL.createObjectURL(blob)
		}


		mediaRecorder.start()

		let stopButton = document.getElementById(props['stopButtonId'])
		stopButton.onclick = () => {
			mediaRecorder.stop()
			props['callback']()
		}
	}

	const onError = (error) => {
		alert('ERROR: Could not start recorder.')
		console.log('error:', error)
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