package com.davidlekei.lolmatchtrackerapi.database;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.SummonerSpell;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;
import com.davidlekei.lolmatchtrackerapi.data.recording.Recording;
import com.davidlekei.lolmatchtrackerapi.exceptions.persistence.TransactionException;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public interface Database
{
	//Generic database operations
	public static Database get(){return null;};
	public ResultSet executeSelect(String query) throws SQLException;
	public void rollback(DataObject obj);

	//Match methods
	public Match getMatch(int id);
	public List<Match> getAllMatchesForUser(int userId);

	//Rune related queries
	public Rune[] getAllRunes();
	public Rune[] getAllRuneExtras();

	//Champion related queries
	public Champion[] getAllChampions();

	//Item related queries
	public Item[] getAllItems();

	//SummonerSpell related queries
	public SummonerSpell[] getAllSummonerSpells();

	public int persistRunePage(RunePage runePage, int userId) throws SQLException;
	public void persistMatch(Match match) throws SQLException, TransactionException;

	//Recordings
	public List<Recording> getRecordings(String username) throws SQLException;
		//Returns the videoId number
	public int saveRecording(String filePath, String username, String title) throws SQLException;
	public int saveRecording(String filePath, String username, String title, int matchId) throws SQLException;
	public String getFilePathForVideoId(int videoId, String username) throws SQLException;
}
