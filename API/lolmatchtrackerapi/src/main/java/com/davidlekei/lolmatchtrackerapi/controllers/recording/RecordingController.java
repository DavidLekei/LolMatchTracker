package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;

import com.davidlekei.lolmatchtrackerapi.data.VideoMultipartFile;
import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
import com.davidlekei.lolmatchtrackerapi.storage.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RecordingController implements Controller {

	private final String RECORDING_ROOT = "C:/Users/David/Projects/LoLMatchTracker/TestRecordings";
	private final String VIDEO_EXTENSION = ".webm";
	private final int MAX_BYTE_BUFFER = 1000000000; //1GB

	@Autowired
	private Storage storage;

	@CrossOrigin
	@PostMapping("/recording")
	public boolean uploadRecording(@RequestParam("recording") MultipartFile recording, @RequestParam("username") String username, @RequestParam("token") String token){

		//int userId = 1; //TODO: Get this from Request somehow
		System.out.println("/recording - uploadRecording() - token: " + token + "\nTODO: Validate token");

		String nextFileName = "1"; //TODO: Write a method to check the output directory and determine the next name ie file1, file2, file3 exist, so file4 is the next name

		try {
			byte[] bytes = recording.getBytes();
			makeUserDirectory(username);
			try(FileOutputStream outputStream = new FileOutputStream(RECORDING_ROOT + "/" + username + "/" + nextFileName + VIDEO_EXTENSION)){
				outputStream.write(bytes);
			}

		}catch(IOException ioe){
			return false;
		}
			return true;
	}

	private void makeUserDirectory(String username){
		File dir = new File(RECORDING_ROOT + "/" + username);

		if(!dir.exists()){
			dir.mkdirs();
		}
	}

	@CrossOrigin
	@GetMapping("/recordings")
	public List<Recording> getRecordings(@RequestParam("username") String username){
		ArrayList<Recording> recordingList = new ArrayList<Recording>();
		Recording recording = new Recording(13, "Test Recording", "Sylas", "Ekko", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(1, "Sylas Game 2", "Sylas", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(2, "Sylas Game 2", "Sylas", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(3, "Sylas Game 3", "Sylas", "Zed", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(4, "Ekko Game 1", "Ekko", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(5, "Ekko Game 2", "Ekko", "Talon", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(6, "Ekko Game 3", "Ekko", "Akali", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(7, "Random Normal Game", "Syndra", "Orianna", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(8, "Ekko Game 4", "Ekko", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(9, "Sylas Game 4", "Sylas", "Ahri", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(10, "Sylas Game 5", "Sylas", "Kled", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(11, "Sylas Game 6", "Sylas", "Viktor", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		recording = new Recording(12, "Sylas Game 7", "Sylas", "Akali", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
		recordingList.add(recording);
		return recordingList;
	}

	@Override
	public void printDebug() {

	}
}
