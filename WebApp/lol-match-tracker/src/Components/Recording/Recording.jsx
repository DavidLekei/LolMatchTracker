import {Link} from 'react-router-dom'

export default function Recording(props){

	console.log(props)

	return(
		<div className="recording">
			<Link to={`/recordings/${props.data.videoId}`} >
				<img className="recording-thumbnail" src={`/thumbnails/${props.data.thumbnail}`} />
			</Link>
			<div>
				<h2 className="recording-title">{props.data.title}</h2>
				<div className="recording-text">
					<p>{props.data.championPlayed} vs {props.data.championAgainst} - {props.data.outcome}</p>
					<p>{props.data.date}</p>
				</div>
			</div>
		</div>
	)
}