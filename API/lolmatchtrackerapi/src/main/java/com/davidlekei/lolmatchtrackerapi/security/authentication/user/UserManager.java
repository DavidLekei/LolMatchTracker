package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.IncorrectPasswordException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class UserManager {
	private static UserManager INSTANCE;

	private Connection db;
	private PasswordEncoder passwordEncoder;

	private UserManager(UserManagerConfig config){
		db = DatabaseConnection.get().getDatabase().getConnection();
		passwordEncoder = new BCryptPasswordEncoder();
	}

	public static UserManager getInstance(){
		if(INSTANCE == null){
			INSTANCE = new UserManager(null);
		}
		return INSTANCE;
	}

	public void createNewUser(String username, String password) throws SQLException {


		PreparedStatement ps = db.prepareStatement("");
	}

	public UserDetails validateLoginDetails(LoginDetails loginDetails) throws SQLException, IncorrectPasswordException{
		UserDetails userDetails =  validateLoginDetails(loginDetails.getUsername(), loginDetails.getPassword());
		if(userDetails == null){
			throw new IncorrectPasswordException();
		}
		return userDetails;
//		String hashedPassword = hashPassword(loginDetails.getPassword());
//		System.out.println("hashedPassword: " + hashedPassword);
		//return new UserDetails(loginDetails.getUsername(), "Test", "Account", "testaccount1@tracker.io", "Test Riot Account");
	}

	private UserDetails validateLoginDetails(String username, String password) throws SQLException{
		UserDetails userDetails = null;
		String sql = "SELECT username, hashed_password, first_name, last_name, email, riot_account FROM user WHERE username = ?";

		PreparedStatement ps = db.prepareStatement(sql);
		ps.setString(1, username);

		ResultSet results = ps.executeQuery();

		while(results.next()) {
			if (passwordEncoder.matches(password, results.getString("hashed_password"))) {
				userDetails = new UserDetails(username, results.getString("first_name"), results.getString("last_name"), results.getString("email"), results.getString("riot_account"));
			}
		}

		return userDetails;
	}

	public boolean isValidUser(UserDetails userDetails){
		return true;
	}

	private String hashPassword(String password){
		return passwordEncoder.encode(password);
	}

}
