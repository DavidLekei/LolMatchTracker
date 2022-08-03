package com.davidlekei.LolMatchTracker.config;

import com.davidlekei.LolMatchTracker.ui.PanelItem;
import com.davidlekei.LolMatchTracker.ui.SidePanelMenuItem;
import com.davidlekei.LolMatchTracker.ui.Icon;
import com.davidlekei.LolMatchTracker.ui.MainPanelItem;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;

public class UIConfig implements Config
{
	private String filePath;

	//TODO: Maybe make a HashMap<String, HashMap> that would map certain strings to the correct HashMap, instead of using If/Else in the read() method
	private HashMap<String, String> mainPanelConfig;
	private HashMap<String, String> sidePanelConfig;
	private HashMap<String, String> appConfig;
	private HashMap<String, List<PanelItem>> sidePanelToMainPanelComponents;

	private List<PanelItem> sidePanelComponents;
	private List<PanelItem> mainPanelComponents;

	private String startingGradientColor;
	private String endingGradientColor;

	public UIConfig(String filePath)
	{
		this.filePath = filePath;
		this.mainPanelConfig = new HashMap<String, String>();
		this.sidePanelConfig = new HashMap<String, String>();
		this.appConfig = new HashMap<String, String>();


		this.sidePanelToMainPanelComponents = new HashMap<String, List<PanelItem>>();
		this.mainPanelComponents = new ArrayList<PanelItem>();
		this.sidePanelComponents = new ArrayList<PanelItem>();
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

	public MainPanelItem createMainPanelComponent(BufferedReader reader) throws IOException
	{
		String line = reader.readLine();
		String[] parts;
		String text = "ERROR";
		String colorHexCode = "#FFFFFF";

		while((line != null) && (!line.equals("</MPC>")))
		{
			parts = line.split("=");
			if(parts[0].equals("text"))
			{
				text = parts[1];
			}
			else if(parts[0].equals("color"))
			{
				colorHexCode = parts[1];
			}

			line = reader.readLine();
		}

		return new MainPanelItem(text, colorHexCode);
	}

	public void addPanelComponent(List<PanelItem> panelComponents, BufferedReader reader) throws IOException
	{
		String[] parts;
		Icon icon = null;
		String text = "ERROR";

		List<PanelItem> mainPanelComponentsForSideSelection = new ArrayList<PanelItem>();

		String line = reader.readLine();

		while(line != null && !line.equals("</C>"))
		{
			if(line.equals("<MPC>"))
			{
				mainPanelComponentsForSideSelection.add(createMainPanelComponent(reader));
			}
			else
			{
				parts = line.split("=");
				if(parts[0].equals("icon"))
				{
					try
					{
						icon = new Icon(parts[1]);
					}
					catch(IOException ioe)
					{
						System.out.println("Could not find icon file: " + parts[1]);
					}
				}
				else if(parts[0].equals("text"))
				{
					text = parts[1];
				}
			}
			line = reader.readLine();
		}

		panelComponents.add(new SidePanelMenuItem(icon, text));
		sidePanelToMainPanelComponents.put(text, mainPanelComponentsForSideSelection);
	}

	public List<PanelItem> getPanelComponents(String panelName)
	{
		if(panelName.equals("SidePanel"))
		{
			return this.sidePanelComponents;
		}
		else if(panelName.equals("MainPanel"))
		{
			return this.mainPanelComponents;
		}
		return null;
	}

	public List<PanelItem> getMainPanelComponentsFromSideSelection(String sidePanelSelection)
	{
		//List<PanelItem> l = new ArrayList<PanelItem>();
		//l.add(new MainPanelItem("TEST"));
		//return l;
		System.out.println("DEBUG - getMainPanelComponentsFromSideSelection() - sidePanelSelection = " + sidePanelSelection);

		return sidePanelToMainPanelComponents.get(sidePanelSelection);
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
							if(line.equals("<C>"))
							{
								addPanelComponent(mainPanelComponents, reader);
							}
							else
							{
								parts = line.split("=");
								mainPanelConfig.put(parts[0], parts[1]);
								line = reader.readLine();
							}
						}
					}
					else if(line.equals("SidePanel"))
					{
						line = reader.readLine();
						while((line != null) && !line.equals("#"))
						{
							if(line.equals("<C>"))
							{
								addPanelComponent(sidePanelComponents, reader);
							}
							else
							{
								parts = line.split("=");
								sidePanelConfig.put(parts[0], parts[1]);
							}
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