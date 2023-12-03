export default function Video(props){

	console.log('video props: ', props)

	return(
		<video id="recording-video-player" controls preload='auto' width='1080'>
			{/*<source src="/video/1.mp4" type="video/mp4" />*/}
			<source src={`http://localhost:8080/recordings/${props.videoId}?userId=${props.userId}`} type="video/mp4"/>
		</video>
	)
}