package com.davidlekei.lolmatchtrackerapi.controllers.auth;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;
import com.davidlekei.lolmatchtrackerapi.data.auth.UserAuthData;
import com.davidlekei.lolmatchtrackerapi.security.authentication.JWT.JWTProvider;
import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.EmailAlreadyExistsException;
import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.IncorrectPasswordException;
import com.davidlekei.lolmatchtrackerapi.security.authentication.exceptions.UsernameAlreadyExistsException;
import com.davidlekei.lolmatchtrackerapi.security.authentication.session.SessionManager;
import com.davidlekei.lolmatchtrackerapi.security.authentication.user.LoginDetails;
import com.davidlekei.lolmatchtrackerapi.security.authentication.user.RegistrationDetails;
import com.davidlekei.lolmatchtrackerapi.security.authentication.user.UserDetails;
import com.davidlekei.lolmatchtrackerapi.security.authentication.user.UserManager;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class AuthController implements Controller {

	private final int ONE_DAY_UNIX_TIME = 86400000;

	private JWTProvider jwtProvider = JWTProvider.getInstance();
	private SessionManager sessionManager = SessionManager.getInstance();
	private UserManager userManager = UserManager.getInstance();

	@CrossOrigin()
	@PostMapping("/auth/verify")
	public ResponseEntity validateToken(@RequestBody String token){
		System.out.println(("validating token: " + token));

		String username = jwtProvider.verifyToken(token);
		if(username == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}

		System.out.println("username decoded: " + username);

		if(sessionManager.validateToken(token, username)){
			return ResponseEntity.ok().build();
		}else{
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
	}

	@CrossOrigin
	@PostMapping("/auth/signin")
	public ResponseEntity authenticate(@RequestBody LoginDetails loginDetails) //TODO: Accept in a UserDetails object. Front end needs to be changed to send that information as well.
	{
		System.out.println("Recieved login request. Details: " + loginDetails);
		UserDetails userDetails;
		try {
			userDetails = userManager.validateLoginDetails(loginDetails);
		}catch(IncorrectPasswordException ipe){
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}catch(SQLException sqle){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

		String token = jwtProvider.getNewToken(loginDetails.getUsername());
		sessionManager.createSession(token, userDetails);
		userDetails.setToken(token);
		return ResponseEntity.ok(userDetails);
		//return new UserAuthData(username, token, "Diamond 1", getCurrentUnixTimestamp(), getCurrentUnixTimestamp() + ONE_DAY_UNIX_TIME);
	}

	@CrossOrigin
	@PostMapping("/auth/register")
	public ResponseEntity register(@RequestBody RegistrationDetails details){

		try{
			System.out.println(details);
			userManager.registerUser(details);
		}catch(UsernameAlreadyExistsException uaee){
			System.out.println("Username already exists");
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}catch(EmailAlreadyExistsException eaee) {
			System.out.println("Email already exists");
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		}catch(SQLException sqle){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

		return ResponseEntity.ok().build();
	}

	@Override
	public void printDebug() {

	}

	private long getCurrentUnixTimestamp(){
		return System.currentTimeMillis() / 1000L;
	}
}
