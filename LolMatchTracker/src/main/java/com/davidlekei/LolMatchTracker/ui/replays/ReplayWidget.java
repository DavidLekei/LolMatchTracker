package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.ui.PanelItem;

import com.davidlekei.LolMatchTracker.data.Replay;
import com.davidlekei.LolMatchTracker.data.MatchInfo;

import java.awt.Dimension;
import javax.swing.border.Border;
import javax.swing.BorderFactory;
import java.awt.Color;

public class ReplayWidget extends PanelItem
{

	private ChampionSquare myChampion;
	private ChampionSquare enemyChampion;
	private Replay replay;

	public ReplayWidget(MatchInfo match)
	{
		String myChampion = match.myChamp;
		String enemyMid = match.enemyMid;
		init(myChampion, enemyMid);
	}

	public ReplayWidget(String myChampionName, String enemyChampionName)
	{
		init(myChampionName, enemyChampionName);
	}

	private void init(String myChampionName, String enemyChampionName)
	{
		myChampion = new ChampionSquare(myChampionName);
		enemyChampion = new ChampionSquare(enemyChampionName);
		replay = null;

		add(myChampion);
		add(enemyChampion);

		Border border = BorderFactory.createLineBorder(Color.black);

		setBorder(border);
		setPreferredSize(new Dimension(1200, 140));
		setOpaque(false);
		setVisible(true);
	}
}