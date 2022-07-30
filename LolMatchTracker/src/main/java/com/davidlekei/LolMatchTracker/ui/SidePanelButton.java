package com.davidlekei.LolMatchTracker.ui;

import javax.swing.JLabel;
import javax.swing.ImageIcon;
import javax.swing.BorderFactory;

import java.awt.Color;

public class SidePanelButton extends PanelItem
{
	public SidePanelButton(String text)
	{
		this.icon = null;
		this.text = text;
	}

	public SidePanelButton(Icon icon, String text)
	{
		this.icon = icon;
		this.text = text;
		this.label = new JLabel(text);

		this.add(new JLabel(new ImageIcon(icon.getImage())));
		this.add(label);

		this.setBorder(BorderFactory.createLineBorder(Color.black));
		this.setSize(WIDTH, HEIGHT);
		this.setVisible(true);

		System.out.println("Created a SidePanelButton");
	}

	public Icon getIcon()
	{
		return null;
	}
	public String getText()
	{
		return "SidePanelButton Text";
	}
	public void onClick()
	{

	}
}