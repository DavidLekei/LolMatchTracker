package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import java.sql.Timestamp;
import java.util.Date;

public class RegistrationDetails {

	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String riotAccountName; //TODO: Use riot account id? Get it automatically?
	private String password;
	private Date sent;

	public RegistrationDetails(String username, String firstName, String lastName, String email, String riotAccountName){
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.riotAccountName = riotAccountName;
		sent = new Date();
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

	public Date getCreated(){
		return sent;
	}

	public String getPassword(){
		return password;
	}

	public void setPassword(String password){
		this.password = password;
	}

	public String toString(){
		return "[RegistrationDetails] - New Registration Request - Username: " + username + " / Email: " + email;
	}
}
