package com.davidlekei.lolmatchtrackerapi.database;

import com.davidlekei.lolmatchtrackerapi.builders.data.game.MatchBuilder;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.MatchConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.champions.ChampionConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.items.ItemConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.runes.RuneConverter;
import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.SummonerSpell;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Keystone;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RuneExtra;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;
import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
import com.davidlekei.lolmatchtrackerapi.exceptions.persistence.TransactionException;
import org.hibernate.Transaction;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

//TODO: SQL Logging
//TODO: Put shared constants into a static class, such as MAX_ITEMS = 7
//TODO: Consider abstracting various persistence operations into new classes - ie: MatchPersistence.java, RunePersistence.java, etc
//		Otherwise, this file might end up being VERY large
public class MySQLDatabase implements Database
{
	private final String DB_URL = "jdbc:mysql://localhost:3306/lol_match_tracker_app?";
	private final String USER = "user=root";
	private final String PASSWORD = "password=";

	private MatchConverter matchConverter;
	private MatchBuilder matchBuilder;

	private static MySQLDatabase INSTANCE;
	private Connection connection;

	private MySQLDatabase()
	{
		try
		{
			String fullURL = DB_URL + USER + "&" + PASSWORD;
			connection = DriverManager.getConnection(fullURL);

			matchConverter = new MatchConverter();
			matchBuilder = new MatchBuilder();
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
	}

	public static Database get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new MySQLDatabase();
		}
		return INSTANCE;
	}

	public ResultSet executeSelect(String query) throws SQLException
	{
		return connection.prepareStatement(query).executeQuery();
	}

	public void rollback(DataObject obj)
	{
		System.out.println("TODO: Implement rollback");
	}

	public Match getMatch(int id)
	{
		String query = "SELECT g.id, g.date_played, g.duration, g.champion_played, g.champion_against, g.item1, g.item2, g.item3, g.item4, g.item5, g.item6, g.trinket, g.kills, g.deaths, g.assists, g.outcome, g.vision_score," +
				"rp.keystone, rp.primary_slot_1, rp.primary_slot_2, rp.primary_slot_3, rp.secondary_slot_1, rp.secondary_slot_2, rp.extra_slot_1, rp.extra_slot_2, rp.extra_slot_3," +
				"g.MatchNotes, n.data, g.User, u.username, ss1.name AS summoner1, ss2.name AS summoner2" +
				" FROM Game g " +
				"JOIN RunePage rp on rp.id = g.RunePage " +
				"JOIN Notes n on n.id = g.MatchNotes " +
				"JOIN User u on u.id = g.User " +
				"JOIN SummonerSpell ss1 on ss1.id = g.summoner1 " +
				"JOIN SummonerSpell ss2 on ss2.id = g.summoner2 " +
				"WHERE g.id = ?";
		Match match = null;

		try
		{
			PreparedStatement ps = connection.prepareStatement(query);
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();

			if(rs.next())
			{
				match = matchBuilder.buildFromResultSet(rs);
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return match;
	}

	public List<Match> getAllMatchesForUser(int userId)
	{
		List<Match> matches = new ArrayList<Match>();

		String query = "SELECT * FROM Game g JOIN RunePage rp on g.RunePage = rp.id WHERE User = ?";

		try
		{
			PreparedStatement ps = connection.prepareStatement(query);
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while(rs.next())
			{
				matches.add(matchBuilder.buildFromResultSet(rs));
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return matches;
	}

	public Rune getRuneFromId(int id)
	{
		String query = "SELECT r.keystone as Keystone, r.id AS ID, r.name as Name, rc.name AS Category, r.effect AS Effect FROM Rune r JOIN RuneCategory rc on r.category = rc.id WHERE r.id = ?";
		Rune rune = null;
		try
		{
			PreparedStatement ps = connection.prepareStatement(query);
			ps.setInt(1, id);
			ResultSet rs = ps.executeQuery();

			while(rs.next())
			{
				if(rs.getInt("Keystone") == 1)
				{
					rune = new Keystone();
				}
				else
				{
					rune = new Rune();
				}
				rune.setId(rs.getInt("ID"));
				rune.setName(rs.getString("Name"));
				rune.setCategory((rs.getString("Category")));
				rune.setEffect(rs.getString("Effect"));

				System.out.println(rune);
			}
		}
		catch(SQLException e)
		{
			e.printStackTrace();
		}
		return rune;
	}

	/*
	CHAMPIONS
	 */

	public Champion[] getAllChampions()
	{
		String query = "SELECT * FROM Champion";

		Champion[] champions = new Champion[this.getChampionCount()];
		int championId;
		String championName;

		try
		{
			PreparedStatement ps = connection.prepareStatement(query);
			ResultSet rs = ps.executeQuery();

			int count = 0;
			while(rs.next())
			{
				championId = rs.getInt("id");
				championName = rs.getString("name");
				champions[count] = new Champion(championId, championName);
				count++;
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return champions;
	}

	public int getChampionCount()
	{
		String query = "SELECT COUNT(id) AS numberOfChampions FROM Champion";
		int count = 0;

		try
		{
			PreparedStatement ps = connection.prepareStatement(query);
			ResultSet rs = ps.executeQuery();

			if(rs.next())
			{
				count = rs.getInt("numberOfChampions");
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return count;
	}

	/*
	END OF CHAMPIONS
	 */

	public Item[] getAllItems()
	{
		String query = "SELECT * FROM Item";

		Item[] items = new Item[this.getItemCount() + 1]; //Item table ID's start at 1

		try
		{
			ResultSet rs = this.executeSelect(query);

			int index = 1; //Item table ID's start at 1
			while(rs.next())
			{
				items[index] = new Item(
						rs.getInt("id"),
						rs.getString("name")
				);
				index++;
			}

		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return items;
	}

	public int getItemCount()
	{
		String query = "SELECT COUNT(id) as itemCount FROM Item";
		int itemCount = 0;

		try
		{
			ResultSet rs = this.executeSelect(query);
			if(rs.next())
			{
				itemCount = rs.getInt("itemCount");
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return itemCount;
	}

	public Rune[] getAllRunes()
	{
		String query = "SELECT r.id AS RuneID, r.name AS RuneName, r.keystone AS keystone, r.effect AS effect, rc.name as category FROM Rune r JOIN RuneCategory rc on r.category = rc.id";

		Rune[] runes = new Rune[this.getRuneCount() + 1]; //Need to add 1 since the Rune table starts indexing ID values at 1
		int keystone;

		try
		{
			ResultSet rs = this.executeSelect(query);

			int index = 1; //Start at 1 since the Rune table starts with ID = 1 (ie there is no ID = 0 in this table)
			while(rs.next())
			{
				keystone = rs.getInt("keystone");

				if(keystone == 0)
				{
					runes[index] = new Rune(
							rs.getInt("RuneID"),
							rs.getString("RuneName"),
							rs.getString("category"),
							rs.getString("effect")
					);
				}
				else if(keystone == 1)
				{
					runes[index] = new Keystone(
							rs.getInt("RuneID"),
							rs.getString("RuneName"),
							rs.getString("category"),
							rs.getString("effect")
					);
				}
				index++;
			}

		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return runes;
	}

	public int getRuneCount()
	{
		String query = "SELECT COUNT(id) as runeCount FROM Rune";
		int runeCount = 0;

		try
		{
			ResultSet rs = this.executeSelect(query);
			if(rs.next())
			{
				runeCount = rs.getInt("runeCount");
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return runeCount;
	}

	public Rune[] getAllRuneExtras()
	{
		String query = "SELECT * FROM RuneExtra";

		Rune[] extras = new RuneExtra[this.getRuneExtrasCount()];

		try
		{
			ResultSet rs = this.executeSelect(query);

			int index = 0;
			while(rs.next())
			{
				extras[index] = new RuneExtra(
						rs.getInt("id"),
						rs.getString("name"),
						rs.getString("bonus")
				);
				index++;
			}

		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return extras;
	}

	public int getRuneExtrasCount()
	{
		String query = "SELECT COUNT(id) as extrasCount FROM RuneExtra";
		int extrasCount = 0;

		try
		{
			ResultSet rs = this.executeSelect(query);
			if(rs.next())
			{
				extrasCount = rs.getInt("extrasCount");
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return extrasCount;
	}

	//Returns the ID if the Rune Page was successfully persisted to the DB.
	//Returns -1 if not.
	public int persistRunePage(RunePage runePage, int userId) throws SQLException
	{
		String query = "INSERT INTO RunePage(keystone, primary_slot_1, primary_slot_2, primary_slot_3, secondary_slot_1, secondary_slot_2, extra_slot_1, extra_slot_2, extra_slot_3, user_id) " +
				"VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

		int keystoneId = runePage.getKeystone().getId();

		Rune[] primaries = runePage.getPrimaries();
		int primarySlot1Id = primaries[0].getId();
		int primarySlot2Id = primaries[1].getId();
		int primarySlot3Id = primaries[2].getId();

		Rune[] secondaries = runePage.getSecondaries();
		int secondarySlot1Id = secondaries[0].getId();
		int secondarySlot2Id = secondaries[1].getId();

		Rune[] extras = runePage.getExtras();
		int extraSlot1Id = extras[0].getId();
		int extraSlot2Id = extras[1].getId();
		int extraSlot3Id = extras[2].getId();

		PreparedStatement ps = connection.prepareStatement(query, Statement.RETURN_GENERATED_KEYS);
		ps.setInt(1, keystoneId);
		ps.setInt(2, primarySlot1Id);
		ps.setInt(3, primarySlot2Id);
		ps.setInt(4, primarySlot3Id);
		ps.setInt(5, secondarySlot1Id);
		ps.setInt(6, secondarySlot2Id);
		ps.setInt(7, extraSlot1Id);
		ps.setInt(8, extraSlot2Id);
		ps.setInt(9, extraSlot3Id);
		ps.setInt(10, userId);

		int rows = ps.executeUpdate();
		if(rows != 1)
		{
			//TODO: Custom exception type
			throw new SQLException();
		}

		ResultSet insertedRow = ps.getGeneratedKeys();
		if(insertedRow.next())
		{
			return insertedRow.getInt(1);
		}
		return 0;
	}

	public int persistNotes()
	{
		return 1;
	}

	//IMPORTANT: Persisting a new match requires persisting a row to the RunePage table and row(s) to the Notes table.
	//If for whatever reason, those operations succeed but the match insertion fails, then the RunePage/Notes tables need to be rolled back.
	//This is where the TransactionException class comes in.
	//Pass the failed objects to the TransactionException constructor, and it will roll them back for you.
	public void persistMatch(Match match) throws SQLException, TransactionException
	{
		String query = "INSERT INTO Game(date_played, duration, champion_played, champion_against, item1, item2, item3, item4, item5, item6, trinket, RunePage, MatchNotes, User, kills, deaths, assists, outcome, summoner1, summoner2) " +
				"VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

		Timestamp datePlayed;
		String duration;
		int championPlayedId;
		int championAgainstId;
		int[] itemIds;
		int trinketId;
		int runePageId;
		int notesId;
		int userId;
		int kills;
		int deaths;
		int assists;
		String outcome;
		int summonerId1;
		int summonerId2;

		//Helper variables
		int index = 0;
		String[] kdaSplit = match.getKda().split("/");

		//TODO: Wrap this whole thing in a transaction some how?

		//First, we need to persist the RunePage, in order to link the foreign key to the RunePage table
		//persistRunePage() will throw an exception if it fails, don't need to check if ID returned is valid.
		runePageId = persistRunePage(match.getRunePage(), match.getUser());

		//Then we need to ensure we can persist the Notes
		//persistNotes() will throw an exception if it fails, don't need to check if ID returned is valid.
		//TODO: Persist notes properly, once a Notes class has been written
		notesId = persistNotes(); //TODO: Once Notes class has been implemented

		itemIds = new int[6]; //TODO: Change to constant

		datePlayed = Timestamp.valueOf(match.getDatePlayed());
		duration = match.getDuration();

		championPlayedId = match.getChampionPlayed().getId();
		championAgainstId = match.getChampionAgainst().getId();

		for(Item item : match.getItems())
		{
			System.out.println("Item: " + item);
			itemIds[index] = item.getId();
			index++;
		}

		trinketId = match.getTrinket().getId();
		userId = match.getUser(); //TODO: Once User class has been implemented

		//TODO: Potential exception handling
		kills = Integer.parseInt(kdaSplit[0]);
		deaths = Integer.parseInt(kdaSplit[1]);
		assists = Integer.parseInt(kdaSplit[2]);

		outcome = match.getOutcome();

		summonerId1 = 1; //1 = Flash TODO: Once SummonerSpell class has been implemented
		summonerId2 = 2; //2 = Ignite TODO: Once SummonerSpell class has been implemented

		try
		{
			//TODO: Logging
			System.out.println("PERSISTING NEW MATCH: " + match);

			PreparedStatement ps = connection.prepareStatement(query);
			ps.setTimestamp(1, datePlayed);
			ps.setString(2, duration);
			ps.setInt(3, championPlayedId);
			ps.setInt(4, championAgainstId);
			ps.setInt(5, itemIds[0]);
			ps.setInt(6, itemIds[1]);
			ps.setInt(7, itemIds[2]);
			ps.setInt(8, itemIds[3]);
			ps.setInt(9, itemIds[4]);
			ps.setInt(10, itemIds[5]);
			ps.setInt(11, trinketId);
			ps.setInt(12, runePageId);
			ps.setInt(13, notesId);
			ps.setInt(14, userId);
			ps.setInt(15, kills);
			ps.setInt(16, deaths);
			ps.setInt(17, assists);
			ps.setString(18, outcome);
			ps.setInt(19, summonerId1);
			ps.setInt(20, summonerId2);

			//TODO: Wrap in transaction?
			ps.executeUpdate();
		}
		catch(SQLException sqle)
		{
			throw new TransactionException(this, match.getRunePage());
		}
	}

	public SummonerSpell[] getAllSummonerSpells()
	{
		String query = "SELECT * FROM SummonerSpell";
		SummonerSpell[] summonerSpells = new SummonerSpell[this.getSummonerSpellCount()];

		try
		{
			ResultSet rs = executeSelect(query);
			int index = 0;
			while(rs.next())
			{
				summonerSpells[index] = new SummonerSpell(
						rs.getInt("id"),
						rs.getString("name"),
						rs.getFloat("cooldown"),
						rs.getInt("effect_range"),
						rs.getString("effect")
				);
				index++;
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return summonerSpells;
	}

	private int getSummonerSpellCount()
	{
		String query = "SELECT COUNT(id) AS count FROM SummonerSpell";
		int count = 0;

		try
		{
			ResultSet rs = executeSelect(query);
			if(rs.next())
			{
				count = rs.getInt("count");
			}
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}

		return count;
	}

	/*
	////////////////////////
	Recordings
	////////////////////////
	*/

	public List<Recording> getRecordings(String username) throws SQLException{
		String query = "select r.id AS `videoId`, r.title, played.name AS `champion_played`, against.name AS `champion_against`, m.outcome, r.created_on AS `date` FROM Recording r JOIN Game m on m.id = r.match_id JOIN Champion played on played.id = m.champion_played JOIN Champion against on against.id = m.champion_against WHERE r.user_id = ?;";
		List<Recording> recordings = new ArrayList<Recording>();
		int userId = getUserIdFromUsername(username);

		PreparedStatement ps = connection.prepareStatement(query);
		ps.setInt(1, userId);
		ResultSet results = ps.executeQuery();

		while(results.next()){
			String date = results.getTimestamp("date").toString();
			recordings.add(new Recording(results.getInt("videoId"), results.getString("title"), results.getString("champion_played"), results.getString("champion_against"), results.getString("outcome"), date, "test_thumbnail.jpg"));
		}

		return recordings;
	}

	public void saveRecording(String filePath, String username) throws SQLException{
		String query = "INSERT INTO Recording(path, user_id, created_on) VALUES(?, ?, NOW());";

		int userId = getUserIdFromUsername(username);

		PreparedStatement ps = connection.prepareStatement(query);
		ps.setString(1, filePath);
		ps.setInt(2, userId);

		ps.executeUpdate();
	}

	private int getUserIdFromUsername(String username) throws SQLException{
		String query = "SELECT id FROM user WHERE username = ?";
		PreparedStatement ps = connection.prepareStatement(query);
		ps.setString(1, username);

		int id = -1;

		ResultSet results = ps.executeQuery();
		while(results.next()){
			id = results.getInt("id");
		}

		return id;
	}
}
