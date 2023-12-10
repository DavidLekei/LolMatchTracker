package com.davidlekei.lolmatchtrackerapi.controllers.auth;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;
import com.davidlekei.lolmatchtrackerapi.data.auth.UserAuthData;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController implements Controller {

	private final int ONE_DAY_UNIX_TIME = 86400000;

	@CrossOrigin()
	@PostMapping("/auth/validateToken")
	public boolean validateToken(@RequestBody String token){
		System.out.println(("validating token: " + token));
		return true;
	}

	@CrossOrigin
	@PostMapping("/auth/authenticate")
	public UserAuthData authenticate(@RequestBody String username) //TODO: Make custom 'UserAuthRequest' object that contains uername, password, etc from RequestBody
	{
		return new UserAuthData(username, "token_generated_from_api", "Diamond 1", getCurrentUnixTimestamp(), getCurrentUnixTimestamp() + ONE_DAY_UNIX_TIME);
	}

	@Override
	public void printDebug() {

	}

	private long getCurrentUnixTimestamp(){
		return System.currentTimeMillis() / 1000L;
	}
}
