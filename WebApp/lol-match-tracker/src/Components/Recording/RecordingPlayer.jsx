import VideoPlayer from '../Video/VideoPlayer'
import EditableText from '../Common/EditableText'

import './Recording.css'


//TODO: Replace the TextArea for Notes with a <Notes /> component
//That is a text editor type thing, similar to the text area when adding a comment in Azure DevOp
export default function RecordingPlayer(props){

	const editTitle = (title) => {
		console.log('title has been edited to: ', title)
	}

	const editDate = (date) => {

	}

	return(
		<div className="recording-player">
			<EditableText element='h1' bold id="title" onEdit={editTitle}>Something here</EditableText>
			<div className="video-player-overlay">
				<VideoPlayer />
			</div>
			<EditableText element='p' id='date' onEdit={editDate}>Date</EditableText>
			<h2>Notes</h2>
			<textarea id="notes" rows="50" cols="130" />
		</div>
	)
}