package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;

import com.davidlekei.lolmatchtrackerapi.data.VideoMultipartFile;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@RestController
public class RecordingController implements Controller {

	private final String RECORDING_ROOT = "C:/Users/David/Projects/LoLMatchTracker/TestRecordings";
	private final String VIDEO_EXTENSION = ".h264";
	private final int MAX_BYTE_BUFFER = 1000000000; //1GB

	@CrossOrigin
	@GetMapping("/recording/test")
	public String test(){
		return "Test passed";
	}


	@CrossOrigin
	@PostMapping("/recording")
	public boolean uploadRecording(@RequestParam("recording") MultipartFile recording){

		System.out.println("uploadRecording reached!");
		System.out.println("recording: " + recording);

		int userId = 1; //TODO: Get this from Request somehow

		String nextFileName = "1"; //TODO: Write a method to check the output directory and determine the next name ie file1, file2, file3 exist, so file4 is the next name

		try {
			byte[] bytes = recording.getBytes();
			makeUserDirectory(userId);
			try(FileOutputStream outputStream = new FileOutputStream(RECORDING_ROOT + "/" + userId + "/" + nextFileName + ".h264")){
				outputStream.write(bytes);
			}

		}catch(IOException ioe){
			return false;
		}
			return true;
	}

	private void makeUserDirectory(int userId){
		File dir = new File(RECORDING_ROOT + "/" + userId);

		if(!dir.exists()){
			dir.mkdirs();
		}
	}

	@Override
	public void printDebug() {

	}
}
