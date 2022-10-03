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
	public String getNotesForMatch(String matchId) throws SQLException
	{
		String query = "select nts.path from TCNotes nts join TCMatch mtch on mtch.id = nts.match_id where mtch.riot_match_id = ?";
		PreparedStatement stmt = db.getPreparedStatement(query);
		stmt.setString(1, matchId);

		//TODO: Implement another class that would act as a layer of abstraction between the connection (the part that does the actual queries) and the parsing of data to return to user
		ResultSet results = db.executeQuery(stmt);
		String notesPath = "";

		if(results.next())
		{
			notesPath = results.getString("path");
		}
		//TODO: else throw new SQLException (or other custom exception type);

		return notesPath;

		//return db.executeQuery(stmt);
	}
}