import VideoPlayer from '../Video/VideoPlayer'
import EditableText from '../Common/EditableText'

import './Recording.css'

export default function RecordingPlayer(props){

	const editTitle = (title) => {
		console.log('title has been edited to: ', title)
	}

	return(
		<div className="recording-player">
			<EditableText element='h1' bold id="title" onEdit={editTitle}>Something here</EditableText>
			<VideoPlayer />
		</div>
	)
}