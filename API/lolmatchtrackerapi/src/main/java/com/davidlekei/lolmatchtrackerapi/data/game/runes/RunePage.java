package com.davidlekei.lolmatchtrackerapi.data.game.runes;

import com.davidlekei.lolmatchtrackerapi.data.DataObject;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

public class RunePage implements DataObject
{
	private final int MAX_PRIMARY_RUNES = 3;
	private final int MAX_SECONDARY_RUNES = 2;
	private final int MAX_EXTRA_RUNES = 3;

	//TODO: Change the primary/secondary/extra slots to Arrays? Maybe? I think its fine, once it's converted to JSON it's still just as easily accessible.
	private int id;
	private Rune keystone;
	private Rune[] primaries;
	private Rune[] secondaries;
	private Rune[] extras;
	private int user; //TODO: Once a User object is created, change this to a User, OR change name to userId if we only care about the ID

	public RunePage()
	{
		primaries = new Rune[MAX_PRIMARY_RUNES];
		secondaries = new Rune[MAX_SECONDARY_RUNES];
		extras = new Rune[MAX_EXTRA_RUNES];
	}

	public int getId() { return this.id; }

	public void setId(int id) { this.id = id; }

	public Rune getKeystone() {
		return keystone;
	}

	public void setKeystone(Rune keystone) {
		this.keystone = keystone;
	}

	public Rune[] getPrimaries() { return primaries; }

	public void setPrimaries(Rune[] primaries)
	{
		this.primaries = primaries;
	}

	public Rune[] getSecondaries() { return secondaries; }

	public void setSecondaries(Rune[] secondaries)
	{
		this.secondaries = secondaries;
	}

	public Rune[] getExtras() { return extras; }

	public void setExtras(Rune[] extras)
	{
		this.extras = extras;
	}

	public int getUser() {
		return user;
	}

	public void setUser(int user) {
		this.user = user;
	}
}
