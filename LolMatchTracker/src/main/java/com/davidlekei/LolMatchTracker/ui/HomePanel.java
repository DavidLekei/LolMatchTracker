package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.ui.replays.ReplayWidget;

import java.awt.Color;
import java.awt.Dimension;

import java.util.List;
import java.util.ArrayList;

import javax.swing.JPanel;

public class HomePanel extends ContentPanel
{
	private List<PanelItem> panelItemList;
	private JPanel header;

	public HomePanel()
	{
		initItems();
		setComponents(panelItemList);

		header = new JPanel();
		header.setPreferredSize(new Dimension(1300, 50));
		header.setBackground(Color.black);

		setOpaque(true);
		setVisible(true);
	}

	private void initItems()
	{
		panelItemList = new ArrayList<PanelItem>();
		panelItemList.add(new MainPanelItem("Welcome!"));
	}

	@Override
	public JPanel getHeader()
	{
		return this.header;
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