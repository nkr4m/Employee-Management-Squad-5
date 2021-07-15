package com.infy.repository;

import org.springframework.data.repository.CrudRepository;

import com.infy.entity.EmployeeCred;

public interface EmployeeCredRepository extends CrudRepository<EmployeeCred, Integer>{
	
	public EmployeeCred findByEmpId(Integer empId);

}
