package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;
import com.davidlekei.lolmatchtrackerapi.storage.LocalStorage;
import com.davidlekei.lolmatchtrackerapi.storage.Storage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.util.OnCommittedResponseWrapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.*;
import com.davidlekei.lolmatchtrackerapi.util.FileUtils;

@Controller
public class GetRecordingsController {

	private final String RECORDING_ROOT = "C:/Users/David/Projects/LoLMatchTracker/TestRecordings";
	private final String VIDEO_EXTENSION = ".mp4";
	private final int MAX_BYTE_BUFFER = 1000000000; //1GB

	@Autowired
	private Storage storage;

	private static Database database = DatabaseConnection.get().getDatabase();

	@CrossOrigin
	@GetMapping("/recordings/{videoId}")
	@ResponseBody
	public ResponseEntity<StreamingResponseBody> getRecording(@PathVariable("videoId") int videoId, @RequestParam("username") String username, @RequestHeader(value = "range", required=false) String range){

		try{
			StreamingResponseBody response;
			String filePath = database.getFilePathForVideoId(videoId, username);
			File video = storage.getFile(filePath);
			Long fileSize = video.length();

			byte[] buffer = new byte[4096];

			final HttpHeaders responseHeaders = new HttpHeaders();

			String[] ranges = range.split("-");
			Long rangeStart = Long.parseLong(ranges[0].substring(6));//bytes=
			Long rangeEnd;

			if(ranges.length > 1){
				rangeEnd = Long.parseLong(ranges[1]);
			}else{
				rangeEnd = fileSize - 1;
			}

			if(fileSize < rangeEnd){
				rangeEnd = fileSize - 1;
			}

			responseHeaders.add("Content-Type", "video/mp4");
			responseHeaders.add("Content-Length", String.valueOf((rangeEnd - rangeStart) + 1));
			responseHeaders.add("Accepts-Ranges", "bytes");
			responseHeaders.add("Content-Range", "bytes " + rangeStart + "-" + rangeEnd + "/" + fileSize);
			responseHeaders.add("Etag", "Test");
			responseHeaders.add("Last-Modified", FileUtils.getFileLastModifiedDate(video));

			final Long _rangeEnd = rangeEnd;

			response = os -> {
				RandomAccessFile file = new RandomAccessFile(video, "r");
				try (file){
					long pos = rangeStart;
					file.seek(pos);
					while(pos < _rangeEnd){
						file.read(buffer);
						os.write(buffer);
						pos += buffer.length;
					}
					os.flush();
				} catch(Exception e){
					e.printStackTrace();
				}
			};
			return new ResponseEntity<StreamingResponseBody>(response, responseHeaders, HttpStatus.PARTIAL_CONTENT);
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}


}
