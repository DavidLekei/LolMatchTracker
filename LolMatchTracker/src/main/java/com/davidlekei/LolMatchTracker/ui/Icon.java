package com.davidlekei.LolMatchTracker.ui;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Icon
{
	private final String ICON_IMG_DIR = "./src/main/res/icons/";

	private BufferedImage image;

	public Icon(String fileName) throws IOException
	{
		String fullPath = ICON_IMG_DIR + fileName;
		this.image = ImageIO.read(new File(fullPath));
	}

	public BufferedImage getImage()
	{
		return this.image;
	}
}