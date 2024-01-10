package com.davidlekei.lolmatchtrackerapi.controllers.data;

import com.davidlekei.lolmatchtrackerapi.controllers.Controller;
import com.davidlekei.lolmatchtrackerapi.data.stats.Stat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StatsController implements Controller {

	@CrossOrigin
	@GetMapping("/stats")
	public ResponseEntity addStat(@RequestBody Stat stat){
		return ResponseEntity.ok().build();
	}

	@Override
	public void printDebug() {

	}
}
