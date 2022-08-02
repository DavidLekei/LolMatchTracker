package com.davidlekei.LolMatchTracker.ui;

import javax.swing.JLabel;

import java.awt.Dimension;

public class MainPanelItem extends PanelItem
{
	private final int DEFAULT_WIDTH = 100;
	private final int DEFAULT_HEIGHT = 100;

	private String text;

	public MainPanelItem(String text)
	{
		this.text = text;

		this.add(new JLabel(text));
		//this.setOpaque(false);
		this.setPreferredSize(new Dimension(DEFAULT_WIDTH, DEFAULT_HEIGHT));
		this.setVisible(true);
	}

	public String getText()
	{
		return text;
	}

}