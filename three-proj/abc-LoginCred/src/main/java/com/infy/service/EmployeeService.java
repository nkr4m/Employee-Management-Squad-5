package com.infy.service;

import com.infy.dto.EmployeeCredDTO;
import com.infy.dto.LoginDTO;

public interface EmployeeService {
	
	public EmployeeCredDTO getCred(Integer empId);
	
	public Boolean login(LoginDTO login);

}
