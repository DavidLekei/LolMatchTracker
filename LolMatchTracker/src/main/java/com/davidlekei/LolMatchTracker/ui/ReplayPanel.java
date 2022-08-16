package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.net.RiotAPI;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.io.IOException;

import java.lang.InterruptedException;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

public class ReplayPanel extends ContentPanel
{
	private List<PanelItem> panelItemList;
	private RiotAPI api;

	public ReplayPanel()
	{
		initItems();
		setComponents(panelItemList);

		getMatchData();

		setOpaque(true);
		setVisible(true);
	}

	private void getMatchData()
	{
		api = new RiotAPI();
		try
		{
			api.getMatch("NA1_4405067724");
		}
		catch(IOException ioe)
		{
			System.out.println("ERROR - Failed to retrieve match data from Riot API");
		}
		catch(InterruptedException ie)
		{
			System.out.println("ERROR - Connection interrupted");
		}
	}

	private void initItems()
	{
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(new ReplayWidget("Ahri", "Viktor"));
	}


}