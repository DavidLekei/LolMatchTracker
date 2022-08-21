package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.LolMatchTracker;
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
import java.util.ArrayList;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;


public class SidePanel extends ContentPanel
{

	private List<PanelItem> panelItems;

	public SidePanel(ContentPanelStyle style, int width, int height)
	{
		super(style, width, height);
		this.setLayout(new GridBagLayout());
		this.panelItems = new ArrayList<PanelItem>();

		initPanelItems();
		addPanelItems();

		this.setPreferredSize(new Dimension(width, height));
		this.setVisible(true);
	}

	private void initPanelItems()
	{
		try
		{
			panelItems.add(new SidePanelMenuItem(new Icon("home.png"), "Home"));
			panelItems.add(new SidePanelMenuItem(new Icon("replays.png"), "Replays"));
			panelItems.add(new SidePanelMenuItem(new Icon("notes.png"), "Notes"));
			panelItems.add(new SidePanelMenuItem(new Icon("settings.png"), "Settings"));
		}
		catch(IOException ioe)
		{
			System.out.println("SidePanel.java - initPanelItems() - Could not create icon from file: ");
		}
	}

	public void addPanelItems()
	{
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridy = 0;
		gbc.insets = new Insets(0, 0, 0, 50);

		MainWindow mainWindow = LolMatchTracker.get().getMainWindow();

		for ( PanelItem item : panelItems )
		{
			gbc.gridx = 0;
			this.add(item, gbc);
			gbc.gridy++;

			item.addMouseListener(new PanelItemMouseListener(item.getText(), mainWindow));
		}
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		this.removeAll();

		for( PanelItem item : panelItems )
		{
			this.add(item);
		}

		this.revalidate();
		this.repaint();
	}

	@Override
	public JPanel getHeader()
	{
		return null;
	}

}