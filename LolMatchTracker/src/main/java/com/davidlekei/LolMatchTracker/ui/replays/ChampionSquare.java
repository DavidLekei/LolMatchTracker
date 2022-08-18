package com.davidlekei.LolMatchTracker.ui.replays;

import java.awt.Dimension;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.File;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.ImageIcon;
import javax.imageio.ImageIO;

public class ChampionSquare extends JPanel
{
	private final String IMG_DIR_PATH = "./src/main/res/game/champion/";
	private final String IMG_FILE_EXTENSION = ".png";

	private final int IMG_WIDTH = 120;
	private final int IMG_HEIGHT = 120;

	private BufferedImage championImage;
	private JLabel imageLabel;

	public ChampionSquare(String name)
	{
		System.out.println("Attempting to create ChampionSquare for: " + name);
		try
		{
			this.championImage = ImageIO.read(new File(IMG_DIR_PATH + name + IMG_FILE_EXTENSION));
			imageLabel = new JLabel(new ImageIcon(championImage));
			imageLabel.setPreferredSize(new Dimension(IMG_WIDTH, IMG_HEIGHT));
			add(imageLabel);
		}
		catch(IOException ioe)
		{
			System.out.println("ERROR - Failed to create champion squre for: " + name);
		}
		setOpaque(false);
	}
}