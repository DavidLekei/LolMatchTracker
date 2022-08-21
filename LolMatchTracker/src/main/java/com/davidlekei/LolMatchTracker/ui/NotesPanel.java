package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import java.awt.Color;
import java.awt.Insets;
import java.awt.Font;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JTextArea;

public class NotesPanel extends ContentPanel
{
	private final String BACKGROUND_COLOR = "#0D1117";
	private final String FONT_COLOR = "#FFFFFF";

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
		textArea.setBackground(Color.decode(BACKGROUND_COLOR));
		textArea.setForeground(Color.decode(FONT_COLOR));
		textArea.setLineWrap(true);
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		add(textArea);
		this.revalidate();
		this.repaint();
	}

}