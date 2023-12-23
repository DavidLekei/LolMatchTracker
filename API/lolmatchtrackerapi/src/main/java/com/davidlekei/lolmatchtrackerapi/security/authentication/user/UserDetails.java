package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import java.sql.Timestamp;
import java.util.Date;

public class UserDetails {

	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String riotAccountName; //TODO: Use riot account id? Get it automatically?
	private String token;

	//TODO:
	//private Settings settings
	//private Account account

	public UserDetails(String username, String firstName, String lastName, String email, String riotAccountName){
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.riotAccountName = riotAccountName;
	}

	public String getUsername(){
		return username;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getRiotAccountName() {
		return riotAccountName;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token){
		this.token = token;
	}

}
