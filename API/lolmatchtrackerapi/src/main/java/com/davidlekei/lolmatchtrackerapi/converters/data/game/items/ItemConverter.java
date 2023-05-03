package com.davidlekei.lolmatchtrackerapi.converters.data.game.items;

import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;

public class ItemConverter
{
	private Item[] items;
	private static ItemConverter INSTANCE;
	private boolean loaded;

	private ItemConverter()
	{
		items = null;
		loaded = false;
	}

	public void load(Item[] items)
	{
		//Prevent load() from being executed more than once
		if(loaded)
		{
			return;
		}

		this.setItems(items);
		this.setLoaded();
	}

	private void setItems(Item[] items)
	{
		this.items = items;
	}

	private void setLoaded()
	{
		this.loaded = true;
	}

	public static ItemConverter get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new ItemConverter();
		}
		return INSTANCE;
	}

	public Item convert(int id)
	{
		return new Item();
	}

	public Trinket convertTrinket(int id)
	{
		return new Trinket();
	}
}
