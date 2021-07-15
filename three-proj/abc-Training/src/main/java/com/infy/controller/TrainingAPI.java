package com.infy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.dto.TrainingDTO;
import com.infy.service.TrainingService;

@RestController
@CrossOrigin
@RequestMapping("/training-api")
public class TrainingAPI {
	
	@Autowired
	TrainingService service;
	
	@GetMapping("/GET/{empId}")
	public ResponseEntity<List<TrainingDTO>> getSpecificTraining(@PathVariable Integer empId){
		List<TrainingDTO> list = service.getSpecificTraining(empId);
		return new ResponseEntity<List<TrainingDTO>>(list, HttpStatus.OK);
	}
	
	@GetMapping("/{courseName}")
	public ResponseEntity<List<Integer>> getList(@PathVariable String courseName){
		List<Integer> list = service.listEmployee(courseName);
		
		return new ResponseEntity<List<Integer>>(list, HttpStatus.OK);
	}
	
	
	

}
