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

	// public User getUser(long id) throws SQLException
	// {
	// 	String query = "SELECT * from Users where user_id = ?";
	// 	PreparedStatement statement = connection.prepareStatement(query);
	// 	statement.setLong(1, id);
	// 	ResultSet results = statement.executeQuery();
	// 	return UserBuilder.buildUser(results);
	// }

	// public User getUser(String username) throws SQLException
	// {
	// 	String query = "SELECT * from Users where name = ?";
	// 	PreparedStatement statement = connection.prepareStatement(query);
	// 	statement.setString(1, username);
	// 	ResultSet results = statement.executeQuery();
	// 	return UserBuilder.buildUser(results);
	// }

	// public List<User> getUsers() throws SQLException
	// {
	// 	String query = "SELECT * from Users";
	// 	PreparedStatement statement = connection.prepareStatement(query);
	// 	ResultSet results = statement.executeQuery();
	// 	return UserBuilder.buildUserList(results);
	// }

	// public String addUser(String username) throws SQLException
	// {
	// 	if(doesUsernameExist(username))
	// 	{
	// 		return "Username Already Exists";
	// 	}
	// 	else
	// 	{
	// 		String query = "INSERT into Users(name) VALUES(?)";
	// 		PreparedStatement statement = connection.prepareStatement(query);
	// 		statement.setString(1, username);

	// 		statement.execute();

	// 		if(!addUserSuccess(username))
	// 		{
	// 			throw new SQLException();
	// 		}
	// 		return "Success!";
	// 	}
	// }

	// public boolean addUserSuccess(String username) throws SQLException
	// {
	// 	User user = getUser(username);
	// 	if(user == null)
	// 	{
	// 		return false;
	// 	}
	// 	else
	// 	{
	// 		return true;
	// 	}
	// }

	// public boolean doesUsernameExist(String username) throws SQLException
	// {
	// 	String query = "SELECT 1 FROM Users WHERE name = ?";
	// 	PreparedStatement statement = connection.prepareStatement(query);
	// 	statement.setString(1, username);
	// 	ResultSet results = statement.executeQuery();
	// 	if(!results.next())
	// 	{
	// 		return false;
	// 	}
	// 	else
	// 	{
	// 		return true;
	// 	}
	// }

}