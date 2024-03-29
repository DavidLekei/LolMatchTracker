package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;

import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.BorderLayout;

import javax.swing.JFrame;
import javax.swing.ImageIcon;
import javax.swing.JScrollPane;
import javax.swing.ScrollPaneConstants;

import java.io.IOException;

public class MainWindow extends JFrame
{
	private final int WIDTH = 1600;
	private final int HEIGHT = 900;

	public static final Color DARKER_GRAY_COLOR = new Color(30, 30, 30);

	private SidePanel sidePanel;
	private MainPanel mainPanel;
	private UIConfig uiConfig;

	public MainWindow(UIConfig uiConfig)
	{
		System.out.println("Creating Main Window");
		this.uiConfig = uiConfig;
	}

	public void start()
	{
		setTitle("LolMatchTracker");
		setResizable(false);
		setDefaultCloseOperation(EXIT_ON_CLOSE);
		setPreferredSize(new Dimension(WIDTH, HEIGHT));
		setLayout(new FlowLayout());

		applyUIConfig();

		initPane();
		
		pack();
		setVisible(true);
	}

	private void initPane()
	{
		Container pane = getContentPane();

		//FlowLayout layout = new FlowLayout();
		
		BorderLayout layout = new BorderLayout();
		layout.setHgap(0);
		layout.setVgap(0);

		pane.setBackground(DARKER_GRAY_COLOR);
		pane.setLayout(layout);
		pane.setSize(WIDTH, HEIGHT);

		initComponents(pane);
	}

	private void initComponents(Container pane)
	{
		this.sidePanel = new SidePanel(new ContentPanelStyle(uiConfig, "SidePanel"), 300, 900);
		this.mainPanel = new MainPanel(new ContentPanelStyle(uiConfig, "MainPanel"), 1300, 900);

		this.add(sidePanel, BorderLayout.WEST);
		this.add(mainPanel, BorderLayout.CENTER);
	}

	private void applyUIConfig()
	{
		if(this.uiConfig.get("showTitleBar", "App").equals("false"))
		{
			setUndecorated(true);
		}
		if(this.uiConfig.get("titleBarIcon", "App") != null)
		{
			setIconImage(new ImageIcon(this.uiConfig.get("titleBarIcon", "App")).getImage());
		}

	}

	public void setMainPanel(SidePanelSelections selection)
	{
		this.mainPanel.setPanel(selection);
	}

	public ContentPanel getMainPanel()
	{
		return this.mainPanel;
	}
	public ContentPanel getSidePanel()
	{
		return this.sidePanel;
	}
	public UIConfig getUIConfig()
	{
		return this.uiConfig;
	}
}