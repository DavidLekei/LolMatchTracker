package com.davidlekei.LolMatchTracker.ui;

import java.util.List;

import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

public class PanelItemMouseListener implements MouseListener
{

	private String panelText;
	private MainWindow mainWindow;

	public PanelItemMouseListener(String panelText, MainWindow mainWindow)
	{
		this.panelText = panelText;
		this.mainWindow = mainWindow;
	}

	public void mouseClicked(MouseEvent e)
	{
        System.out.println("Panel - " + panelText + " clicked");

        //Remove all items currently on the panel

        //Get panel items for this panel from UIConfig
        List<PanelItem> mainPanelComponents = mainWindow.getUIConfig().getMainPanelComponentsFromSideSelection(this.panelText);
        mainWindow.getMainPanel().setComponents(mainPanelComponents);
        //Set the panel items on the main panel
    }

    public void mouseEntered(MouseEvent e)
    {

    }

    public void mouseExited(MouseEvent e)
    {

    }

    public void mouseReleased(MouseEvent e)
    {

    }

    public void mousePressed(MouseEvent e)
    {

    }
}