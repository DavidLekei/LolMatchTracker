package com.davidlekei.lolmatchtrackerapi.data.game.runes;

public class RuneExtra extends Rune
{
	private int id;
	private String name;
	private String effect;

	public RuneExtra(int id, String name, String effect)
	{
		this.id = id;
		this.name = name;
		this.effect = effect;
	}

	public int getId()
	{
		return this.id;
	}

	public String getName()
	{
		return this.name;
	}

	public String getEffect()
	{
		return this.effect;
	}
}
