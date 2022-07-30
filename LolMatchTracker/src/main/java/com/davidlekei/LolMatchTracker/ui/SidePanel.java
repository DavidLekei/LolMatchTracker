// package com.davidlekei.LolMatchTracker.ui;

// import com.davidlekei.LolMatchTracker.config.Config;
// import com.davidlekei.LolMatchTracker.config.UIConfig;

// import java.awt.Color;
// import java.awt.Paint;
// import java.awt.GradientPaint;
// import java.awt.Graphics;
// import java.awt.Graphics2D;
// import java.awt.Dimension;

// import java.io.IOException;

// import javax.swing.JPanel;
// import javax.swing.BorderFactory;

// public class SidePanel extends JPanel
// {
// 	private final int WIDTH = 200;
// 	private final int HEIGHT = 900;
// 	private final int MAX_ITEMS = 10;

// 	private GradientPaint panelGradient;

// 	private UIConfig config;

// 	public SidePanel(UIConfig config)
// 	{
// 		super();

// 		this.config = config;
// 		this.panelGradient = (GradientPaint)config.getPaint();

// 		this.setBorder(BorderFactory.createLineBorder(Color.red));

// 		this.setPreferredSize(new Dimension(WIDTH, HEIGHT));
// 		this.setVisible(true);

// 		System.out.println("Created SidePanel");
// 	}

// 	public void initComponents()
// 	{
// 		SidePanelItem[] sidePanelItems = new SidePanelItem[MAX_ITEMS];

// 		for ( SidePanelItem item : sidePanelItems )
// 		{
// 			try
// 			{
// 				item = new SidePanelButton(new Icon("C:/Users/David/Pictures/123.jpg"), "Test Button");
// 			}
// 			catch(IOException ioe)
// 			{
// 				//Create button with no icon
// 				item = new SidePanelButton("No Icon Test Button");
// 				System.out.println("ERROR - Could not find image for icon");
// 			}

// 			this.add(item);
// 		}
// 	}

// 	@Override
// 	protected void paintComponent(Graphics g)
// 	{
// 		super.paintComponent(g);

// 		((Graphics2D)g).setPaint(config.getPaint());
// 		g.fillRect(0, 0, WIDTH, HEIGHT);
// 		System.out.println("Set Paint");
// 	} 
// }