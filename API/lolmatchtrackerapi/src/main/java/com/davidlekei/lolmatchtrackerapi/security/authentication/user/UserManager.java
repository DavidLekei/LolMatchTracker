package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.EmailAlreadyExistsException;
import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.IncorrectPasswordException;
import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.UsernameAlreadyExistsException;
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

	public UserDetails validateLoginDetails(LoginDetails loginDetails) throws SQLException, IncorrectPasswordException{
		UserDetails userDetails =  validateLoginDetails(loginDetails.getUsername(), loginDetails.getPassword());
		if(userDetails == null){
			throw new IncorrectPasswordException();
		}
		return userDetails;
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

	public void registerUser(RegistrationDetails details) throws  UsernameAlreadyExistsException, EmailAlreadyExistsException, SQLException{
		if(doesUserDetailExist(details, "username")) {
			throw new UsernameAlreadyExistsException();
		}

		if(doesUserDetailExist(details, "email")) {
			throw new EmailAlreadyExistsException();
		}

		if (createNewUser(details) == 0) {
			throw new SQLException();
		}

	}

	private boolean doesUserDetailExist(RegistrationDetails userDetails, String column) throws SQLException{
		PreparedStatement ps = db.prepareStatement("SELECT COUNT(username) AS found FROM user WHERE ? = ?");
		ps.setString(1, column);
		ps.setString(2, userDetails.getUsername());
		ResultSet results = ps.executeQuery();
		if(results.next()){
			if(results.getInt("found") != 0) {
				return true;
			}
		}
		return false;
	}

	public int createNewUser(RegistrationDetails userDetails) throws SQLException {
		PreparedStatement ps = db.prepareStatement("INSERT INTO user(username, hashed_password, first_name, last_name, email, riot_account) VALUES(?, ?, ?, ?, ?, ?)");

		ps.setString(1, userDetails.getUsername());
		ps.setString(2, passwordEncoder.encode(userDetails.getPassword()));
		ps.setString(3, userDetails.getFirstName());
		ps.setString(4, userDetails.getLastName());
		ps.setString(5, userDetails.getEmail());
		ps.setString(6, userDetails.getRiotAccountName());

		return ps.executeUpdate();
	}
}
