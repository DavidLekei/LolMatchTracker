package com.davidlekei.lolmatchtrackerapi.converters.data.game.champions;

import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;

//TODO: Load this into a table on App start up to avoid running SQL queries every time.
public class ChampionConverter
{
	public ChampionConverter()
	{

	}

	public Champion convert(int id)
	{
		if(id == 0)
		{
			return new Champion(144, "Viktor");
		}
		else
		{
			return new Champion(153, "Yone");
		}
	}
}
