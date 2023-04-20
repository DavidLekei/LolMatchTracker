package com.davidlekei.lolmatchtrackerapi;

import com.davidlekei.lolmatchtrackerapi.converters.data.game.SummonerSpells.SummonerSpellConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.champions.ChampionConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.items.ItemConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.runes.RuneConverter;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;

public class DataLoader {

	private Database database;

	//TODO: Take in some kind of config to specify what should be loaded
	public DataLoader()
	{
		//TODO: Database connection maybe should also have some kind of "create" method that takes in config values from here
		//for initial setup
		this.database = DatabaseConnection.get().getDatabase();
	}

	public void loadAll()
	{
		loadChampionData();
		loadItemData();
		loadRuneData();
		loadSummonerSpells();
	}

	public void loadChampionData()
	{
		ChampionConverter championConverter = ChampionConverter.get();
		championConverter.load(database.getAllChampions());
	}

	public void loadItemData()
	{
		ItemConverter itemConverter = ItemConverter.get();
		itemConverter.load(database.getAllItems());
	}

	public void loadRuneData()
	{
		RuneConverter runeConverter = RuneConverter.get();
		runeConverter.loadRunes(database.getAllRunes());
		runeConverter.loadExtras(database.getAllRuneExtras());
	}

	public void loadSummonerSpells()
	{
		SummonerSpellConverter summonerSpellConverter = SummonerSpellConverter.get();
		summonerSpellConverter.load(database.getAllSummonerSpells());
	}
}
