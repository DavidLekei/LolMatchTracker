//I think this function is useless, since we're using a <source> element in Video.jsx
export async function getRecording(videoId, userId, callback){
	await fetch(`http://localhost:8080/recordings/${videoId}`, {
		method: 'POST',
		headers: {

		},
		body: JSON.stringify({userId:userId})
	}).then((res) => {
		callback(res)
	})
}

export async function getRecordings(userId, callback){
	await fetch(`http://localhost:8080/recordings?userId=${userId}`)
	.then((res) => {
		if(res.ok){
			res.json()
			.then((data) => {
				callback(data)
			})
		}
	})
}