package com.davidlekei.LolMatchTracker.ui;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

public class Icon
{

	private BufferedImage image;

	public Icon(String pathToFile) throws IOException
	{
		this.image = ImageIO.read(new File(pathToFile));
	}

	public BufferedImage getImage()
	{
		return this.image;
	}
}