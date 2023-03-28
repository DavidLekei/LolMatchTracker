package com.davidlekei.lolmatchtrackerapi.controllers.data;

import com.davidlekei.lolmatchtrackerapi.builders.data.game.MatchBuilder;
import com.davidlekei.lolmatchtrackerapi.builders.data.game.runes.RunePageBuilder;
import com.davidlekei.lolmatchtrackerapi.controllers.Controller;

import com.davidlekei.lolmatchtrackerapi.converters.data.game.champions.ChampionConverter;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.items.ItemConverter;
import com.davidlekei.lolmatchtrackerapi.data.game.Match;
import com.davidlekei.lolmatchtrackerapi.data.game.champions.Champion;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;
import com.davidlekei.lolmatchtrackerapi.database.Database;
import com.davidlekei.lolmatchtrackerapi.database.DatabaseConnection;
import com.davidlekei.lolmatchtrackerapi.exceptions.handlers.MatchExceptionHandler;
import com.davidlekei.lolmatchtrackerapi.exceptions.persistence.TransactionException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.sql.Timestamp;

//TODO: Implement new features
@RestController
public class MatchController implements Controller
{
	private final int MAX_ITEMS = 7;
	private final int MAX_NON_TRINKET_ITEMS = 6;

	private final MatchBuilder matchBuilder = MatchBuilder.get();
	private final RunePageBuilder runePageBuilder = RunePageBuilder.get();
	private final ChampionConverter championConverter = new ChampionConverter();
	private final ItemConverter itemConverter = new ItemConverter();
	private static Database database = DatabaseConnection.get().getDatabase();

	/*********************************************************************************
		GET methods
	**********************************************************************************/
	@GetMapping("/match")
	public Match getMatchFromId(@RequestParam(value="matchId") int id)
	{
		System.out.println("Received a GET request for Match with ID: " + id);
		Match match;
		Timestamp datePlayed;
		String duration;
		Champion championPlayed;
		Champion championAgainst;
		Item[] items;
		Trinket trinket;
		RunePage runePage;
		int notesId;
		int userId;
		int kills;
		int deaths;
		int assists;
		String outcome;

		//TODO:Get dateplayed
		datePlayed = null;

		//TODO: Get duration
		duration = "20:00:00";

		//Get champ information
		championPlayed = championConverter.convert(0);
		championAgainst = championConverter.convert(1);

		//Get and set items into the Items array
		items = new Item[MAX_NON_TRINKET_ITEMS];
		for(int i = 0; i < MAX_NON_TRINKET_ITEMS; i++)
		{
			items[i] = itemConverter.convert(0);
		}
		trinket = itemConverter.convertTrinket(0);

		//Build the RunePage
		runePage = runePageBuilder.keystone(1)
				.primaryRunes(1,2,3)
				.secondaryRunes(4,5)
				.extras(1,2,3)
				.build();

		//TODO: Implement DataObject classes for these
		notesId = 0;
		userId = 1;

		//TODO: Get K/D/A
		kills = 10;
		deaths = 5;
		assists = 14;
		//TODO: Get Outcome
		outcome = "Win";

		//Finally, build the match object
		match = matchBuilder
				.id(id)
				.datePlayed(datePlayed)
				.duration(duration)
				.champions(championPlayed, championAgainst)
				.items(items, trinket)
				.runePage(runePage)
				.notes(notesId)
				.user(userId)
				.kda(kills, deaths, assists)
				.outcome(outcome)
				.build();

		return match;
	}

	/*********************************************************************************
	 POST methods
	 **********************************************************************************/
	@PostMapping("/match")
	@ResponseStatus(HttpStatus.OK)
	@ExceptionHandler(MatchExceptionHandler.class)
	public void createMatch(@RequestBody Match newMatch)
	{
		try
		{
			database.persistMatch(newMatch);
		}
		catch(SQLException sqle)
		{
			sqle.printStackTrace();
		}
		catch(TransactionException te)
		{
			te.rollback();
		}
	}

	public void printDebug()
	{
		System.out.println("MatchController - DEBUG - ");
	}
}
