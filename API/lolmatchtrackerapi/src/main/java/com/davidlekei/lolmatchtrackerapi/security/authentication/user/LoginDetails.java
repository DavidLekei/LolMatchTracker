package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import java.util.Date;

public class LoginDetails {

	private String username;
	private String password;
	private Date now;

	public LoginDetails(String username, String password){
		this.username = username;
		this.password = password;
		now = new Date();
	}

	public String getUsername(){
		return this.username;
	}

	public String getPassword(){
		return this.password;
	}

	public Date getLoginTime(){
		return this.now;
	}

	public String toString(){
		return "[LoginDetails] - User: " + this.username + " attempted to log in at: " + this.now;
	}

}
