package com.davidlekei.LolMatchTracker;

import static org.junit.Assert.assertTrue;

import com.davidlekei.LolMatchTracker.database.*;

import java.sql.ResultSet;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.junit.Test;
import org.junit.BeforeClass;
import org.junit.AfterClass;


public class TestDatabase
{

	private static NotesDatabaseConnection notesDb;
	private static UserDatabaseConnection userDb;

	@BeforeClass
	public static void setUpClass() throws Exception
	{
		System.out.println("Getting DB instance...");
		notesDb = new NotesDatabaseConnection();
		userDb = new UserDatabaseConnection();

		System.out.println("Starting tests...");
	}

	@AfterClass
	public static void tearDownClass() throws Exception
	{
		System.out.println("Testing complete");
	}

	@Test
	public void dbInstanceNotNull()
	{
		try
		{
			assertTrue(notesDb != null);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

	@Test
	public void testGetNotesForMatch()
	{
		try
		{
			String results = notesDb.getNotesForMatch("3");
			assertTrue(results != null);

			System.out.println(results);

		}
		catch(Exception e)
		{
			
		}
	}

	@Test
	public void testGetUserIdForUsername() throws SQLException
	{
		String username = "test_user_1";
		int userId = userDb.getUserIdForUsername(username);
		assertTrue(userId == 3);
		System.out.println("Test: " + userId);

	}
}