package com.infy.dto;

public class EmployeeDTO {
	private Integer employeeId;
	private String firstName;
	private String surName;
	private String emailId;
	private Integer courseId;
	
	public EmployeeDTO(Integer employeeId, String firstName, String surName, String emailId, Integer courseId) {
		super();
		this.employeeId = employeeId;
		this.firstName = firstName;
		this.surName = surName;
		this.emailId = emailId;
		this.courseId = courseId;
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
