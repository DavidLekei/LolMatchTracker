package com.davidlekei.LolMatchTracker.net;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class RiotAPIKey
{

	private final String API_KEY_FILE_PATH = "./.api_key/riot_api_key.txt";
	private String api_key;


	public RiotAPIKey()
	{
		api_key = read_api_key_file();
	}

	public String get()
	{
		return api_key;
	}

	private String read_api_key_file()
	{
		String api_key = null;
		try
		{
			api_key = new BufferedReader(new FileReader(API_KEY_FILE_PATH)).readLine();
		}
		catch(IOException ioe)
		{
			System.out.println("ERROR - Could not read API KEY file");
		}
		return api_key;
	}
}