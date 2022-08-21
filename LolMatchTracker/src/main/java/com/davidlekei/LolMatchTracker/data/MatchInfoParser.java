package com.davidlekei.LolMatchTracker.data;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

public class MatchInfoParser
{
	private JSONArray data;
	private JSONObject me;

	public MatchInfoParser(JSONArray data)
	{
		this.data = data;
	}

	public MidJungleDuos parseMidJungle(String userSummonerName) throws JSONException
	{
		getMe(userSummonerName);
		JSONObject myJungle = null;
		JSONObject enemyMid = null;
		JSONObject enemyJungle = null;

		JSONObject player;
		int myTeamId = me.getInt("teamId");


		for(int i = 0; i < data.length(); i++)
		{
			player = data.getJSONObject(i);

			if(player.getString("teamPosition").equals("MIDDLE"))
			{
				if(player.getInt("teamId") != myTeamId)
				{
					enemyMid = player;
				}	
			}
			if(player.getString("teamPosition").equals("JUNGLE"))
			{
				if(player.getInt("teamId") == myTeamId)
				{
					myJungle = player;
				}
				else
				{
					enemyJungle = player;
				}
			}
		}

		return new MidJungleDuos(me, myJungle, enemyMid, enemyJungle);
	}

	private void getMe(String userSummonerName)
	{
		JSONObject player;

		for(int i = 0; i < data.length(); i++)
		{
			player = data.getJSONObject(i);
			if(player.getString("summonerName").equals(userSummonerName))
			{
				me = player;
			}
		}
	}
}