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
import java.awt.LayoutManager;
import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import java.awt.FlowLayout;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import java.io.IOException;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JScrollPane;
import javax.swing.ScrollPaneConstants;
import javax.swing.JButton;

//TODO: Maybe put the initHeader() stuff into the Panel classes themselves
//		They should probably be handling all that
//TODO: Add a SidePanelSelections class variable to keep track of current Panel being shown
//TODO: Change the header based on which MainPanel is shown
//		ie different buttons for each panel
//		ie Replays has a refresh button, Notes has a Save button
//TODO: Maybe implement Scrollable to change how fast we can scroll
//TODO: Get size dimensions from config
public class MainPanel extends ContentPanel
{
	private LayoutManager layout;

	private HashMap<SidePanelSelections, ContentPanel> mainPanels;
	private Dimension size;
	private JScrollPane scrollPane;
	private JPanel header;

	public MainPanel(ContentPanelStyle style, int width, int height)
	{
		super(style, width, height);

		initPanels();
		initHeader();

		//Removes annoying open gap at top of panel
		((FlowLayout)this.getLayout()).setVgap(0);

		initScrollPane();

		this.setOpaque(false);
		this.add(scrollPane);
	}

	private void initHeader()
	{
		header = new JPanel();
		header.setPreferredSize(new Dimension(1300, 50));
		header.setBackground(Color.black);

		JButton saveButton = new JButton("Save");
		saveButton.addActionListener(new ActionListener(){
			@Override
			public void actionPerformed(ActionEvent e)
			{
				System.out.println("Save button pressed");
				try
				{
					NotesPanel notesPanel = (NotesPanel)mainPanels.get(SidePanelSelections.NOTES);
					notesPanel.saveToFile("test.txt");
				}
				catch(IOException ioe)
				{
					ioe.printStackTrace();
				}
			}
		});
		header.add(saveButton);

		add(header);
	}

	private void initPanels()
	{
			mainPanels = new HashMap<SidePanelSelections, ContentPanel>();

			mainPanels.put(SidePanelSelections.HOME, new HomePanel());
			mainPanels.put(SidePanelSelections.REPLAYS, new ReplayPanel());
			mainPanels.put(SidePanelSelections.NOTES, new NotesPanel());
			mainPanels.put(SidePanelSelections.SETTINGS, new SettingsPanel());
	}

	private void initScrollPane()
	{
		size = new Dimension(1300, 900);
		scrollPane = new JScrollPane();
		scrollPane.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
		scrollPane.getVerticalScrollBar().setPreferredSize(new Dimension(0, 0));
		scrollPane.setMinimumSize(size);
		scrollPane.setPreferredSize(size);
		scrollPane.setOpaque(false);
	}

	public void setPanel(SidePanelSelections selection)
	{
		scrollPane.setViewportView(mainPanels.get(selection));
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		//Nothing
	}
}