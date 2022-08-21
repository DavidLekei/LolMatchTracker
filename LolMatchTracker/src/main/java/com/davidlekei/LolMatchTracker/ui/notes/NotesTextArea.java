package com.davidlekei.LolMatchTracker.ui.notes;

import com.davidlekei.LolMatchTracker.ui.PanelItem;

import javax.swing.JPanel;
import javax.swing.JTextArea;

public class NotesTextArea extends PanelItem
{
	private JPanel panel;
	private JTextArea textArea;

	public NotesTextArea()
	{
		panel = new JPanel();
		textArea = new JTextArea();
		panel.add(textArea);
	}
}