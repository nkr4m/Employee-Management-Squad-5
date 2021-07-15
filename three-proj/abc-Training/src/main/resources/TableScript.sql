drop database if exists db_emp_train;
create database db_emp_train;
use  db_emp_train;


create table training(
   training_id int auto_increment PRIMARY KEY,
   emp_Id int,
   course_name varchar(100),
   score int,
   hours_spent int,
   date_completed date,
   status varchar(100)
);



insert into training values (1, 5401, "Angular", 76, 214, sysdate()- interval 10 day, "COMPLETED");

insert into training values (2, 5402, "Django", 86, 219, sysdate()- interval 20 day, "COMPLETED");

insert into training values (3, 5403, "Springboot", 87, 224, sysdate()- interval 17 day, "COMPLETED");

insert into training values (4, 5404, "React", 74, 219, sysdate()- interval 5 day, "COMPLETED");

insert into training values (5, 5404, "MERN", 71, 215, sysdate()- interval 5 day, "COMPLETED");



commit;


select * from training;