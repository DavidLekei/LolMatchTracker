package com.davidlekei.LolMatchTracker.data;

import org.json.JSONObject;

public class MidJungleDuos
{

	private JSONObject me;
	private JSONObject myJungle;
	private JSONObject enemyMid;
	private JSONObject enemyJungle;

	public MidJungleDuos(JSONObject me, JSONObject myJungle, JSONObject enemyMid, JSONObject enemyJungle)
	{
		this.me = me;
		this.myJungle = myJungle;
		this.enemyMid = enemyMid;
		this.enemyJungle = enemyJungle;
	}

	public JSONObject getMe()
	{
		return me;
	}

	public JSONObject getMyJungle()
	{
		return myJungle;
	}

	public JSONObject getEnemyMid()
	{
		return enemyMid;
	}

	public JSONObject getEnemyJungle()
	{
		return enemyJungle;
	}
}