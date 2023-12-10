package com.davidlekei.lolmatchtrackerapi.storage;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

public interface Storage {

	public File getFile(String username, int videoId);

	public String saveFile(MultipartFile recording, String username) throws IOException;

}
