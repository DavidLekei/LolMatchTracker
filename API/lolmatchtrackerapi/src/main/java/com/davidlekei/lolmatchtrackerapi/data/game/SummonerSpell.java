package com.davidlekei.lolmatchtrackerapi.data.game;

public class SummonerSpell
{
	private int id;
	private String name;
	private float cooldown;
	private int range;
	private String effect;

	public SummonerSpell(int id, String name, float cooldown, int range, String effect)
	{
		this.id = id;
		this.name = name;
		this.cooldown = cooldown;
		this.range = range;
		this.effect = effect;
	}

	public int getId()
	{
		return id;
	}

	public String getName()
	{
		return name;
	}

	public float getCooldown()
	{
		return cooldown;
	}

	public int getRange()
	{
		return range;
	}

	public String getEffect()
	{
		return effect;
	}
}
