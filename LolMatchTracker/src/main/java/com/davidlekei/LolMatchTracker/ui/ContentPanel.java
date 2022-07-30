package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;

import java.awt.Color;
import java.awt.Paint;
import java.awt.GradientPaint;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Dimension;

import java.io.IOException;

import javax.swing.JPanel;

public class ContentPanel extends JPanel
{
	private final int MAX_ITEMS = 10;

	private int width = 200;
	private int height = 900;
	private String name;

	private GradientPaint panelGradient;

	private ContentPanelStyle style;

	public ContentPanel(ContentPanelStyle style, int width, int height)
	{
		super();

		this.style = style;
		this.width = width;
		this.height = height;

		this.setPreferredSize(new Dimension(this.width, this.height));
		this.panelGradient = (GradientPaint)style.getPaint();
		this.setVisible(true);
	}

	public void initComponents(PanelItem[] panelItems)
	{
		for ( PanelItem item : panelItems )
		{
			try
			{
				item = new SidePanelButton(new Icon("C:/Users/David/Pictures/123.jpg"), "Test Button");
			}
			catch(IOException ioe)
			{
				//Create button with no icon
				item = new SidePanelButton("No Icon Test Button");
				System.out.println("ERROR - Could not find image for icon");
			}

			this.add(item);
		}
	}


	@Override
	protected void paintComponent(Graphics g)
	{
		super.paintComponent(g);

		((Graphics2D)g).setPaint(style.getPaint());
		g.fillRect(0, 0, this.width, this.height);
		System.out.println("Set Paint");
	} 
}