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


public class ContentPanel extends JPanel
{
	private final int MAX_ITEMS = 10;

	private int width = 200;
	private int height = 900;
	private String name;

	private GradientPaint panelGradient;

	private ContentPanelStyle style;

	public ContentPanel()
	{
		
	}

	public ContentPanel(ContentPanelStyle style, int width, int height)
	{
		super();

		this.style = style;
		this.width = width;
		this.height = height;
		this.panelGradient = (GradientPaint)style.getPaint();
		//this.setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
	}

	public void initComponents(String panelName, MainWindow mainWindow)
	{
		List<PanelItem> panelItems = mainWindow.getUIConfig().getPanelComponents(panelName);

		this.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridy = 0;
		gbc.insets = new Insets(100, 0, 0, 50);

		for ( PanelItem item : panelItems )
		{
			gbc.gridx = 0;
			this.add(item, gbc);
			gbc.gridy++;

			if(panelName.equals("SidePanel"))
			{
				item.addMouseListener(new PanelItemMouseListener(item.getText(), mainWindow));
			}
		}
	}

	public void setComponents(List<PanelItem> panelItems)
	{
		this.removeAll();

		this.setLayout(new GridBagLayout());
		for( PanelItem item : panelItems )
		{
			this.add(item);
		}

		this.revalidate();
		this.repaint();
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