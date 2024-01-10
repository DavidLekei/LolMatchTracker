package com.davidlekei.lolmatchtrackerapi.data.stats;

public class Stat {

	private String label;
	private int value;
	private String[] colors;
	private int[] increments;
	private Stat enemy;

	public Stat(String label, int value, String[] colors, int[] increments){
		this.label = label;
		this.value = value;
		this.colors = colors;
		this.increments = increments;
	}

	public Stat(String label, int value, String[] colors, int[] increments, Stat enemy){
		this(label, value, colors, increments);
		this.enemy = enemy;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String[] getColors() {
		return colors;
	}

	public void setColors(String[] colors) {
		this.colors = colors;
	}

	public int[] getIncrements() {
		return increments;
	}

	public void setIncrements(int[] increments) {
		this.increments = increments;
	}

}
