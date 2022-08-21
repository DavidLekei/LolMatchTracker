package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import java.awt.Color;
import java.awt.Insets;
import java.awt.Font;

import java.io.File;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JTextArea;

//TODO: Change scroll speed
//TODO: Check UI/UserConfig for Dark/Light mode and use respective color scheme
public class NotesPanel extends ContentPanel
{
	private final String DARK_MODE_FONT_COLOR = "#FFFFFF";
	private final String DARK_MODE_BACKGROUND_COLOR = "#0D1117";
	private final String LIGHT_MODE_FONT_COLOR = "#000000";
	private final String LIGHT_MODE_BACKGROUND_COLOR = "#FFFFFF";

	private List<PanelItem> panelItemList;
	private JTextArea textArea;

	public NotesPanel()
	{
		setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));

		initItems();
		setComponents(panelItemList);

		setOpaque(false);
	}

	private void initItems()
	{	
		textArea = new JTextArea();
		textArea.setMargin(new Insets(15, 15, 15, 15));
		textArea.setFont(new Font("Roboto", Font.PLAIN, 24));
		textArea.setBackground(Color.decode(DARK_MODE_BACKGROUND_COLOR));
		textArea.setForeground(Color.decode(DARK_MODE_FONT_COLOR));
		textArea.setLineWrap(true);
	}

	public void saveToFile(String filePath) throws IOException
	{
		BufferedWriter writer = new BufferedWriter(new FileWriter(new File(filePath)));
		textArea.write(writer);
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		add(textArea);
		this.revalidate();
		this.repaint();
	}

}