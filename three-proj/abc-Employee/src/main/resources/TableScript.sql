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
   
);


insert into employee values (5401, "Rohan", "Joshi",25, "Delhi", "ro1947@abc.com" );
insert into employee values (5402, "Rahul", "Sharma",22, "Banglore", "rs1947@abc.com");
insert into employee values (5403, "Sumit", "Mandana",28, "Chennai", "sm1947@abc.com");
insert into employee values (5404, "Ajit", "Kumar",29, "Hydrabad", "ak1947@abc.com");
insert into employee values (5405, "Sowmya", "Gowda", 24, "Bangalore", "sowmya06@abc.com");
insert into employee values (5406, "Bavana", "Singh", 25, "Bangalore", "bavana13@abc.com");
insert into employee values (5407, "Harsha", "Vardhan", 26, "Chennai", "harsha25@abc.com");
insert into employee values (5408, "Dilip", "Kumar", 23, "Hydrabad", "dilip27@abc.com");
insert into employee values (5409, "Hencieta", "feona", 24, "Mangalore", "feona03@abc.com");
insert into employee values (5410, "John", "Fernandis", 27, "Bangalore", "john18@abc.com");
insert into employee values (5411, "Julie", "Christoper", 22, "Chennai", "julie15@abc.com");
insert into employee values (5412, "Raj", "kumar", 26, "Chennai", "raj24@abc.com");





commit;


select * from employee;