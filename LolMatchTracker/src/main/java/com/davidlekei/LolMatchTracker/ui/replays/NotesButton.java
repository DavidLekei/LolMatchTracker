package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.database.NotesDatabaseConnection;

import javax.swing.JButton;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

import java.sql.SQLException;

public class NotesButton extends JButton
{
	public NotesButton(String text, final int matchId)
	{
		super(text);

		this.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				getNotesForMatchId(matchId);
			}
		});
	}

	private void getNotesForMatchId(int matchId)
	{
		System.out.println("Looking for Notes attached to match: " + matchId);
		try
		{
			NotesDatabaseConnection db = new NotesDatabaseConnection();
		}
		catch(SQLException sqle)
		{
			System.out.println("TODO: Handle this exception better - NotesButton ran into an error when looking up notes for match id: " + matchId);
		}
	}


}