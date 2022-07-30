package com.davidlekei.LolMatchTracker.config;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import java.util.HashMap;

public class UIConfig implements Config
{
	private String filePath;

	//TODO: Maybe make a HashMap<String, HashMap> that would map certain strings to the correct HashMap, instead of using If/Else in the read() method
	private HashMap<String, String> mainPanelConfig;
	private HashMap<String, String> sidePanelConfig;
	private HashMap<String, String> appConfig;

	private String startingGradientColor;
	private String endingGradientColor;

	public UIConfig(String filePath)
	{
		this.filePath = filePath;
		this.mainPanelConfig = new HashMap<String, String>();
		this.sidePanelConfig = new HashMap<String, String>();
		this.appConfig = new HashMap<String, String>();
		this.read();
	}

	public String get(String attribute, String domain)
	{
		if(domain.equals("MainPanel"))
		{
			return mainPanelConfig.get(attribute);
		}
		else if(domain.equals("SidePanel"))
		{
			return sidePanelConfig.get(attribute);
		}
		else if(domain.equals("App"))
		{
			return appConfig.get(attribute);
		}

		return null;
	}
	public void setConfigFile(String filePath)
	{
		this.filePath = filePath;
	}
	public Config read()
	{
		String domain;
		String attribute;
		String[] parts;

		try
		{
			BufferedReader reader = new BufferedReader(new FileReader(this.filePath));
			String line = reader.readLine();

			while(line != null)
			{
				if(line.equals("!"))
				{
					//!MainPanel
					line = reader.readLine();
					if(line.equals("MainPanel"))
					{
						line = reader.readLine();
						while((line != null) && !line.equals("#"))
						{
							parts = line.split("=");
							mainPanelConfig.put(parts[0], parts[1]);
							line = reader.readLine();
						}
					}
					else if(line.equals("SidePanel"))
					{
						line = reader.readLine();
						while((line != null) && !line.equals("#"))
						{
							parts = line.split("=");
							sidePanelConfig.put(parts[0], parts[1]);
							line = reader.readLine();
						}
					}
					else if(line.equals("App"))
					{
						line = reader.readLine();
						while((line != null) && !line.equals("#"))
						{
							parts = line.split("=");
							appConfig.put(parts[0], parts[1]);
							line = reader.readLine();
						}
					}
				}
				line = reader.readLine();
			}
		}
		catch(IOException ioe)
		{
			System.out.println("Cannot read UI Config file... using default settings");
			//TODO: Add default settings
		}
		return this;
	}
}