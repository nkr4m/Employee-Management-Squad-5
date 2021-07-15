import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';

import { CourseService } from './course.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course2 } from './course2';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {


  pageTitle = 'courses';
 
 
 constructor(private router:Router, private _snackBar: MatSnackBar,private service:CourseService){}



errorMessage="";
courses:Course2[];
id:any;

 ngOnInit() {
   this.service.getCourses().subscribe(
     (success) => {
             this.courses = success
             console.log(this.courses);

             
           },
           (failure) => {
             this.errorMessage = failure.error.message;
           }
   ) 
 }
Search(){
 
}
openSnackBar(message: string, action: string) {
   this._snackBar.open(message, action, {
     duration: 5000,
     verticalPosition: 'top',
     panelClass: ['snackbar-position'],
     horizontalPosition: "center"
   });
 }
enroll(c:any){
   this.openSnackBar('Enrolled successfully', 'OK');
   this.id=sessionStorage.getItem("empId");
  // this.id=this.courseID;
  console.log(this.id);
   // this.router.navigate(['/employee']);
   this.service.enroll(this.id,c).subscribe(
     (success) => {
             this.courses = success
             console.log(this.courses)
           },
           (failure) => {
             this.errorMessage = failure.error.message;
           }
   )
}
viewdetaills(c:any){
  sessionStorage.setItem("courseTech", c.courseName);
  this.router.navigate(['/viewdetails']);
}
home(){
  this.router.navigate(['/home']);
}
}
