package com.davidlekei.lolmatchtrackerapi.database;

public class DatabaseConnection
{
	private static Database db;
	private static DatabaseConnection INSTANCE;

	private DatabaseConnection(){}

	public static DatabaseConnection get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new DatabaseConnection();
		}

		return INSTANCE;
	}

	public Database getDatabase()
	{
		if(db == null)
		{
			db = MySQLDatabase.get();
		}

		return db;
	}
}
