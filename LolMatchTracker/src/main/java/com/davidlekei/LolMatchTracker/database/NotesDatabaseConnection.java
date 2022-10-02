package com.davidlekei.LolMatchTracker.database;

import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class NotesDatabaseConnection
{
	private Database db;

	public NotesDatabaseConnection() throws SQLException
	{
		this.db = Database.get();
	}

	//TODO: Rename to getNotesForUser
	public ResultSet getNotesForMatch(int userId) throws SQLException
	{
		String query = "select mtch.id, usr.username, nts.path from TCMatch mtch join TCUser usr on mtch.user_id = usr.id join TCNotes nts on nts.fk_user_id = usr.id where usr.id = ?";
		PreparedStatement stmt = db.getPreparedStatement(query);
		stmt.setInt(1, userId);
		return db.executeQuery(stmt);
	}
}