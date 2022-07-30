package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;

import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.BorderLayout;

import javax.swing.JFrame;

public class MainWindow extends JFrame
{
	private final int WIDTH = 1600;
	private final int HEIGHT = 900;

	public static final Color DARKER_GRAY_COLOR = new Color(30, 30, 30);

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
		ContentPanel sidePanel = new ContentPanel(new ContentPanelStyle(uiConfig, "SidePanel"), 300, 900);

		ContentPanel mainPanel = new ContentPanel(new ContentPanelStyle(uiConfig, "MainPanel"), 1300, 900);
		//sidePanel.initComponents(new PanelItem[10]);

		this.add(sidePanel, BorderLayout.WEST);
		this.add(mainPanel, BorderLayout.CENTER);

		ChampionImageArea myChampionImageArea = new ChampionImageArea();
	}
}