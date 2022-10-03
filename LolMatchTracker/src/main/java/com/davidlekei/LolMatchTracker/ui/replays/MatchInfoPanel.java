package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.data.MatchInfo;
//import com.davidlekei.LolMatchTracker.ui.replays.NotesButton;

import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.Color;

//TODO: Format text better
//TODO: maybe rename to MatchStatsPanel?
public class MatchInfoPanel extends JPanel
{
	private final String WIN_COLOR = "#46AAEB";
	private final String LOSS_COLOR = "#DE767D";

	private JLabel itemsLabel;
	private JLabel goldLabel;
	private JLabel kdaLabel;
	private JLabel csLabel;
	private JLabel damageLabel;

	private MatchInfo matchInfo;

	public MatchInfoPanel(MatchInfo matchInfo)
	{
		super();
		this.matchInfo = matchInfo;
		initLabels();
		addButtons();

		if(matchInfo.won == true)
		{
			setBackground(Color.decode(WIN_COLOR));
		}
		else
		{
			setBackground(Color.decode(LOSS_COLOR));
		}

	}

	private void initLabels()
	{
		itemsLabel = new JLabel("ITEMS HERE");
		goldLabel = new JLabel("Gold earned: " + matchInfo.myGold);
		kdaLabel = new JLabel(getKDAString());
		csLabel = new JLabel("CS: " + matchInfo.myCS);
		damageLabel = new JLabel("Total damage: " + matchInfo.myDamage);

		add(itemsLabel);
		add(goldLabel);
		add(kdaLabel);
		add(csLabel);
		add(damageLabel);
	}

	private void addButtons()
	{
		NotesButton notesButton = new NotesButton("Notes", this.matchInfo.matchId);


		add(notesButton);
	}

	private String getKDAString()
	{
		return "K/D/A: " + matchInfo.myKills + "/" + matchInfo.myDeaths + "/" + matchInfo.myAssists;
	}
}