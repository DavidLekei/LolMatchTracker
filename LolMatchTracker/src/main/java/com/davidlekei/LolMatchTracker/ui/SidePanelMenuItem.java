package com.davidlekei.LolMatchTracker.ui;

import javax.swing.JLabel;
import javax.swing.ImageIcon;
import javax.swing.BorderFactory;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;

public class SidePanelMenuItem extends PanelItem
{

	private final int DEFAULT_WIDTH = 300;
	private final int DEFAULT_HEIGHT = 96; //The icon's are 96x96 pixels
	private SidePanelSelections selection;

	public SidePanelMenuItem(String text)
	{
		this.icon = null;
		this.text = text;
	}

	public SidePanelMenuItem(Icon icon, String text)
	{
		this.icon = icon;
		this.text = text;

		this.init();

		System.out.println("Created a SidePanelMenuItem");
	}

	public void init()
	{
		setSelection();

		//Set layout options
		this.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.fill = GridBagConstraints.HORIZONTAL;
		gbc.insets = new Insets(0, 0, 0, 20);

		this.label = new JLabel(text);
		this.label.setFont(new Font("Dialog", Font.BOLD, 22));

		//Add image to the first grid spot
		gbc.gridx = 0;
		gbc.gridy = 0;
		this.add(new JLabel(new ImageIcon(icon.getImage())), gbc);
		
		//Add text to second grid spot
		gbc.gridx = 1;
		this.add(label, gbc);

		this.setOpaque(false);


		this.setPreferredSize(new Dimension(DEFAULT_WIDTH, DEFAULT_HEIGHT));
		this.setVisible(true);
	}

	public void setSelection()
	{
		switch(this.text)
		{
			case "Home":
				this.selection = SidePanelSelections.HOME;
				break;
			case "Replays":
				this.selection = SidePanelSelections.REPLAYS;
				break;
			case "Notes":
				this.selection = SidePanelSelections.NOTES;
				break;
			case "Settings":
				this.selection = SidePanelSelections.SETTINGS;
				break;
		}
	}

	public Icon getIcon()
	{
		return this.icon;
	}
	public String getText()
	{
		return this.text;
	}
	public void onClick()
	{

	}
}