package com.davidlekei.LolMatchTracker.ui;

import javax.swing.JPanel;
import javax.swing.JLabel;

public abstract class SidePanelItem extends JPanel
{
	protected final int WIDTH = 150;
	protected final int HEIGHT = 120;

	private String type;
	protected JLabel label;
	protected Icon icon;
	protected String text;

	public Icon getIcon()
	{
		return null;
	}
	public JLabel getLabel()
	{
		return null;
	}
	public String getText()
	{
		return "ERROR - Text not implemented";
	}
	public void onClick()
	{

	}
}