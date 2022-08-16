package com.davidlekei.LolMatchTracker.ui;

import java.util.List;
import java.util.ArrayList;
import java.util.HashMap;

public class MainPanelItemList
{
	private HashMap<SidePanelSelections, List<PanelItem>> sideSelectionToMainPanelItems;

	public MainPanelItemList()
	{
		sideSelectionToMainPanelItems = new HashMap<SidePanelSelections, List<PanelItem>>();
	}

	public void addList(SidePanelSelections selection)
	{
		sideSelectionToMainPanelItems.put(selection, new ArrayList<PanelItem>());
	}

	public void addItem(SidePanelSelections selection, PanelItem item)
	{
		List<PanelItem> panelItems = sideSelectionToMainPanelItems.get(selection);
		panelItems.add(item);
	}

	public List<PanelItem> getPanelItems(SidePanelSelections selection)
	{
		return sideSelectionToMainPanelItems.get(selection);
	}
}