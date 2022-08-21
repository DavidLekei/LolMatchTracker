package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import java.awt.Color;
import java.awt.Insets;
import java.awt.Font;
import java.awt.Dimension;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import java.io.File;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

import javax.swing.JPanel;
import javax.swing.BoxLayout;
import javax.swing.JTextArea;
import javax.swing.JButton;
import javax.swing.JFileChooser;

//TODO: Allow user to specify where the notes get saved to
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
	private JPanel header;

	public NotesPanel()
	{
		setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));

		initItems();
		initHeader();
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
		BufferedWriter writer;
		JFileChooser fileChooser;
		int fileChooserResult;

		fileChooser = new JFileChooser();
		fileChooserResult = fileChooser.showSaveDialog(this);
		if(fileChooserResult == JFileChooser.APPROVE_OPTION)
		{
			writer = new BufferedWriter(new FileWriter(fileChooser.getSelectedFile()));
		}
		else
		{
			//TODO: Change this to a DEFAULT_FILE_PATH constant
			writer = new BufferedWriter(new FileWriter(new File(filePath)));
		}
		textArea.write(writer);
	}

	//TODO: Find out if there is a decent way to remove all of this initialization code into
	//other classes (ie. make a SaveButton class). 
	//For now it needs to stay here because it needs access to the saveToFile() method
	private void initHeader()
	{
		header = new JPanel();
		header.setPreferredSize(new Dimension(1300, 50));
		header.setBackground(Color.black);

		JButton saveButton = createSaveButton();
		header.add(saveButton);
	}

	private JButton createSaveButton()
	{
		JButton saveButton = new JButton("Save");
		saveButton.addActionListener(new ActionListener(){
			@Override
			public void actionPerformed(ActionEvent e)
			{
				System.out.println("Save button pressed");
				try
				{
					saveToFile("test.txt");
				}
				catch(IOException ioe)
				{
					ioe.printStackTrace();
				}
			}
		});
		return saveButton;
	}

	@Override
	public JPanel getHeader()
	{
		return this.header;
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		add(textArea);
		this.revalidate();
		this.repaint();
	}

}