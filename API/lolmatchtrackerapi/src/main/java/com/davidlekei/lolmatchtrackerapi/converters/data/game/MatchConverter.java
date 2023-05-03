package com.davidlekei.lolmatchtrackerapi.converters.data.game;

import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;

//TODO: Load and cache all of this table data upon start up.
//TODO: Honestly, if we build our own loader/caching system THAT could be a sellable product xD
public class MatchConverter
{
	public MatchConverter()
	{

	}

	//TODO: This should be in RuneConverter
	public int getRuneId(Rune rune)
	{
		return 1;
	}

	//TODO: Once SummonerSpell class is implemented
	public int getSummonerId()
	{
		return 0;
	}

	public int getChampionId(Champion champion)
	{
		return 1;
	}

	public int getItemId(GameItem item)
	{
		return 1;
	}

	public int getRunePageId(RunePage runePage)
	{
		return 1;
	}

	//TODO: Once Notes class has been implemented
	public int getNotesId()
	{
		return 0;
	}

	//TODO: Once User class has been implemented
	public int getUserId()
	{
		return 0;
	}



}
