package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.ui.PanelItem;

import com.davidlekei.LolMatchTracker.data.Replay;

public class ReplayWidget extends PanelItem
{

	private ChampionSquare myChampion;
	private ChampionSquare enemyChampion;
	private Replay replay;

	public ReplayWidget(String myChampionName, String enemyChampionName)
	{
		myChampion = new ChampionSquare(myChampionName);
		enemyChampion = new ChampionSquare(enemyChampionName);
		replay = null;

		add(myChampion);
		add(enemyChampion);
		setVisible(true);
	}
}