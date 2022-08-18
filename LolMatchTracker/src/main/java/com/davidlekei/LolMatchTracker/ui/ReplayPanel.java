package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.net.RiotAPI;
import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;
import com.davidlekei.LolMatchTracker.data.MatchInfo;
import com.davidlekei.LolMatchTracker.files.ReplayFileManager;

import org.json.JSONObject;
import org.json.JSONArray;

import java.io.IOException;

import java.lang.InterruptedException;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

public class ReplayPanel extends ContentPanel
{
	private List<PanelItem> panelItemList;
	private RiotAPI api;
	private String userSummonerName;
	private String userRegion;
	private List<MatchInfo> matches;
	private ReplayFileManager replayFileManager;
	private List<String> matchIds;


	//TODO: Add Match widgets VERTICALLY instead of horizontally

	//TODO: Retrieve the userSummonerName and userRegion from a UserConfig class
	//TODO: Retrieve match info from RiotAPI asychronously and maybe limit the number
	public ReplayPanel()
	{
		super();
		userSummonerName = "99 Herblore";
		userRegion = "NA1";

		panelItemList = new ArrayList<PanelItem>();

		getMatches();
		createMatchWidgets();

		setComponents(panelItemList); //parent class method

		setOpaque(true);
		setVisible(true);
	}

	private void createMatchWidgets()
	{
		for(MatchInfo match : matches)
		{
			panelItemList.add(new ReplayWidget(match));
		}
	}

	private void getMatches()
	{
		replayFileManager = new ReplayFileManager();
		matchIds = replayFileManager.getReplayListNoExtension();
		matches = new ArrayList<MatchInfo>();


		JSONObject matchData;
		for(String matchId : matchIds)
		{
			matchData = getMatchData(userRegion + "_" + matchId);
			try
			{
				matches.add(parseJson(matchData));
				System.out.println("ReplayPanel - ReplayPanel() - Added match to list: " + matchId);
			}
			catch(NullPointerException npe)
			{
				System.out.println("DEBUG - ReplayPanel - ReplayPanel() - match id " + matchId + " does not contain summoner: " + userSummonerName);
			}
		}
	}

	private JSONObject getMatchData(String matchId)
	{
		JSONObject matchData = null;
		api = new RiotAPI();
		try
		{
			matchData = api.getMatch(matchId);
		}
		catch(IOException ioe)
		{
			System.out.println("ERROR - Failed to retrieve match data from Riot API");
		}
		catch(InterruptedException ie)
		{
			System.out.println("ERROR - Connection interrupted");
		}
		return matchData;
	}

	private MatchInfo parseJson(JSONObject json) throws NullPointerException
	{
		JSONArray participants = json.getJSONObject("info").getJSONArray("participants");
		return new MatchInfo(participants, userSummonerName);
	}

}