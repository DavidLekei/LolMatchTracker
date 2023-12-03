package com.davidlekei.lolmatchtrackerapi.controllers.recording;

public class RecordingRequestBody {

	private int userId;

	public RecordingRequestBody(int userId){
		this.userId = userId;
	}

	public int getUserId(){return userId;}

	public void setUserId(int userId){this.userId = userId;}

}
