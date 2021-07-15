package com.infy.dto;

import java.time.LocalDate;

public class TrainingDTO {
	
	private Integer trainingId;
	private Integer empId;
	private String courseName;
	private Integer score;
	private Integer hoursSpent;
	private LocalDate dateCompleted;
	private String status;
	public Integer getTrainingId() {
		return trainingId;
	}
	public void setTrainingId(Integer trainingId) {
		this.trainingId = trainingId;
	}
	public Integer getEmpId() {
		return empId;
	}
	public void setEmpId(Integer empId) {
		this.empId = empId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public Integer getScore() {
		return score;
	}
	public void setScore(Integer score) {
		this.score = score;
	}
	public Integer getHoursSpent() {
		return hoursSpent;
	}
	public void setHoursSpent(Integer hoursSpent) {
		this.hoursSpent = hoursSpent;
	}
	public LocalDate getDateCompleted() {
		return dateCompleted;
	}
	public void setDateCompleted(LocalDate date) {
		this.dateCompleted = date;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
