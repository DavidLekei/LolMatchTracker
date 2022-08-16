package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

public class ReplayPanel extends ContentPanel
{
	private List<PanelItem> panelItemList;

	public ReplayPanel()
	{
		initItems();
		setComponents(panelItemList);

		setOpaque(true);
		setVisible(true);
	}

	private void initItems()
	{
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(new ReplayWidget("Ahri", "Viktor"));
	}


}