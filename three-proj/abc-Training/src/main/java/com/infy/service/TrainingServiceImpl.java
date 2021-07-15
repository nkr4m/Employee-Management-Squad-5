package com.infy.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.TrainingDTO;
import com.infy.entity.Training;
import com.infy.repository.TrainingRepository;

@Service
@Transactional
public class TrainingServiceImpl implements TrainingService{

	
	@Autowired
	TrainingRepository repo;
	
	@Override
	public List<TrainingDTO> getSpecificTraining(Integer empId) {
		// TODO Auto-generated method stub
		List<Training> list = repo.findByEmpId(empId);
		
		List<TrainingDTO> dto = new ArrayList<>();
		
		for(Training td : list) {
			TrainingDTO t = new TrainingDTO(); 
			
			t.setTrainingId(td.getTrainingId());
			t.setEmpId(td.getEmpId());
			t.setCourseName(td.getCourseName());
			t.setScore(td.getScore());
			t.setDateCompleted(td.getDateCompleted());
			t.setStatus(td.getStatus());
			t.setHoursSpent(td.getHoursSpent());
			
			dto.add(t);
		}
 		
		return dto;
	}

	@Override
	public List<Integer> listEmployee(String name) {
		// TODO Auto-generated method stub
		
		List<Training> list = repo.findByCourseName(name);
		List<Integer> list_int = new ArrayList<>();
		
		for(Training t : list) {
			Integer i = t.getEmpId();
			list_int.add(i);
		}
		
		return list_int;
	}

	
	
}
