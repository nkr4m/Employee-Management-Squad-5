package com.infy.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.EmployeeCredDTO;
import com.infy.dto.LoginDTO;
import com.infy.entity.EmployeeCred;
import com.infy.repository.EmployeeCredRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	
	@Autowired
	EmployeeCredRepository repo;
	
	@Override
	public EmployeeCredDTO getCred(Integer empId) {
		// TODO Auto-generated method stub
		
		EmployeeCred e = repo.findByEmpId(empId);
		
		EmployeeCredDTO emp = new EmployeeCredDTO();
		emp.setCredId(e.getCredId());
		emp.setEmpId(e.getEmpId());
		emp.setPassword(e.getPassword());
		
		return emp;
	}

	@Override
	public Boolean login(LoginDTO login) {
		// TODO Auto-generated method stub
		
		Boolean flag=false;
//		logger.info("Login request for customer {} with password {}", login.getEmpId(),login.getPassword());
		EmployeeCred emp;
		
		emp=repo.findByEmpId(login.getEmpId());
		if(emp != null && emp.getPassword().equals(login.getPassword())) {
			flag= true;
		}
		return flag;
		
	}
	
	
	
	
	

	
}
