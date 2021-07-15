drop database if exists db_emp;
create database db_emp;
use  db_emp;


create table employee(
   emp_id int PRIMARY KEY,
   first_name varchar(100),
   last_name varchar(100),
   age int,
   location varchar(100),
   emailId varchar(100),
   password varchar(100)
   
);


insert into employee values (5401, "Rohan", "Joshi",25, "Delhi", "ro1947@abc.com", "infy@123");
insert into employee values (5402, "Rahul", "Sharma",22, "Banglore", "rs1947@abc.com", "infy@123");
insert into employee values (5403, "Sumit", "Mandana",28, "Chennai", "sm1947@abc.com", "infy@123");
insert into employee values (5404, "Ajit", "Kumar",29, "Hydrabad", "ak1947@abc.com", "infy@123");



commit;


select * from employee;