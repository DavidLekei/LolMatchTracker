package com.davidlekei.lolmatchtrackerapi.builders.data.game.runes;

import com.davidlekei.lolmatchtrackerapi.builders.Builder;
import com.davidlekei.lolmatchtrackerapi.converters.data.game.runes.RuneConverter;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.Rune;
import com.davidlekei.lolmatchtrackerapi.data.game.runes.RunePage;

public class RunePageBuilder implements Builder
{
	private final int MAX_PRIMARY_RUNES = 3;
	private final int MAX_SECONDARY_RUNES = 2;
	private final int MAX_EXTRA_RUNES = 3;

	private static RunePageBuilder INSTANCE;
	private static RuneConverter converter;
	private RunePage runePage;

	private RunePageBuilder(){}

	public static RunePageBuilder get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new RunePageBuilder();
			converter = new RuneConverter();
		}

		INSTANCE.start();
		return INSTANCE;
	}

	private void start()
	{
		this.runePage = new RunePage();
	}

	public RunePageBuilder keystone(int keystoneId)
	{
		runePage.setKeystone(converter.convert(keystoneId));
		return this;
	}

	public RunePageBuilder primaryRunes(int slot1, int slot2, int slot3)
	{
		Rune[] primaries = new Rune[MAX_PRIMARY_RUNES];
		primaries[0] = converter.convert(slot1);
		primaries[1] = converter.convert(slot2);
		primaries[2] = converter.convert(slot3);

		runePage.setPrimaries(primaries);
		return this;
	}

	public RunePageBuilder secondaryRunes(int slot1, int slot2)
	{
		Rune[] secondaries = new Rune[MAX_SECONDARY_RUNES];
		secondaries[0] = converter.convert(slot1);
		secondaries[1] = converter.convert(slot2);

		runePage.setSecondaries(secondaries);
		return this;
	}

	public RunePageBuilder extras(int slot1, int slot2, int slot3)
	{
		Rune[] extras = new Rune[MAX_EXTRA_RUNES];
		extras[0] = converter.convertExtraRune(slot1);
		extras[1] = converter.convertExtraRune(slot2);
		extras[2] = converter.convertExtraRune(slot3);

		runePage.setExtras(extras);
		return this;
	}

	public RunePage build()
	{
		return this.runePage;
	}
}
