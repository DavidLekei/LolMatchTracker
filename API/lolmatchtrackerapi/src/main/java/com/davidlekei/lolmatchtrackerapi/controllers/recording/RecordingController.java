package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;

import com.davidlekei.lolmatchtrackerapi.data.VideoMultipartFile;
import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;
import com.davidlekei.lolmatchtrackerapi.storage.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RecordingController implements Controller {

	@Autowired
	private Storage storage;

	private static Database database = DatabaseConnection.get().getDatabase();

	@CrossOrigin
	@PostMapping("/recording")
	public ResponseEntity uploadRecording(@RequestParam("recording") MultipartFile recording, @RequestParam("username") String username, @RequestParam("title") String title, @RequestParam("token") String token){

		System.out.println("/recording - uploadRecording() - token: " + token + "\nTODO: Validate token");
		String filePath;

		try{
			filePath = storage.saveFile(recording, username);
			database.saveRecording(filePath, username, title);
			return ResponseEntity.ok().build();
		}catch(IOException ioe){
			System.out.println("Failed to write file for user: " + username);
			ioe.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}catch(SQLException sqle){
			System.out.println("Could not save Recording to database for user: " + username);
			sqle.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
	}

	@CrossOrigin
	@GetMapping("/recordings")
	public ResponseEntity getRecordings(@RequestParam("username") String username){
		try {
			List<Recording> recordingList = database.getRecordings(username);

			return new ResponseEntity<>(recordingList, HttpStatus.OK);
		}catch(SQLException sqle){
			System.out.println("Could not get recordings for user: " + username);
			sqle.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
//		Recording recording = new Recording(13, "Test Recording", "Sylas", "Ekko", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(1, "Sylas Game 2", "Sylas", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(2, "Sylas Game 2", "Sylas", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(3, "Sylas Game 3", "Sylas", "Zed", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(4, "Ekko Game 1", "Ekko", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(5, "Ekko Game 2", "Ekko", "Talon", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(6, "Ekko Game 3", "Ekko", "Akali", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(7, "Random Normal Game", "Syndra", "Orianna", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(8, "Ekko Game 4", "Ekko", "Viktor", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(9, "Sylas Game 4", "Sylas", "Ahri", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(10, "Sylas Game 5", "Sylas", "Kled", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(11, "Sylas Game 6", "Sylas", "Viktor", "Loss", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
//		recording = new Recording(12, "Sylas Game 7", "Sylas", "Akali", "Win", "Sat, 02 Dec 2023", "test_thumbnail.jpg");
//		recordingList.add(recording);
	}

	@Override
	public void printDebug() {

	}
}
