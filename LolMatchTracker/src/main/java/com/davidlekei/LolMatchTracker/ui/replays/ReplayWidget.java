package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.ui.PanelItem;

import com.davidlekei.LolMatchTracker.data.Replay;
import com.davidlekei.LolMatchTracker.data.MatchInfo;

import java.awt.Dimension;
import javax.swing.border.Border;
import javax.swing.BorderFactory;
import java.awt.LayoutManager;
import java.awt.BorderLayout;
import java.awt.Color;

//TODO: Format correctly with ChampionSquare's on each end and details in between


/*
[MyChampionSquare     Match Info Panel    EnemyChampionSquare]
*/


//TODO: Add match details
public class ReplayWidget extends PanelItem
{

	private ChampionSquare myChampion;
	private ChampionSquare enemyChampion;
	private Replay replay;
	private LayoutManager layout;

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

		layout = new BorderLayout();
		setLayout(layout);

		add(myChampion, BorderLayout.WEST);
		add(enemyChampion, BorderLayout.EAST);

		setPreferredSize(new Dimension(1200, 140));
		setOpaque(false);
		setVisible(true);
	}
}