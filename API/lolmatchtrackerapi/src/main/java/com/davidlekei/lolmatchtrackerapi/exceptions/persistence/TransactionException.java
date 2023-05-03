package com.davidlekei.lolmatchtrackerapi.exceptions.persistence;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import com.davidlekei.lolmatchtrackerapi.database.Database;

//TODO: Proper logging
public class TransactionException extends Exception
{
	DataObject[] itemsToRollback;
	Database db;

	public TransactionException(Database db, DataObject... itemsToRollback)
	{
		this.db = db;
		this.itemsToRollback = itemsToRollback;
	}

	public void rollback()
	{
		System.out.println("[ERROR] - TRANSACTION FAILED - ROLLBACK INITIATED");
		for(DataObject item : itemsToRollback)
		{
			System.out.println("\tROLLING BACK: " + item);
			db.rollback(item);
		}
	}
}
