import {useState, useEffect} from 'react'

export default function Video(props){

	const [videoUrl, setVideoUrl] = useState(null)

	const getVideo = async () => { await fetch(`http://localhost:8080/recordings/${props.videoId}?userId=${props.userId}`, {
			method: 'GET',
			headers: {
				"Accept":"video/mp4",
				"Range":"bytes:0-"
			}
		}).then((res) => {
			console.log('video response code: ', res.status)
			res.blob()
			.then((data) => {
				const url = URL.createObjectURL(data)
				console.log('url : ', url)
				setVideoUrl(url)
			})
		})
	}

	useEffect(() => {
		getVideo()
	}, [])

	return(
		<video id="recording-video-player" preload='auto' width='1080' src={videoUrl} type="video/mp4">
			{/*<source id="video-source" src={videoUrl} type="video/mp4" />*/}
			{/*<source src="/video/1.mp4" type="video/mp4" />*/}
			{/*<source src={`http://localhost:8080/recordings/${props.videoId}?userId=${props.userId}`} type="video/mp4"/>*/}
		</video>
	)
}