package com.davidlekei.LolMatchTracker.ui;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Icon
{
	private final String ICON_IMG_DIR = "./src/main/res/icons/";
	private final String TEST_PATH = "C:/Users/David/Projects/LolMatchTracker/LolMatchTracker/src/main/res/icons/";

	private BufferedImage image;

	public Icon(String fileName) throws IOException
	{
		String fullPath = ICON_IMG_DIR + fileName;
		File imageFile = new File(fullPath);
		String canPath = imageFile.getCanonicalPath();
		System.out.println("DEBUG - Icon() - canPath: " + canPath);
		this.image = ImageIO.read(new File(fullPath));
	}

	public BufferedImage getImage()
	{
		return this.image;
	}
}