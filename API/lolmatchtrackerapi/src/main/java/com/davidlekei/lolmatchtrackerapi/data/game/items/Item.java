package com.davidlekei.lolmatchtrackerapi.data.game.items;

public class Item implements GameItem
{
	int id;
	String name;
	String effect;
	String stats;

	public Item()
	{

	}

	public Item(int id, String name)
	{
		this.id = id;
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEffect() {
		return effect;
	}

	public void setEffect(String effect) {
		this.effect = effect;
	}

	public String getStats() {
		return stats;
	}

	public void setStats(String stats) {
		this.stats = stats;
	}

	public String toString()
	{
		return "Item - ID: " + id + " | Name: " + name;
	}
}
