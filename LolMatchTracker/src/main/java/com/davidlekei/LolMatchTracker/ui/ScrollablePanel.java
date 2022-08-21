package com.davidlekei.LolMatchTracker.ui;

import java.awt.Dimension;
import java.awt.Rectangle;

import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.Scrollable;

import java.util.List;

public class ScrollablePanel extends ContentPanel implements Scrollable
{
	public ScrollablePanel()
	{
		super();
	}

	public Dimension getPreferredScrollableViewportSize()
	{
		return getPreferredSize();
	}

	public int getScrollableBlockIncrement(Rectangle visibleRect, int orientation, int direction)
	{
		return 10;
	}

	public boolean getScrollableTracksViewportHeight()
	{
		return true;
	}

	public boolean getScrollableTracksViewportWidth()
	{
		return true;
	}

	public int getScrollableUnitIncrement(Rectangle visibleRect, int orientation, int direction)
	{
		return 10;
	}

	@Override
	public JPanel getHeader()
	{
		return null;
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