package com.davidlekei.lolmatchtrackerapi.data.game.runes;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

public class Rune
{
	private int id;
	private String name;
	private String category;
	private String effect;

	public Rune() {}

	public Rune(int id, String name, String category, String effect)
	{
		this.id = id;
		this.name = name;
		this.category = category;
		this.effect = effect;
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

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getEffect() {
		return effect;
	}

	public void setEffect(String effect) {
		this.effect = effect;
	}

	public String toString()
	{
		return "Rune ID: " + id + " | Name: " + name + " | Category: " + category + " | Effect: " + effect;
	}
}
