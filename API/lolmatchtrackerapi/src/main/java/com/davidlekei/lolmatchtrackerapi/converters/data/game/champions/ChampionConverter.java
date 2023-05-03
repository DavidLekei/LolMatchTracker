package com.davidlekei.lolmatchtrackerapi.converters.data.game.champions;

import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;

//TODO: Load this into a table on App start up to avoid running SQL queries every time.
public class ChampionConverter
{
	private Champion[] champions;
	private static ChampionConverter INSTANCE;
	private boolean loaded;

	private ChampionConverter()
	{
		champions = null;
		loaded = false;
	}

	public void load(Champion[] champions)
	{
		//Prevent load() from being executed more than once
		if(loaded)
		{
			return;
		}

		this.setChampions(champions);
		this.setLoaded();

		System.out.println("[INFO] - Initialized ChampionConverter Table");
		for(Champion champion : champions)
		{
			System.out.println(champion.getName());
		}
	}

	private void setChampions(Champion[] champions)
	{
		this.champions = champions;
	}

	private void setLoaded()
	{
		this.loaded = true;
	}

	//Implement something (not sure what) if load() hasn't been called
	public static ChampionConverter get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new ChampionConverter();
		}
		return INSTANCE;
	}

	public Champion convert(int id)
	{
		return champions[id];
	}
}
