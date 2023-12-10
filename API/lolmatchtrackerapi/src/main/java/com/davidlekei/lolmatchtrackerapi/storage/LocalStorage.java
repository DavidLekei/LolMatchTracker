package com.davidlekei.lolmatchtrackerapi.storage;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;

@Component("localStorage")
public class LocalStorage implements Storage {

	private final String RECORDING_ROOT_FOLDER = "C:/Users/David/Projects/LoLMatchTracker/TestRecordings";
	private final String WRITE_VIDEO_EXTENSION = ".webm";
	private final String READ_VIDEO_EXTENSION = ".mp4";
	private final String FFMPEG_CMD = "ffmpeg -y -i \"%s" + WRITE_VIDEO_EXTENSION + "\" -c:v copy -c:a aac -movflags faststart -strict -2 \"%s" + READ_VIDEO_EXTENSION + "\"";

	@Override
	public File getFile(String path) {
		return new File(path);
	}

	@Override
	public String saveFile(MultipartFile recording, String username) throws IOException {
		byte[] bytes;
		File dir;
		String fileName = "";

		bytes = recording.getBytes();
		dir = makeUserDirectory(username);
		fileName = RECORDING_ROOT_FOLDER + "/" + username + "/" + getNextFileName(dir);
		try(FileOutputStream outputStream = new FileOutputStream(fileName + WRITE_VIDEO_EXTENSION)){
			outputStream.write(bytes);
			convert(fileName);
		}

		//TODO: This happens too fast, ffmpeg doesn't have enough time to convert the video it seems like. Need to figure out a way to do this better later
		delete(fileName);

		return fileName + READ_VIDEO_EXTENSION;
	}

	private File makeUserDirectory(String username){
		File dir = new File(RECORDING_ROOT_FOLDER + "/" + username);

		if(!dir.exists()){
			dir.mkdirs();
		}

		return dir;
	}

	private String getNextFileName(File dir){
		int fileCount = dir.listFiles().length;

		return "" + (fileCount + 1);
	}

	private void convert(String path){
		Process proc;

		if(isWindows()){
			String cmd = String.format(FFMPEG_CMD, path, path);
			System.out.println("Executing command: \n" + cmd);
			try {
				proc = Runtime.getRuntime().exec(cmd);
				proc.waitFor();
//TODO : Wrap these output statements in a if(debug) statement
//				BufferedReader stdInput = new BufferedReader(new InputStreamReader(proc.getInputStream()));
//				BufferedReader stdError = new BufferedReader(new InputStreamReader(proc.getErrorStream()));
//
//				System.out.println("Output from ffmpeg: \n");
//				String output = "";
//
//				while((output = stdInput.readLine()) != null){
//					System.out.println(output);
//				}
//
//				System.out.println("Any error output from ffmpeg: \n");
//				while((output = stdError.readLine()) != null){
//					System.out.println(output);
//				}

			}catch(IOException ioe){
				System.out.println("IOExecption caught while running FFMPEG conversion.");
				ioe.printStackTrace();
			}catch(InterruptedException ie){
				System.out.println("FFMPEG was interrupted. File not deleted.");
				ie.printStackTrace();
			}
		}
	}

	private void delete(String path){
		File file = new File(path + WRITE_VIDEO_EXTENSION);
		if(file.delete()){
			System.out.println("File successfully deleted: " + path + WRITE_VIDEO_EXTENSION);
		}else{
			System.out.println("Failed to delete: " + path + WRITE_VIDEO_EXTENSION);
		}
	}

	private boolean isWindows(){
		return System.getProperty("os.name").toLowerCase().startsWith("windows");
	}
}
