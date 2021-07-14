package com.infy.entity;

import java.time.LocalTime;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class CoursesEntity {
  
	@Id
	private Integer courseId;
    private String courseName;
    private String technology;
    private LocalTime courseTenure;
    private String certification;
    
    
    public CoursesEntity(Integer courseId, String courseName, String technology, LocalTime courseTenure,
			String certification) {
		super();
		this.courseId = courseId;
		this.courseName = courseName;
		this.technology = technology;
		this.courseTenure = courseTenure;
		this.certification = certification;
	}

    
	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public LocalTime getCourseTenure() {
		return courseTenure;
	}

	public void setCourseTenure(LocalTime courseTenure) {
		this.courseTenure = courseTenure;
	}

	public String getCertification() {
		return certification;
	}

	public void setCertification(String certification) {
		this.certification = certification;
	}


}






