package com.infy.service;

import java.util.List;

import com.infy.dto.EmployeeDTO;

public interface EmployeeService {
public List<EmployeeDTO> getAllEmployees();
public EmployeeDTO getEmployee(Integer employeeId);
}
