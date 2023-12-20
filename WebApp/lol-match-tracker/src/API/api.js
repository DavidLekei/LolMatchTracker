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
	const BASE_API_URL = `http://localhost:8080`

	//TODO: Create a 'SettingsContext' to get user settings

	const getRecordings = async (callback) => {
		get(`${BASE_API_URL}/recordings?username=${user.username}`, callback)
	}

	const getRecordingData = async (videoId, userId, callback) => {
		get(`${BASE_API_URL}/recordings/${videoId}?username=${user.username}`, callback)
	}

	const getSettings = async (callback) => {
		
		const mockSettings = {
	        'general': {
	            'dark_mode':true,
	        },
	        'account': {
	            'riot_account_name':'test name',
	        },
	        'home': {
	            'num_recent': 2,
	        },
	        'matches': {

	        },
	        'recording': {
	            'record_audio': false,
	            'enable_focus_mode': true,
	            'download_recording': false,
	            'link_recording_to_most_recent': true,
	        }
	    }

		callback(mockSettings)
		//get(`${BASE_API_URL}/settings?username=${user.username}`)
	}

	const getNote = async (noteId, callback) => {
		const mockNote = {
			title: 'Taliyah',
			text: "After ulting, be patient when jumping off the wall, and when using abilities after jumping off. <span class='bold'>Many</span> players will panic around the wall"
		}

		callback(mockNote)


		//get(`${BASE_API_URL}/notes/${noteId}?username=${user.username}`, setNote)
	}

	const saveNote = async (note, saveComplete) => {
		console.log('saving note (if note id is null, API server responsible for creating a new note): ', note)
		setTimeout(() => {
			saveComplete(true)
		}, 1500)
	}

	const api = {
		getRecordings: getRecordings,
		getRecordingData: getRecordingData,
		getSettings: getSettings,
		saveNote: saveNote,
		getNote: getNote,
	}

	return api
}