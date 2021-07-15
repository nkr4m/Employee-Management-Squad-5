package com.infy.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.EmployeeDTO;
import com.infy.dto.LoginDTO;
import com.infy.entity.Employee;
import com.infy.repository.EmployeeRepository;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService{
	
	
	Logger logger = LoggerFactory.getLogger(this.getClass());

	
	@Autowired
	EmployeeRepository repo;
	
	@Override
	public EmployeeDTO getSpecificEmployee(Integer empId) {
		// TODO Auto-generated method stub
		
		Optional<Employee> op = repo.findById(empId); 
		
		Employee e1 = op.get();
		
		
		EmployeeDTO e = new EmployeeDTO();
		e.setEmpId(e1.getEmpId());
		e.setFirstName(e1.getFirstName());
		e.setLastName(e1.getLastName());
		e.setEmailId(e1.getEmailId());
		e.setLocation(e1.getLocation());
		e.setAge(e1.getAge());
//		e.getLoginCred().setPassword(e1.getPassword());
		e.setEmailId(e1.getEmailId());
	
		
		return e;
	}

//	@Override
//	public boolean login(LoginDTO login) {
//		// TODO Auto-generated method stub
//		
//		Boolean flag=false;
//		logger.info("Login request for customer {} with password {}", login.getEmpId(),login.getPassword());
//		Optional<Employee> emp;
//		
//		emp=repo.findById(login.getEmpId());
//		if(emp.isPresent() && emp.get() != null && emp.get().getPassword().equals(login.getPassword())) {
//			flag= true;
//		}
//		return flag;
//		
//	}

	@Override
	public void updateEmployee(Integer empId, EmployeeDTO empDto) {
		// TODO Auto-generated method stub
		
		Optional<Employee> op = repo.findById(empId);
		Employee emp = op.get();
		
		emp.setEmailId(empDto.getEmailId());
		emp.setFirstName(empDto.getFirstName());
		emp.setLastName(empDto.getLastName());
		emp.setLocation(empDto.getLocation());
		
	}

	@Override
	public List<EmployeeDTO> getListEmp(List<Integer> emp) {
		// TODO Auto-generated method stub
		List<EmployeeDTO> list = new ArrayList<>();
		for(Integer i : emp) {
			Optional<Employee> e = repo.findById(i);
			EmployeeDTO ed = new EmployeeDTO();
			
			ed.setFirstName(e.get().getFirstName());
			ed.setLastName(e.get().getLastName());
			
			list.add(ed);
		}
		
		
		
		return list;
	}
	
	
	
	
	
	
	
	
	

}
