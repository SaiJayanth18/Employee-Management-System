package project.employeemanagementsystem.springboot_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import project.employeemanagementsystem.springboot_backend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {


}
