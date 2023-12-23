package com.davidlekei.lolmatchtrackerapi.security.authentication.session;

import com.davidlekei.lolmatchtrackerapi.security.authentication.user.UserDetails;

public class Session {

	private String token;
	private UserDetails userDetails;

	public Session(String token, UserDetails userDetails){
		this.token = token;
		this.userDetails = userDetails;
	}

	public String getToken(){
		return this.token;
	}

	public UserDetails getUserDetails(){
		return this.userDetails;
	}

	public void setToken(String token){
		this.token = token;
	}

	public boolean sameAs(Session s){
		return (this.token.equals(s.getToken()) && this.userDetails.getUsername().equals(s.getUserDetails().getUsername()));
	}

	public boolean has(String token, String username){
		return (this.token.equals(token) && this.userDetails.getUsername().equals(username));
	}

}
