package com.infy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infy.entity.CoursesEntity;

public interface CoursesRepository extends JpaRepository<CoursesEntity, Integer> {

}
