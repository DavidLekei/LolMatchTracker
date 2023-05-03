package com.davidlekei.lolmatchtrackerapi.converters.data.game.SummonerSpells;

import com.davidlekei.lolmatchtrackerapi.data.game.SummonerSpell;

public class SummonerSpellConverter
{

	private SummonerSpell[] summonerSpells;
	private static SummonerSpellConverter INSTANCE;
	private boolean loaded;

	private SummonerSpellConverter()
	{
		summonerSpells = null;
		loaded = false;
	}

	public void load(SummonerSpell[] summonerSpells)
	{
		//Prevent load() from being executed more than once
		if(loaded)
		{
			return;
		}

		this.setSummonerSpells(summonerSpells);
		this.setLoaded();
	}

	private void setSummonerSpells(SummonerSpell[] summonerSpells)
	{
		this.summonerSpells = summonerSpells;
	}

	private void setLoaded()
	{
		this.loaded = true;
	}

	//Implement something (not sure what) if load() hasn't been called
	public static SummonerSpellConverter get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new SummonerSpellConverter();
		}
		return INSTANCE;
	}

	public SummonerSpell convert(int id)
	{
		return summonerSpells[id];
	}
}

