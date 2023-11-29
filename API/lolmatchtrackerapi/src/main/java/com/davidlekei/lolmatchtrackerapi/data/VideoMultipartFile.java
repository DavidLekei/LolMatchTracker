package com.davidlekei.lolmatchtrackerapi.data;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Path;

public class VideoMultipartFile implements MultipartFile {

	private byte[] bytes;

	public VideoMultipartFile(byte[] bytes){
		this.bytes = bytes;
	}

	@Override
	public String getName() {
		return "VideoMultipartFile name!";
	}

	@Override
	public String getOriginalFilename() {
		return "OriginalFilename";
	}

	@Override
	public String getContentType() {
		return "video/h264";
	}

	@Override
	public boolean isEmpty() {
		return false;
	}

	@Override
	public long getSize() {
		return bytes.length;
	}

	@Override
	public byte[] getBytes() throws IOException {
		return bytes;
	}

	@Override
	public InputStream getInputStream() throws IOException {
		return new ByteArrayInputStream(bytes);
	}

	@Override
	public void transferTo(File dest) throws IOException, IllegalStateException {
		try (FileOutputStream outputStream = new FileOutputStream(dest)) {
			outputStream.write(bytes);
		}

	}
}
