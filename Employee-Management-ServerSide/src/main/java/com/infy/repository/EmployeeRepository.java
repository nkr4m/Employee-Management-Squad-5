package com.infy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infy.entity.EmployeeDetailsEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeDetailsEntity, Integer> {

}
