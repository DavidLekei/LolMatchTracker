package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

public class HomePanel extends ContentPanel
{
	private List<PanelItem> panelItemList;

	public HomePanel()
	{
		initItems();
		setComponents(panelItemList);

		setOpaque(true);
		setVisible(true);
	}

	private void initItems()
	{
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(new MainPanelItem("Welcome!"));
	}

	@Override
	public void setComponents(List<PanelItem> panelItems)
	{
		this.removeAll();

		for( PanelItem item : panelItems )
		{
			this.add(item);
		}

		this.revalidate();
		this.repaint();
	}
}