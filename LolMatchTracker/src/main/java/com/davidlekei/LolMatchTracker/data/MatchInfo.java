package com.davidlekei.LolMatchTracker.data;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONException;

public class MatchInfo
{
	private JSONObject me;
	public String matchId;
	public String myChamp;
	public String enemyMid;
	public String myJungle;
	public String enemyJungle;
	public int[] myItems;
	public int myGold;
	public int myKills;
	public int myDeaths;
	public int myAssists;
	public int myCS;
	public int myDamage;
	public boolean won;

	private final int ITEM_SLOTS = 7;

	public MatchInfo(JSONObject usersMatchData, String userSummonerName, String matchId) throws NullPointerException, JSONException
	{
		MidJungleDuos midJungleDuos = new MatchInfoParser(usersMatchData.getJSONArray("participants")).parseMidJungle(userSummonerName);

		this.matchId = matchId;

		me = midJungleDuos.getMe();
		myChamp = me.getString("championName");
		myJungle = midJungleDuos.getMyJungle().getString("championName");
		enemyMid = midJungleDuos.getEnemyMid().getString("championName");
		enemyJungle = midJungleDuos.getEnemyJungle().getString("championName");

		myItems = new int[ITEM_SLOTS];
		myItems[0] = me.getInt("item0");
		myItems[1] = me.getInt("item1");
		myItems[2] = me.getInt("item2");
		myItems[3] = me.getInt("item3");
		myItems[4] = me.getInt("item4");
		myItems[5] = me.getInt("item5");
		myItems[6] = me.getInt("item6");
		
		myGold = me.getInt("goldEarned");
		myKills = me.getInt("kills");
		myDeaths = me.getInt("deaths");
		myAssists = me.getInt("assists");
		myCS = me.getInt("neutralMinionsKilled");
		myDamage = me.getInt("totalDamageDealtToChampions");

		won = me.getBoolean("win");
	}
}