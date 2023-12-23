package com.davidlekei.lolmatchtrackerapi.security.authentication.session;

import com.davidlekei.lolmatchtrackerapi.security.authentication.user.UserDetails;

import java.util.ArrayList;
import java.util.List;

public class SessionManager {

	private static SessionManager INSTANCE;

	private List<Session> sessions;

	private SessionManager(SessionManagerConfig config){
		sessions = new ArrayList<Session>();
	}

	public static SessionManager getInstance(){
		if(INSTANCE == null){
			INSTANCE = new SessionManager(null);
		}

		return INSTANCE;
	}

	public void add(Session s){
		sessions.add(s);
	}

	public void createSession(String token, UserDetails userDetails){
		sessions.add(new Session(token, userDetails));
	}

	public boolean validateToken(String token, String username){
		Session s = getSessionByToken(token);

		return s.has(token, username);
	}

	public Session getSessionByToken(String token){
		for(Session s : sessions){
			if(s.getToken().equals(token)){
				return s;
			}
		}

		return null;
	}

}
