package com.davidlekei.LolMatchTracker.files;

import java.io.File;

import java.util.List;
import java.util.ArrayList;

//TODO: Retrieve replay directory from UserConfig
public class ReplayFileManager
{

	private final String DEFAULT_REPLAY_DIR = "/Documents/League of Legends/Replays";
	private String userHome;
	private String fullReplayDir;

	public ReplayFileManager()
	{
		userHome = System.getProperty("user.home");
		fullReplayDir = userHome + DEFAULT_REPLAY_DIR;
	}

	public List<String> getReplayList()
	{
		List<String> replayNames = new ArrayList<String>();
		File replayDir = new File(fullReplayDir);
		File[] replays = replayDir.listFiles();

		for(File replay : replays)
		{
			replayNames.add(replay.getName());
		}

		return replayNames;
	}

	public List<String> getReplayListNoExtension()
	{
		List<String> replayNames = getReplayList();
		List<String> replayNamesNoExtension = new ArrayList<String>();
		String matchId;
		for(String replayName : replayNames)
		{
			replayNamesNoExtension.add(replayName.split("\\.")[0].split("-")[1]);
		}
		return replayNamesNoExtension;
	}
}