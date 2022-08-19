package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;
import javax.swing.BoxLayout;

public class NotesPanel extends ContentPanel
{
	private List<PanelItem> panelItemList;

	public NotesPanel()
	{
		setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));

		initItems();
		setComponents(panelItemList);

		setOpaque(false);
	}

	private void initItems()
	{
		MainPanelItem testItem = new MainPanelItem("Test Notes");
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(testItem);
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
		panelItemList.add(new MainPanelItem("Do we even scroll this far?"));
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
		for( PanelItem item : panelItems )
		{
			this.add(item);
		}

		this.revalidate();
		this.repaint();
	}

}