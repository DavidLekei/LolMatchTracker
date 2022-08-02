package com.davidlekei.LolMatchTracker.ui;

import java.awt.event.MouseListener;

import javax.swing.JPanel;
import javax.swing.JLabel;

public abstract class PanelItem extends JPanel
{
	protected final int WIDTH = 150;
	protected final int HEIGHT = 120;

	private String type;
	protected JLabel label;
	protected Icon icon;
	protected String text;

	public void init()
	{

	}

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

	public void setClickEventHandler(MouseListener mouseListener)
	{

	}
}