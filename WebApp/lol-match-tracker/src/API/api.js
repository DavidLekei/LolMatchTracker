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

export async function getRecordings(userId, callback){
	get(`http://localhost:8080/recordings?userId=${userId}`, callback)
}

export async function getRecordingData(videoId, userId, callback){
	get(`http://localhost/8080/recordings/${videoId}?userId=${userId}`, callback)
}