import {useContext} from 'react'

import { AuthContext } from '../Auth/AuthenticationProvider';

async function get(url, callback){
	await fetch(url).then((res) => {
		if(res.ok){
			res.json().then((data) => {
				callback(data)
			})
		}
	})
}

async function post(url, headers, body, callback){
	await fetch(url, {
		method: 'POST',
		headers: headers,
		body: body
	}).then((res) => {
		if(res.ok){
			res.json().then((data) => {
				callback(data)
			})
		}
	})
}

export default function API(){
	const {user} = useContext(AuthContext)

	//TODO: Create a 'SettingsContext' to get user settings

	const getRecordings = async (callback) => {
		get(`http://localhost:8080/recordings?username=${user.username}`, callback)
	}

	const getRecordingData = async (videoId, userId, callback) => {
		get(`http://localhost/8080/recordings/${videoId}?username=${user.username}`, callback)
	}

	const api = {
		getRecordings: getRecordings,
		getRecordingData: getRecordingData
	}

	return api
}