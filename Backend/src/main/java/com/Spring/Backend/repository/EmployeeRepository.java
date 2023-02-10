package com.Spring.Backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Spring.Backend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

	

}
