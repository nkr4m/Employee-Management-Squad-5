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
insert into employee_cred values (6,5406, "123");
insert into employee_cred values (7,5407, "123");
insert into employee_cred values (8,5408, "123");
insert into employee_cred values (9,5409, "123");
insert into employee_cred values (10,5410, "123");
insert into employee_cred values (11,5411, "123");
insert into employee_cred values (12,5412, "123");



commit;


select * from employee_cred;