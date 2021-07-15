package com.infy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.infy.dto.EmployeeCred;
import com.infy.dto.EmployeeDTO;
import com.infy.dto.LoginDTO;
import com.infy.dto.TrainingDTO;
import com.infy.service.EmployeeService;

@RestController
@CrossOrigin
@RequestMapping("/employee-api")
public class EmployeeAPI {
	
	@Autowired
	EmployeeService service;
	
	@GetMapping("/{empId}")
	public ResponseEntity<EmployeeDTO> getSpecificEmployee(@PathVariable Integer empId){
		EmployeeDTO e = service.getSpecificEmployee(empId);
		
		List<TrainingDTO> t =  new RestTemplate().getForObject("http://localhost:8081/training-api/GET/" + e.getEmpId(), List.class);
		e.setTraining(t);
		
		EmployeeCred e1 = new RestTemplate().getForObject("http://localhost:8082/GET/" + e.getEmpId(), EmployeeCred.class);
		e.setLoginCred(e1);
		return new ResponseEntity<EmployeeDTO>(e, HttpStatus.OK);
	}
	
	
//	@PostMapping("/login")
//	public ResponseEntity<Boolean> login(@RequestBody LoginDTO login){
//		Boolean flag = service.login(login);
//		return new ResponseEntity<Boolean>(flag, HttpStatus.OK);
//	}
	
	@PutMapping("/{empId}")
	public ResponseEntity<String> updateEmployee(@PathVariable Integer empId, @RequestBody EmployeeDTO emp){
		service.updateEmployee(empId,emp);
		String str = "Successfully updated";
		return new ResponseEntity<String>(str, HttpStatus.OK);
	}
	
	@GetMapping("/GET/{courseName}")
	public ResponseEntity<List<EmployeeDTO>> getSpecificCourseEmp(@PathVariable String courseName){
		List<Integer> list = new RestTemplate().getForObject("http://localhost:8081/training-api/" + courseName , List.class);
		List<EmployeeDTO> listDTO = service.getListEmp(list);
		return new ResponseEntity<List<EmployeeDTO>>(listDTO, HttpStatus.OK);
	}
	
	
	
	


}
