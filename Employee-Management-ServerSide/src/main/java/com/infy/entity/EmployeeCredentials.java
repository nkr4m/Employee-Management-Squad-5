package com.infy.entity;

import java.time.LocalDate;

public class EmployeeCredentials {
private Integer employeeId;
private String password;
private LocalDate joiningDate;
private LocalDate dateOfBirth;


public EmployeeCredentials(Integer employeeId, String password, LocalDate joiningDate, LocalDate dateOfBirth) {
	super();
	this.employeeId = employeeId;
	this.password = password;
	this.joiningDate = joiningDate;
	this.dateOfBirth = dateOfBirth;
}
public Integer getEmployeeId() {
	return employeeId;
}
public void setEmployeeId(Integer employeeId) {
	this.employeeId = employeeId;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public LocalDate getJoiningDate() {
	return joiningDate;
}
public void setJoiningDate(LocalDate joiningDate) {
	this.joiningDate = joiningDate;
}
public LocalDate getDateOfBirth() {
	return dateOfBirth;
}
public void setDateOfBirth(LocalDate dateOfBirth) {
	this.dateOfBirth = dateOfBirth;
}

}
