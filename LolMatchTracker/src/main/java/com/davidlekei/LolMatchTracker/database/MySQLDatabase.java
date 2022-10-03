package com.davidlekei.LolMatchTracker.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

// import com.davidlekei.Goals.GoalsService.models.User;
// import com.davidlekei.Goals.GoalsService.models.Goal;

// import com.davidlekei.Goals.GoalsService.database.util.UserBuilder;
// import com.davidlekei.Goals.GoalsService.database.util.GoalBuilder;

import java.util.List;
import java.util.Properties;

public class MySQLDatabase extends Database
{
	private Connection connection;
	private Properties connectionProperties;

	//TODO: Get this info from either a file or system environment variables
	private String dbConnectionString = "jdbc:mysql://localhost:3306/LolMatchTracker_db";
	private String username = "root";
	private String password = "";

	//TODO: Get username and password from a config file.
	public MySQLDatabase() throws SQLException
	{
		connectionProperties = new Properties();
		connectionProperties.put("user", username);
		connectionProperties.put("password", password);

		connection = DriverManager.getConnection(dbConnectionString, connectionProperties);
	}

	public ResultSet execute(PreparedStatement stmt) throws SQLException
	{
		stmt.execute();
		return stmt.getResultSet();
	}

	public ResultSet executeQuery(PreparedStatement stmt) throws SQLException
	{
		return stmt.executeQuery();
	}

	public PreparedStatement getPreparedStatement(String query) throws SQLException
	{
		return connection.prepareStatement(query);
	}

}