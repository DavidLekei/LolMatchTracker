package com.davidlekei.lolmatchtrackerapi.converters.data.game.items;

import com.davidlekei.lolmatchtrackerapi.data.game.items.GameItem;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Item;
import com.davidlekei.lolmatchtrackerapi.data.game.items.Trinket;

public class ItemConverter
{
	public ItemConverter()
	{

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
