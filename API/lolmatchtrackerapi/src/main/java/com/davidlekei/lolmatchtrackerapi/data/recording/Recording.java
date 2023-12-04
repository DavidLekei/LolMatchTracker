package com.davidlekei.lolmatchtrackerapi.data.recording;

public class Recording {

	private int videoId;
	private String title;
	private String championPlayed;
	private String championAgainst;
	private String outcome;
	private String date;
	private String thumbnail;

	public Recording(int videoId, String title, String championPlayed, String championAgainst, String outcome, String date, String thumbnail) {
		this.videoId = videoId;
		this.title = title;
		this.championPlayed = championPlayed;
		this.championAgainst = championAgainst;
		this.outcome = outcome;
		this.date = date;
		this.thumbnail = thumbnail;
	}

	public int getVideoId(){
		return videoId;
	}

	public void setVideoId(int videoId){
		this.videoId = videoId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getChampionPlayed() {
		return championPlayed;
	}

	public void setChampionPlayed(String championPlayed) {
		this.championPlayed = championPlayed;
	}

	public String getChampionAgainst() {
		return championAgainst;
	}

	public void setChampionAgainst(String championAgainst) {
		this.championAgainst = championAgainst;
	}

	public String getOutcome() {
		return outcome;
	}

	public void setOutcome(String outcome) {
		this.outcome = outcome;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

}
