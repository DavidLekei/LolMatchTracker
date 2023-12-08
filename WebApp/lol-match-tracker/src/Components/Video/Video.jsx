export default function Video(props){

	return(
		<video id="recording-video-player" preload='auto' width='1080' src={props.url} type="video/mp4">
		</video>
	)
}