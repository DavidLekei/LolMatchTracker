package com.davidlekei.lolmatchtrackerapi.data.game.items;

public class Trinket implements GameItem
{
	int id;
	String name;
	String effect;

	public Trinket()
	{

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

	public String toString()
	{
		return "Trinket - ID: " + id + " | Name: " + name;
	}
}
