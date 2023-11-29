package com.davidlekei.lolmatchtrackerapi.data.auth;

public class UserAuthData {

	private String username;
	private String user_token;
	private String title;
	private long created;
	private long expires;

	public UserAuthData(String username, String user_token, String title, long created, long expires)
	{
		this.username = username;
		this.user_token = user_token;
		this.title = title;
		this.created = created;
		this.expires = expires;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUser_token() {
		return user_token;
	}

	public void setUser_token(String user_token) {
		this.user_token = user_token;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public long getCreated() {
		return created;
	}

	public void setCreated(long created) {
		this.created = created;
	}

	public long getExpires() {
		return expires;
	}

	public void setExpires(long expires) {
		this.expires = expires;
	}
}
