package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

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
import java.util.HashMap;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import java.awt.LayoutManager;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;


public class MainPanel extends ContentPanel
{
	private LayoutManager layout;

	private HashMap<SidePanelSelections, ContentPanel> mainPanels;

	public MainPanel(ContentPanelStyle style, int width, int height)
	{
		super(style, width, height);

		initPanels();

		this.layout = new GridBagLayout();
		this.setLayout(this.layout);
	}

	private void initPanels()
	{
			mainPanels = new HashMap<SidePanelSelections, ContentPanel>();


			mainPanels.put(SidePanelSelections.HOME, new HomePanel());
			mainPanels.put(SidePanelSelections.REPLAYS, new ReplayPanel());
			mainPanels.put(SidePanelSelections.NOTES, new NotesPanel());
			mainPanels.put(SidePanelSelections.SETTINGS, new SettingsPanel());
	}

	public void setPanel(SidePanelSelections selection)
	{
		this.removeAll();
		this.setLayout(this.layout);
		this.add(mainPanels.get(selection));
		this.revalidate();
		this.repaint();
	}
}