package com.davidlekei.lolmatchtrackerapi.storage;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public class S3Storage implements Storage{
	@Override
	public File getFile(String path) {
		return null;
	}

	@Override
	public String saveFile(MultipartFile recording, String username)  throws IOException {
		return "";
	}
}
