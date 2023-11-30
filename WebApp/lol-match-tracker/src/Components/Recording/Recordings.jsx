export default function Recordings(props){
	return(
		<div>
			<h1>Recordings</h1>
			<video controls preload='auto' width='1080'>
				<source src='http://localhost:8080/recordings?videoId=1&userId=1' />
			</video>
		</div>
	)
}