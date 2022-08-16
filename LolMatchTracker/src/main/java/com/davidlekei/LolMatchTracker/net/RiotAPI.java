package com.davidlekei.LolMatchTracker.net;

import com.davidlekei.LolMatchTracker.net.http.ApiHttpRequest;

import java.io.IOException;

import java.lang.InterruptedException;

public class RiotAPI
{
	private RiotAPIKey riotAPIKey;

	private final String API_REGION = "https://americas.api.riotgames.com";
	private final String API_ENDPOINT_MATCHES_BY_PUUID = "/lol/match/v5/matches/by-puuid/%s/ids";
	private final String API_ENDPOINT_MATCH = "/lol/match/v5/matches/%s";
	//private final String API_ENDPOINT = "/lol/summoner/v4/summoners/by-name/";

	public RiotAPI()
	{
		riotAPIKey = new RiotAPIKey();
	}

	public String getMatch(String matchId) throws IOException, InterruptedException
	{
		String url = API_REGION + String.format(API_ENDPOINT_MATCH, matchId) + "?api_key=" + riotAPIKey.get();
		return new ApiHttpRequest(url).get();
	}
}