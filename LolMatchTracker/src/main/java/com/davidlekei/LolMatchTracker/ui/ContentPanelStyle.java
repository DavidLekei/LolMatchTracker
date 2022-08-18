package com.davidlekei.LolMatchTracker.ui;

import com.davidlekei.LolMatchTracker.config.UIConfig;

import java.awt.Color;
import java.awt.Paint;
import java.awt.GradientPaint;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Dimension;

import java.io.IOException;
import java.lang.NumberFormatException;

public class ContentPanelStyle
{
	private Paint paint;
	private String startingGradientColor;
	private String endingGradientColor;
	private int width;
	private int height;
	//TODO: Add things like Font, Spacing, etc

	public ContentPanelStyle()
	{
		//Use defaults
		this.startingGradientColor = "#8E2DE2";
		this.endingGradientColor = "#4A00E0";
		this.width = 1300;
		this.height = 900;
	}


	public ContentPanelStyle(UIConfig config, String panelName)
	{
		this.startingGradientColor = config.get("startingGradientColor", panelName);
		this.endingGradientColor = config.get("endingGradientColor", panelName);
		this.width = Integer.parseInt(config.get("width", panelName));
		this.height = Integer.parseInt(config.get("height", panelName));

	}

	public Paint getPaint()
	{
		return new GradientPaint(0, 0, Color.decode(startingGradientColor), this.width, this.height, Color.decode(endingGradientColor));
	}
}