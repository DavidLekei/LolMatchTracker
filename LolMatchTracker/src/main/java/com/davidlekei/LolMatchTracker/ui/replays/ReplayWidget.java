package com.davidlekei.LolMatchTracker.ui.replays;

import com.davidlekei.LolMatchTracker.ui.PanelItem;

import com.davidlekei.LolMatchTracker.data.Replay;
import com.davidlekei.LolMatchTracker.data.MatchInfo;

import java.awt.Dimension;
import javax.swing.border.Border;
import javax.swing.BorderFactory;
import javax.swing.JPanel;
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
	private JPanel matchInfoPanel;
	private MatchInfo matchInfo;

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

		initMatchInfoPanel();

		replay = null;

		layout = new BorderLayout();
		setLayout(layout);

		add(myChampion, BorderLayout.WEST);
		add(enemyChampion, BorderLayout.EAST);
		add(matchInfoPanel, BorderLayout.CENTER);

		setPreferredSize(new Dimension(1200, 140));
		setOpaque(false);
		setVisible(true);
	}

	private void initMatchInfoPanel()
	{
		matchInfoPanel = new JPanel();
		Dimension matchInfoPanelSize = new Dimension(getPreferredSize().width - (myChampion.getPreferredSize().width * 2), getPreferredSize().height);;
		System.out.println("matchInfoPanelSize = " + matchInfoPanelSize);
		matchInfoPanel.setPreferredSize(matchInfoPanelSize);
		matchInfoPanel.setBackground(Color.red);
	}
}