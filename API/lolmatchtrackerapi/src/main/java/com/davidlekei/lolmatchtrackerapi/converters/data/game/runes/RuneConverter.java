package com.davidlekei.lolmatchtrackerapi.converters.data.game.runes;

import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;

//TODO: This class will be responsible for retrieving the Rune information from the Rune tables in the database
//TODO: Figure out how to load and cache the Rune data from the database into a table on Application start up to reduce SQL query time.
public class RuneConverter
{
	private Rune[] runes;
	private Rune[] extras;
	private static RuneConverter INSTANCE;
	private boolean loadedRunes;
	private boolean loadedExtras;

	private RuneConverter()
	{
		runes = null;
		extras = null;
		loadedRunes = false;
		loadedExtras = false;
	}

	public void loadRunes(Rune[] runes)
	{
		//Prevent load() from being executed more than once
		if(loadedRunes)
		{
			return;
		}

		this.setRunes(runes);
		this.setLoadedRunes();
	}

	public void loadExtras(Rune[] extras)
	{
		if(loadedExtras)
		{
			return;
		}

		this.setExtras(extras);
		this.setLoadedExtras();
	}

	private void setRunes(Rune[] runes)
	{
		this.runes = runes;
	}

	private void setExtras(Rune[] extras)
	{
		this.extras = extras;
	}

	private void setLoadedRunes()
	{
		this.loadedRunes = true;
	}

	private void setLoadedExtras()
	{
		this.loadedExtras = true;
	}

	public static RuneConverter get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new RuneConverter();
		}
		return INSTANCE;
	}

	public Rune convert(int id)
	{
		return runes[id];
	}

	public Rune convertExtraRune(int id)
	{
		return extras[id];
	}

}
