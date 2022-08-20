package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.data.MatchInfo;

import javax.swing.JPanel;
import javax.swing.JLabel;

public class MatchInfoPanel extends JPanel
{
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

	private String getKDAString()
	{
		return "K/D/A: " + matchInfo.myKills + "/" + matchInfo.myDeaths + "/" + matchInfo.myAssists;
	}
}