package com.davidlekei.lolmatchtrackerapi.builders.data.game;

import com.davidlekei.lolmatchtrackerapi.builders.Builder;
import com.davidlekei.lolmatchtrackerapi.builders.data.game.runes.RunePageBuilder;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.champions.ChampionConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.items.ItemConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.runes.RuneConverter;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

//TODO: This class will be responsible for building out a match Data Object
//This means that when the Game table in the database returns the foreign ID keys for the various columns, this class
//will be responsible for turning those into actual values.
//TODO: The above means that the Match class will need to be modified to not store IDs, but actual classes
//IE: a RunePage class, an GameItem class, etc.
public class MatchBuilder implements Builder
{
	private final int MAX_ITEMS = 6;

	private Match match;
	private static MatchBuilder INSTANCE;

	private ChampionConverter championConverter;
	private ItemConverter itemConverter;
	private RunePageBuilder runePageBuilder;

	//Empty private constructor for builder pattern
	public MatchBuilder()
	{
		this.match = new Match();
		this.championConverter = championConverter.get();
		this.itemConverter = ItemConverter.get();
		this.runePageBuilder = RunePageBuilder.get();
	}

	//Singleton design pattern for the database to use.
//	public static MatchBuilder get()
//	{
//		if(INSTANCE == null)
//		{
//			INSTANCE = new MatchBuilder();
//		}
//
//		INSTANCE.start();
//		return INSTANCE;
//	}

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
		//TODO: Have the MatchBuilder take configuration data for how to display dates and times (possibly per user preference)
		//For now, default to just the date, not the time
		if(date == null)
		{
			this.match.setDatePlayed(""); //TODO: Handle this better
		}
		else
		{
			String dateString = date.toString().split("T")[0];
			this.match.setDatePlayed(dateString);
		}
		
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

	//TODO: This should take a string that would be the actual notes DATA
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

	public MatchBuilder summoners(String summoner1, String summoner2)
	{
		this.match.setSummonerSpell1(summoner1);
		this.match.setSummonerSpell2(summoner2);
		return this;
	}

	public Match build()
	{
		return this.match;
	}

	public Match buildFromResultSet(ResultSet rs) throws SQLException
	{
		match = new Match();

		id(rs.getInt("id"));
		datePlayed(rs.getTimestamp("date_played"));
		duration(rs.getString("duration"));
		champions(championConverter.convert(rs.getInt("champion_played")),
				  championConverter.convert(rs.getInt("champion_against")));
		Item[] items = new Item[MAX_ITEMS];

		for(int i = 0; i < MAX_ITEMS; i++)
		{
			items[i] = itemConverter.convert(rs.getInt("item" + (i + 1)));
		}

		items(items, itemConverter.convertTrinket(rs.getInt("trinket")));

		runePage(
				runePageBuilder.keystone(rs.getInt("keystone")).
						primaryRunes(
								rs.getInt("primary_slot_1"),
								rs.getInt("primary_slot_2"),
								rs.getInt("primary_slot_3")
						)
						.secondaryRunes(
								rs.getInt("secondary_slot_1"),
								rs.getInt("secondary_slot_2")
						)
						.extras(
								rs.getInt("extra_slot_1"),
								rs.getInt("extra_slot_2"),
								rs.getInt("extra_slot_3")
						)
						.build()
		);

		notes(rs.getInt("MatchNotes"));
		user(rs.getInt("User"));
		kda(
				rs.getInt("kills"),
				rs.getInt("deaths"),
				rs.getInt("assists")
		);

		outcome(rs.getString("outcome"));

		summoners(
				rs.getString("summoner1"),
				rs.getString("summoner2")
		);

		return match;
	}
}
