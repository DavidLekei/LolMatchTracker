package com.davidlekei.LolMatchTracker.config;

public class UserConfig implements Config
{
	private String filePath;

	public UserConfig()
	{
		
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