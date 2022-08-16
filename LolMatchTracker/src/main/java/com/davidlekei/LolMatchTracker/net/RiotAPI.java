package com.davidlekei.LolMatchTracker.net;

import com.davidlekei.LolMatchTracker.net.http.HttpRequest;

public class RiotAPI
{
	private RiotAPIKey riotAPIKey;

	private final String API_MATCH_ENDPOINT = "/lol/match/v5/matches/";

	public RiotAPI()
	{
		riotAPIKey = new RiotAPIKey();
	}

	public String getMatch(String matchId)
	{
		return new HttpRequest(API_MATCH_ENDPOINT + matchId).get();
	}
}