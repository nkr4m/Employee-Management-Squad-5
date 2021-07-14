package com.infy.entity;

import java.time.LocalDate;

public class EmployeeCredentials {
private Integer emailId;
private String password;


public EmployeeCredentials(Integer emailId, String password) {
	super();
	this.emailId = emailId;
	this.password = password;
}


public Integer getEmailId() {
	return emailId;
}

public void setEmailId(Integer emailId) {
	this.emailId = emailId;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

}
