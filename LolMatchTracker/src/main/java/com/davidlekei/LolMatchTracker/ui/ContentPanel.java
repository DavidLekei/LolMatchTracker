//TODO: Resize the panel components if they are going to go beyond the size of the panel itself (height wise)

package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;

import java.awt.Component;
import java.awt.Color;
import java.awt.Paint;
import java.awt.GradientPaint;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Dimension;

import java.io.IOException;

import java.util.List;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;


public abstract class ContentPanel extends JPanel
{
	private int width = 1300;
	private int height = 900;
	private GradientPaint panelGradient;
	private ContentPanelStyle style;

	public ContentPanel()
	{
		//TODO: Figure out a way to read from UIConfig if ContentPanelStyle is not passed in?
		this.style = new ContentPanelStyle();
	}

	public ContentPanel(ContentPanelStyle style, int width, int height)
	{
		super();

		this.style = style;
		this.width = width;
		this.height = height;
		this.panelGradient = (GradientPaint)style.getPaint();
	}

	public abstract void setComponents(List<PanelItem> panelItems);

	@Override
	protected void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		((Graphics2D)g).setPaint(style.getPaint());
		g.fillRect(0, 0, getWidth(), getHeight());
	} 
}