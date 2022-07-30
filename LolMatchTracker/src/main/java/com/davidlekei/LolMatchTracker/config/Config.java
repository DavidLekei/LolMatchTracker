package com.davidlekei.LolMatchTracker.config;

public interface Config
{
	public String get(String attribute, String domain);
	public void setConfigFile(String filePath);
	public Config read();
}