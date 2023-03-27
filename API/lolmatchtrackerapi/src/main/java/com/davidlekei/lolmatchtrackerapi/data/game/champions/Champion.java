package com.davidlekei.lolmatchtrackerapi.data.game.champions;

public class Champion
{
	private int id;
	private String name;

	public Champion(int id, String name)
	{
		this.id = id;
		this.name = name;
	}

	public int getId() { return id; }

	public void setId(int id) { this.id = id; }

	public String getName() { return name; }

	public void setName(String name) { this.name = name; }
}
