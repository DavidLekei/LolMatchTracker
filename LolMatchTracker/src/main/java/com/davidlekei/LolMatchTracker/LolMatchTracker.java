package com.davidlekei.LolMatchTracker;

import com.davidlekei.LolMatchTracker.config.Config;
import com.davidlekei.LolMatchTracker.config.UIConfig;
import com.davidlekei.LolMatchTracker.config.UserConfig;
import com.davidlekei.LolMatchTracker.ui.MainWindow;

import java.io.File;
import java.io.IOException;

public class LolMatchTracker
{

	private static LolMatchTracker INSTANCE;

	private MainWindow mainWindow;


	private LolMatchTracker()
	{
		
	}

	public static LolMatchTracker get()
	{
		if(INSTANCE == null)
		{
			INSTANCE = new LolMatchTracker();
		}

		return INSTANCE;
	}

	public MainWindow getMainWindow()
	{
		return this.mainWindow;
	}

	public void run()
	{
		System.out.println("Running LolMatchTracker");

		UIConfig uiConfig = new UIConfig("uiconfig.cfg");
		UserConfig userConfig = new UserConfig();

		this.mainWindow = new MainWindow(uiConfig);
		mainWindow.start();
	}
}