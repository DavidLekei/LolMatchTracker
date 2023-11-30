package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.data.VideoMultipartFile;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@Controller
public class GetRecordingsController {

	private final String RECORDING_ROOT = "C:/Users/David/Projects/LoLMatchTracker/TestRecordings";
	private final String VIDEO_EXTENSION = ".webm";
	private final int MAX_BYTE_BUFFER = 1000000000; //1GB

	@CrossOrigin
	@GetMapping("/recordings")
	public ResponseEntity<byte[]> getRecording(@RequestParam("videoId") int videoId, @RequestParam("userId") int userId){
		//I don't like passing the userId via the URL like this, but for the sake of speed I'm going to do it like this for now
		//There must be a way to pass the userId via a cookie/session token

		System.out.println("We hit the GET /recording endpoint! videoId = " + videoId + " - userId = " + userId);

		try(FileInputStream inputStream = new FileInputStream(new File(RECORDING_ROOT + "/" + userId + "/" + videoId + VIDEO_EXTENSION))){

			ByteArrayOutputStream buffer = new ByteArrayOutputStream();
			int n;
			byte[] data = new byte[MAX_BYTE_BUFFER];

			while((n = inputStream.read(data, 0, data.length)) != -1) {
				buffer.write(data, 0, n);
			}

			HttpHeaders headers = new HttpHeaders();
			headers.add("Content-Type", "video/h264");

			System.out.println("Sending Response");
			return new ResponseEntity<byte[]>(new VideoMultipartFile(buffer.toByteArray()).getBytes(), HttpStatus.OK);

			//return new VideoMultipartFile(buffer.toByteArray());

		}catch(IOException ioe){
			ioe.printStackTrace();
		}

		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
	}

}
