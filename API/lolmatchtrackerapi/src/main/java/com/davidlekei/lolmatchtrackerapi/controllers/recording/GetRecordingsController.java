package com.davidlekei.lolmatchtrackerapi.controllers.recording;

import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
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

	//private StreamingResponseBody test(OutputStream )

	@CrossOrigin
	@GetMapping("/recordings/{videoId}")
	@ResponseBody
	public ResponseEntity<StreamingResponseBody> getRecording(@PathVariable("videoId") int videoId, @RequestParam("userId") int userId, @RequestHeader(value = "range", required=false) String range){

		try{
			System.out.println("Request for Video Received!");
			StreamingResponseBody response;
			String filePathString = RECORDING_ROOT + "/" + userId + "/" + videoId + VIDEO_EXTENSION;

			File video = new File(filePathString);
			Long fileSize = video.length();

			byte[] buffer = new byte[4096];

			final HttpHeaders responseHeaders = new HttpHeaders();

			System.out.println("Range header: " + range);

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

			System.out.println("rangeStart = " + rangeStart + " / rangeEnd = " + rangeEnd);

			responseHeaders.add("Content-Type", "video/mp4");
			responseHeaders.add("Content-Length", String.valueOf((rangeEnd - rangeStart) + 1));
			responseHeaders.add("Accepts-Ranges", "bytes");
			responseHeaders.add("Content-Range", "bytes " + rangeStart + "-" + rangeEnd + "/" + fileSize);
			responseHeaders.add("Etag", "Test");
			responseHeaders.add("Last-Modified", FileUtils.getFileLastModifiedDate(video));

			final Long _rangeEnd = rangeEnd;
//			RandomAccessFile file = new RandomAccessFile(video, "r");
//			try(file) {
//				file.seek(rangeStart);
//				file.read(buffer);
//			}catch(Exception e){
//				System.out.println("Error reading file");
//				e.printStackTrace();
//			}
			response = os -> {
				RandomAccessFile file = new RandomAccessFile(video, "r");
				try (file){
					long pos = rangeStart;
					file.seek(pos);
					System.out.println("Starting to read from " + pos);
					while(pos < _rangeEnd){
						file.read(buffer);
						os.write(buffer);
						System.out.println("Wrote to buffer!");
						pos += buffer.length;
						System.out.println("Seeking to " + pos);
					}
					os.flush();
				} catch(Exception e){
					System.out.println("Error while reading file, flush() never called!");
					e.printStackTrace();
				}
			};

			System.out.println("OS flushed, sending response now\nResponse: " + response);
			return new ResponseEntity<StreamingResponseBody>(response, responseHeaders, HttpStatus.PARTIAL_CONTENT);
		}catch(Exception e){
			e.printStackTrace();
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}


}
