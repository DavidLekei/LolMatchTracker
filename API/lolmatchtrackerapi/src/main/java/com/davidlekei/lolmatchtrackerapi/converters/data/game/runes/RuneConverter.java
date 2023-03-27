package com.davidlekei.lolmatchtrackerapi.converters.data.game.runes;

import com.davidlekei.lolmatchtrackerapi.data.game.runes.ExtraRune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Keystone;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;

//TODO: This class will be responsible for retrieving the Rune information from the Rune tables in the database
//TODO: Figure out how to load and cache the Rune data from the database into a table on Application start up to reduce SQL query time.
public class RuneConverter
{
	private Database db;

	public RuneConverter()
	{
		db = DatabaseConnection.get().getDatabase();
	}

	//TODO: All DB retrievals should be in a try/catch and throw a CUSTOM exception type
	public Rune convert(int id)
	{
		return db.getRuneFromId(id);
	}

	public Rune convertExtraRune(int id)
	{
		return new ExtraRune(id, "Attack Speed", null, "+10% Attack Speed");
	}

}
