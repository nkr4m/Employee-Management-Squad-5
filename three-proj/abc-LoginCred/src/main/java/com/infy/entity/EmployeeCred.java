package com.infy.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class EmployeeCred {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer credId;
	private Integer empId;
	private String password;
	public Integer getCredId() {
		return credId;
	}
	public void setCredId(Integer credId) {
		this.credId = credId;
	}
	public Integer getEmpId() {
		return empId;
	}
	public void setEmpId(Integer empId) {
		this.empId = empId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	

}
