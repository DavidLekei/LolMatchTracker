package com.davidlekei.lolmatchtrackerapi.builders.data.game;

import com.davidlekei.lolmatchtrackerapi.builders.Builder;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;

import java.sql.Timestamp;

//TODO: This class will be responsible for building out a match Data Object
//This means that when the Game table in the database returns the foreign ID keys for the various columns, this class
//will be responsible for turning those into actual values.
//TODO: The above means that the Match class will need to be modified to not store IDs, but actual classes
//IE: a RunePage class, an GameItem class, etc.
public class MatchBuilder implements Builder
{
	private Match match;
	private static MatchBuilder INSTANCE;

	//Empty private constructor for builder pattern
	private MatchBuilder() {}

	//Singleton design pattern for the database to use.
	public static MatchBuilder get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new MatchBuilder();
		}

		INSTANCE.start();
		return INSTANCE;
	}

	//Private so that only the SINGLETON instance can call it, and thus can only be used by INSTANCE via the get() method.
	private void start()
	{
		this.match = new Match();
	}

	public MatchBuilder id(int id)
	{
		this.match.setId(id);
		return this;
	}

	public MatchBuilder duration(String duration)
	{
		this.match.setDuration(duration);
		return this;
	}

	public MatchBuilder datePlayed(Timestamp date)
	{
		this.match.setDatePlayed(date);
		return this;
	}

	public MatchBuilder champions(Champion championPlayed, Champion championAgainst)
	{
		this.match.setChampionPlayed(championPlayed);
		this.match.setChampionAgainst(championAgainst);
		return this;
	}

	public MatchBuilder items(Item[] items, Trinket trinket)
	{
		this.match.setItems(items);
		this.match.setTrinket(trinket);
		return this;
	}

	//TODO: Using the ID retrieved from the Game table in the database, retrieve the RunePage data from the RunePage table, and create a RunePage object to be set on the match.
	public MatchBuilder runePage(RunePage runePage)
	{
		this.match.setRunePage(runePage);
		return this;
	}

	public MatchBuilder notes(int notesId)
	{
		this.match.setMatchNotes(notesId);
		return this;
	}

	public MatchBuilder user(int userId)
	{
		this.match.setUser(userId);
		return this;
	}

	public MatchBuilder kda(int kills, int deaths, int assists)
	{
		this.match.setKda("" + kills + "/" + deaths + "/" + assists);
		return this;
	}

	public MatchBuilder outcome(String outcome)
	{
		this.match.setOutcome(outcome);
		return this;
	}

	public Match build()
	{
		return this.match;
	}
}
