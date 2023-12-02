package com.davidlekei.lolmatchtrackerapi.util;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileUtils {

	private static SimpleDateFormat dateFormat = new SimpleDateFormat("EEE, dd MMM YYYY HH:mm:ss");

	public static String getFileLastModifiedDate(File file){
		return dateFormat.format(new Date(file.lastModified())) + " GMT";
	}

}
