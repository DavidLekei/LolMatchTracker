package com.davidlekei.LolMatchTracker.events;

public class EventBus
{
	EventBus INSTANCE;

	private EventBus(){}

	public EventBus get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new EventBus();
		}
		return INSTANCE;
	}

}