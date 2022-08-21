package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.net.RiotAPI;
import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;
import com.davidlekei.LolMatchTracker.data.MatchInfo;
import com.davidlekei.LolMatchTracker.files.ReplayFileManager;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import java.io.IOException;

import java.lang.InterruptedException;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

import java.awt.GridBagLayout;
import java.awt.GridBagConstraints;
import java.awt.Insets;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Rectangle;


//TODO: Add banner at the top of the panel that contains the word "Replays"
//TODO: Add Refresh button to the top banner
//TODO: Retrieve the userSummonerName and userRegion from a UserConfig class
//TODO: Retrieve match info from RiotAPI asychronously and maybe limit the number
public class ReplayPanel extends ContentPanel
{
	private List<PanelItem> panelItemList;
	private RiotAPI api;
	private String userSummonerName;
	private String userRegion;
	private List<MatchInfo> matches;
	private ReplayFileManager replayFileManager;
	private List<String> matchIds;
	private JPanel header;


	public ReplayPanel()
	{
		super();
		userSummonerName = "99 Herblore";
		userRegion = "NA1";

		panelItemList = new ArrayList<PanelItem>();

		//getMatches();
		//createMatchWidgets();

		//MOCK METHOD
		createMatchWidgetsMock();
		//

		header = new JPanel();
		header.setPreferredSize(new Dimension(1300, 50));
		header.setBackground(Color.black);

		setComponents(panelItemList); //parent class method

		setOpaque(false);
		setVisible(true);
	}

	private void createMatchWidgets()
	{
		for(MatchInfo match : matches)
		{
			panelItemList.add(new ReplayWidget(match));
		}
	}

	private void createMatchWidgetsMock()
	{
		for(int i = 0; i < 15; i++)
		{
			panelItemList.add(new ReplayWidget("Taliyah", "Yasuo"));
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
			catch(JSONException je)
			{
				System.out.println("ERROR: JSON could not be parsed for match id: " + matchId);
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
		JSONObject info = json.getJSONObject("info");
		return new MatchInfo(info, userSummonerName);
	}

	public void setComponents(List<PanelItem> panelItems)
	{
		this.removeAll();

		this.setLayout(new GridBagLayout());
		GridBagConstraints gbc = new GridBagConstraints();
		gbc.gridy = 0;
		gbc.insets = new Insets(0, 0, 25, 0);

		for( PanelItem item : panelItems )
		{
			gbc.gridx = 0;
			this.add(item, gbc);
			gbc.gridy++;
		}

		this.revalidate();
		this.repaint();
	}

	@Override
	public JPanel getHeader()
	{
		return this.header;
	}

}