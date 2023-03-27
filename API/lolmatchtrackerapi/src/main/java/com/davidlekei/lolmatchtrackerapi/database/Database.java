package com.davidlekei.lolmatchtrackerapi.database;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;
import com.davidlekei.lolmatchtrackerapi.exceptions.persistence.TransactionException;

import java.sql.SQLException;

public interface Database
{
	//Generic database operations
	public static Database get(){return null;};
	public void rollback(DataObject obj);

	//Rune related queries
	public Rune getRuneFromId(int id);

	public int persistRunePage(RunePage runePage, int userId) throws SQLException;
	public void persistMatch(Match match) throws SQLException, TransactionException;
}
