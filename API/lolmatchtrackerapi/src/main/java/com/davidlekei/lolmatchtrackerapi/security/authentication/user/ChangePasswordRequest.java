package com.davidlekei.lolmatchtrackerapi.security.authentication.user;

import java.util.Date;

public class ChangePasswordRequest {

    private String username;
    private String currentPassword;
    private String newPassword;
    private Date dateChanged;

    public ChangePasswordRequest(String username, String currentPassword, String newPassword){
        this.username = username;
        this.currentPassword = currentPassword;
        this.newPassword = newPassword;
        this.dateChanged = new Date();
    }

    public String getUsername() {
        return username;
    }

    public String getCurrentPassword() {
        return currentPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public Date getDateChanged() {
        return dateChanged;
    }

    public String toString(){
        return "username: " + username + " - currentPassword: " + currentPassword + " - newPassword: " + newPassword + " on " + dateChanged;
    }

}
