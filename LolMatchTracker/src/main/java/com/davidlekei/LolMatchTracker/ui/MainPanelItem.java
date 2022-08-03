package com.davidlekei.LolMatchTracker.ui;

import javax.swing.JLabel;

import java.awt.Color;
import java.awt.Dimension;

public class MainPanelItem extends PanelItem
{
	private final int DEFAULT_WIDTH = 100;
	private final int DEFAULT_HEIGHT = 100;
	private final String DEFAULT_COLOR = "#FFFFFF";

	private String text;
	private Color color;

	public MainPanelItem(String text)
	{
		this.text = text;
		this.color = Color.decode(DEFAULT_COLOR);
		initPanel();
	}

	public MainPanelItem(String text, String colorHexCode)
	{
		this.text = text;
		this.color = Color.decode(colorHexCode);
		initPanel();
	}

	private void initPanel()
	{
		this.add(new JLabel(this.text));
		this.setBackground(this.color);
		this.setPreferredSize(new Dimension(DEFAULT_WIDTH, DEFAULT_HEIGHT));
		this.setVisible(true);
	}

	public String getText()
	{
		return text;
	}

	public Color getColor()
	{
		return color;
	}

}