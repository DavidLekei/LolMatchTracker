package com.davidlekei.LolMatchTracker.data;

import org.json.JSONObject;
import org.json.JSONArray;

public class MatchInfoParser
{
	private JSONArray data;

	public MatchInfoParser(JSONArray data)
	{
		this.data = data;
	}

	public MidJungleDuos parseMidJungle(String userSummonerName)
	{
		JSONObject me = null;
		JSONObject myJungle = null;
		JSONObject enemyMid = null;
		JSONObject enemyJungle = null;

		JSONObject player;

		//The player list will always go:
		/*
		TOP
		JUNGLE
		MIDDLE
		ADC
		SUPPORT
		TOP
		JUNGLE
		MIDDLE
		ADC
		SUPPORT

		However, the user we are looking for might be MIDDLE at index = 2 or index = 7
		So we need to search for the name, but once we find it, we know that jungle will
		always be at that index - 1
		*/

		for(int i = 0; i < data.length(); i++)
		{
			player = data.getJSONObject(i);

			if(player.getString("teamPosition").equals("MIDDLE"))
			{
				if(player.getString("summonerName").equals(userSummonerName))
				{
					myJungle = data.getJSONObject(i - 1);
					me = player;
				}
				else
				{
					enemyJungle = data.getJSONObject(i - 1);
					enemyMid = player;
				}
			}
		}

		return new MidJungleDuos(me, myJungle, enemyMid, enemyJungle);
	}
}