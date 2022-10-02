package com.davidlekei.LolMatchTracker.database;

import com.davidlekei.LolMatchTracker.database.MySQLDatabase;

import java.sql.SQLException;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

import java.util.List;

public abstract class Database
{

	private static Database INSTANCE;

	public abstract ResultSet execute(PreparedStatement stmt) throws SQLException;

	public abstract ResultSet executeQuery(PreparedStatement stmt) throws SQLException;

	public abstract PreparedStatement getPreparedStatement(String query) throws SQLException;

	public static Database get() throws SQLException
	{
		if(INSTANCE == null)
		{
			INSTANCE = new MySQLDatabase();
		}
		return INSTANCE;
	}
}