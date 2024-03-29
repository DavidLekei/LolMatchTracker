import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'

import { AuthContext } from '../../Auth/AuthenticationProvider';
import VideoPlayer from '../Video/VideoPlayer'
import EditableText from '../Common/EditableText'
import Note from '../Notes/Note'

import './Recording.css'


//TODO: Replace the TextArea for Notes with a <Notes /> component
//That is a text editor type thing, similar to the text area when adding a comment in Azure DevOp
export default function RecordingPlayer(props){

	const {user} = useContext(AuthContext)
	const {videoId} = useParams()

	const editTitle = (title) => {
		console.log('title has been edited to: ', title)
	}

	const editDate = (date) => {

	}

	const [videoUrl, setVideoUrl] = useState(null)

	const getVideo = async () => { await fetch(`http://localhost:8080/recordings/${videoId}?username=${user.username}`, {
			method: 'GET',
			headers: {
				"Accept":"video/mp4",
				"Range":"bytes:0-"
			}
		}).then((res) => {
			if(res.status == 206){
				res.blob()
				.then((data) => {
					const url = URL.createObjectURL(data)
					console.log('url : ', url)
					setVideoUrl(url)
				})
			}
		})
	}

	useEffect(() => {
		getVideo()
	}, [])

	return(
		<div className="recording-player">
			<EditableText element='h1' bold id="title" onEdit={editTitle}>Something here</EditableText>
			<div id="video-player-overlay" className="video-player-overlay">
				<VideoPlayer url={videoUrl}/>
			</div>
			{/*<EditableText element='p' id='date' onEdit={editDate}>Date</EditableText>*/}
			<div style={{width:'100%', textAlign:'left', marginTop:'3rem', minHeight:'50rem'}}>
				<h2>Notes</h2>
				<Note id="notes" />
			</div>
		</div>
	)
}