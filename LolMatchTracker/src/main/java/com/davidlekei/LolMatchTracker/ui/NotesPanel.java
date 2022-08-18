package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.awt.Dimension;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;
import javax.swing.BoxLayout;

public class NotesPanel extends ScrollablePanel
{
	private List<PanelItem> panelItemList;

	public NotesPanel()
	{
		initItems();
		setLayout(new BoxLayout(this, BoxLayout.PAGE_AXIS));
		setComponents(panelItemList);

		setPreferredSize(new Dimension(1300, 900));
		setOpaque(true);
		setVisible(true);
	}

	private void initItems()
	{
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));
		panelItemList.add(new MainPanelItem("Write Some Notes"));

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