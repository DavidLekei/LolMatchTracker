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

import java.util.List;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;


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
		//this.setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
		this.setVisible(true);
	}

	public void initComponents(List<PanelItem> panelItems)
	{

		this.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridy = 0;
		gbc.insets = new Insets(100, 0, 0, 50);

		for ( PanelItem item : panelItems )
		{
			gbc.gridx = 0;

			System.out.println("Adding to " + gbc.gridx + " / " + gbc.gridy);

			this.add(item, gbc);
			gbc.gridy++;
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