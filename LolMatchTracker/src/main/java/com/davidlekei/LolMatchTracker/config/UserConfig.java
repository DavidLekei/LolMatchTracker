package com.davidlekei.LolMatchTracker.config;

import java.util.HashMap;

public class UserConfig implements Config
{
	private final String APP_DATA = System.getenv("APPDATA");

	private HashMap<String, Object> config;
	private String replayDirectoryPath;
	private String filePath;

	public UserConfig()
	{
		this.replayDirectoryPath = APP_DATA + "/LolMatchTracker/replays";

		System.out.println("Setting replay directory to: " + this.replayDirectoryPath);
	}

	public String get(String attribute, String domain)
	{
		return null;
	}
	public void setConfigFile(String filePath)
	{
		this.filePath = filePath;
	}

	public Config read()
	{
		return this;
	}
}