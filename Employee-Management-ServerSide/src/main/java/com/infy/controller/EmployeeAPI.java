package com.infy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.infy.dto.EmployeeDTO;
import com.infy.service.EmployeeService;

@RestController
public class EmployeeAPI {
	
	@Autowired
	private EmployeeService service;

	@GetMapping("/get")
	public ResponseEntity<List<EmployeeDTO>> getAllEmployee(){
		List<EmployeeDTO> list=service.getAllEmployees();
		return new ResponseEntity<List<EmployeeDTO>>(list,HttpStatus.OK);
	}

	@GetMapping("/get/{employeeId}")
	public ResponseEntity<EmployeeDTO> getClassRoom(@PathVariable Integer employeeId){
		EmployeeDTO dto=service.getEmployee(employeeId);
	return new ResponseEntity<EmployeeDTO>(dto,HttpStatus.OK);
	}
}
