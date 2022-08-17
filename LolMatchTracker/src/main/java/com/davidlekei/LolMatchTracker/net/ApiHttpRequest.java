package com.davidlekei.LolMatchTracker.net.http;

import org.json.JSONObject;

import java.net.http.HttpRequest;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;
import java.net.URI;

import java.io.IOException;

import java.lang.InterruptedException;

public class ApiHttpRequest
{
	private String url;
	private HttpClient client;
	private HttpRequest request;

	public ApiHttpRequest(String url)
	{
		this.url = url;
		this.client = HttpClient.newHttpClient();
	}

	public JSONObject get() throws IOException, InterruptedException
	{
		request = HttpRequest.newBuilder()
			.uri(URI.create(url))
			.GET()
			.build();

		System.out.println("Sending HTTP Request to Riot API @ " + url);
		HttpResponse<String> response = client.send(request, BodyHandlers.ofString());

		return new JSONObject(response.body());
	}

	public void post(String data)
	{

	}
}