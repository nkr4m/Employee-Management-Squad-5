drop database if exists db_emp_cred;
create database db_emp_cred;
use  db_emp_cred;


create table employee_cred(
   cred_id int auto_increment PRIMARY KEY,
   emp_id int,
   password varchar(100)
);


insert into employee_cred values (1,5401, "123");
insert into employee_cred values (2,5402, "123");
insert into employee_cred values (3,5403, "123");
insert into employee_cred values (4,5404, "123");
insert into employee_cred values (5,5405, "123");



commit;


select * from employee_cred;