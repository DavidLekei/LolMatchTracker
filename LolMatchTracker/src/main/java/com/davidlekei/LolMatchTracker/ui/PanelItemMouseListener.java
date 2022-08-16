package com.davidlekei.LolMatchTracker.ui;

import java.util.List;

import java.awt.event.MouseListener;
import java.awt.event.MouseEvent;

public class PanelItemMouseListener implements MouseListener
{

	private String panelText;
	private MainWindow mainWindow;

    public PanelItemMouseListener(String panelText)
    {
        this.panelText = panelText;
    }

	public PanelItemMouseListener(String panelText, MainWindow mainWindow)
	{
		this.panelText = panelText;
		this.mainWindow = mainWindow;
	}

	public void mouseClicked(MouseEvent e)
	{
        System.out.println("Panel - " + panelText + " clicked");

        SidePanelSelections selection = null;

        switch(panelText)
        {
            case "Home":
                selection = SidePanelSelections.HOME;
                break;
            case "Replays":
                selection = SidePanelSelections.REPLAYS;
                break;
            case "Notes":
                selection = SidePanelSelections.NOTES;
                break;
            case "Settings":
                selection = SidePanelSelections.SETTINGS;
                break;
        }

        mainWindow.setMainPanel(selection);

        //Remove all items currently on the panel

        //Get panel items for this panel from UIConfig
        //List<PanelItem> mainPanelComponents = mainWindow.getUIConfig().getMainPanelComponentsFromSideSelection(this.panelText);
        //mainWindow.getMainPanel().setComponents(mainPanelComponents);
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