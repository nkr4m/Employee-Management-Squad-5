package com.infy.entity;

public class CoursesEntity {
private String technology;
private String courseName;
private Integer courseId;
public CoursesEntity(String technology, String courseName, Integer courseId) {
	super();
	this.technology = technology;
	this.courseName = courseName;
	this.courseId = courseId;
}
public String getTechnology() {
	return technology;
}
public void setTechnology(String technology) {
	this.technology = technology;
}
public String getCourseName() {
	return courseName;
}
public void setCourseName(String courseName) {
	this.courseName = courseName;
}
public Integer getCourseId() {
	return courseId;
}
public void setCourseId(Integer courseId) {
	this.courseId = courseId;
}

}






