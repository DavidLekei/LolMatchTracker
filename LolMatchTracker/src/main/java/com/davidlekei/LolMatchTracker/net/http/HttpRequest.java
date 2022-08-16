package com.davidlekei.LolMatchTracker.net.http;

public class HttpRequest
{
	private String url;

	public HttpRequest(String url)
	{
		this.url = url;
	}

	public String get()
	{
		return "Mock HttpRequest Data";
	}

	public void post(String data)
	{

	}
}