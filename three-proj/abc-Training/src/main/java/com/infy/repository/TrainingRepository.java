package com.infy.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.infy.entity.Training;

public interface TrainingRepository extends CrudRepository<Training, Integer>{
	
	public List<Training> findByEmpId(Integer empId);
	
	
	public List<Training> findByCourseName(String name);
}
