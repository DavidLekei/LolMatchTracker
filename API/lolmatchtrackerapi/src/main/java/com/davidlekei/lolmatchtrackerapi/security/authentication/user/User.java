package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import java.sql.Timestamp;

public class User {

	private String username;
	private String hashedPassword;
	private String email;
	private Timestamp createdOn;
	private Timestamp lastLogin;

	public User(){}

	public User(String username, String hashedPassword, String email, Timestamp createdOn, Timestamp lastLogin) {
		this.username = username;
		this.hashedPassword = hashedPassword;
		this.email = email;
		this.createdOn = createdOn;
		this.lastLogin = lastLogin;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getHashedPassword() {
		return hashedPassword;
	}

	public void setHashedPassword(String hashedPassword) {
		this.hashedPassword = hashedPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	public Timestamp getLastLogin() {
		return lastLogin;
	}

	public void setLastLogin(Timestamp lastLogin) {
		this.lastLogin = lastLogin;
	}


}
