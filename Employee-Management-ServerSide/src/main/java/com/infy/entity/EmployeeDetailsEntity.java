package com.infy.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

public class EmployeeDetailsEntity {
private Integer employeeId;
private String firstName;
private String surName;
private String emailId;
private Integer courseId;
//relationship
@OneToMany(cascade = CascadeType.ALL)
@JoinColumn(name = "courseId")
private List<CoursesEntity> coursesEntities=new ArrayList<>();
@OneToOne
private EmployeeCredentials credentials;


public EmployeeDetailsEntity(Integer employeeId, String firstName, String surName, String emailId, Integer courseId) {
	super();
	this.employeeId = employeeId;
	this.firstName = firstName;
	this.surName = surName;
	this.emailId = emailId;
	this.courseId = courseId;
}


public List<CoursesEntity> getCoursesEntities() {
	return coursesEntities;
}


public void setCoursesEntities(List<CoursesEntity> coursesEntities) {
	this.coursesEntities = coursesEntities;
}


public EmployeeCredentials getCredentials() {
	return credentials;
}


public void setCredentials(EmployeeCredentials credentials) {
	this.credentials = credentials;
}


public Integer getEmployeeId() {
	return employeeId;
}
public void setEmployeeId(Integer employeeId) {
	this.employeeId = employeeId;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getSurName() {
	return surName;
}
public void setSurName(String surName) {
	this.surName = surName;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public Integer getCourseId() {
	return courseId;
}
public void setCourseId(Integer courseId) {
	this.courseId = courseId;
}

}
