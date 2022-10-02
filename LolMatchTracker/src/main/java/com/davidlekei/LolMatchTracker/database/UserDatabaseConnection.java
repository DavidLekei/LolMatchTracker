package com.davidlekei.LolMatchTracker.database;

import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;


public class UserDatabaseConnection
{
	private Database db;

	public UserDatabaseConnection() throws SQLException
	{
		this.db = Database.get();
	}

	public int getUserIdForUsername(String username) throws SQLException
	{
		String query = "SELECT usr.id " +
						"FROM TCUser usr " + 
						"WHERE usr.username = ? LIMIT 1;";
		PreparedStatement stmt = db.getPreparedStatement(query);
		stmt.setString(1, username);

		ResultSet results = db.executeQuery(stmt);

		if(!results.next())
		{
			System.out.println("ERROR - No user id for " + username + " found.");
			throw new SQLException();
		}
		else
		{
			return results.getInt("id");
		}
	}
}