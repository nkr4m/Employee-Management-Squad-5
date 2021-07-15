package com.infy.dto;

import java.util.ArrayList;
import java.util.List;

public class EmployeeDTO {
	Integer empId;
	String firstName;
	String lastName;
	Integer age;
	String location;
	String emailId;
//	String password;
	
	List<TrainingDTO> training = new ArrayList();
	EmployeeCred loginCred;
	
	public Integer getEmpId() {
		return empId;
	}
	public void setEmpId(Integer empId) {
		this.empId = empId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
	public List<TrainingDTO> getTraining() {
		return training;
	}
	public void setTraining(List<TrainingDTO> training) {
		this.training = training;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public EmployeeCred getLoginCred() {
		return loginCred;
	}
	public void setLoginCred(EmployeeCred loginCred) {
		this.loginCred = loginCred;
	}
	
	
	
	
	
	
	
	
	
	
	
}
