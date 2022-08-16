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
import java.util.ArrayList;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import java.awt.LayoutManager;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;


public class MainPanel extends ContentPanel
{
	private LayoutManager layout;

	private MainPanelItemList panelItemList;

	public MainPanel(ContentPanelStyle style, int width, int height)
	{
		super(style, width, height);

		initPanelItems();

		this.layout = new GridBagLayout();
		this.setLayout(this.layout);
	}

	private void initPanelItems()
	{
			panelItemList = new MainPanelItemList();

			panelItemList.addList(SidePanelSelections.HOME);
			panelItemList.addList(SidePanelSelections.REPLAYS);
			panelItemList.addList(SidePanelSelections.NOTES);
			panelItemList.addList(SidePanelSelections.SETTINGS);

			panelItemList.addItem(SidePanelSelections.HOME, new MainPanelItem("Welcome!"));
			panelItemList.addItem(SidePanelSelections.REPLAYS, new MainPanelItem("Here you will find your replays!"));
			panelItemList.addItem(SidePanelSelections.NOTES, new MainPanelItem("Write notes about certain matchups!"));
			panelItemList.addItem(SidePanelSelections.SETTINGS, new MainPanelItem("Change your settings"));
	}

	public void setComponents(SidePanelSelections selection)
	{
		this.removeAll();

		List<PanelItem> panelItems = panelItemList.getPanelItems(selection);

		this.setLayout(this.layout);
		for( PanelItem item : panelItems )
		{
			System.out.println("DEBUG - setComponents() - Adding new item: " + item.getText());
			this.add(item);
		}

		this.revalidate();
		this.repaint();
	}
}