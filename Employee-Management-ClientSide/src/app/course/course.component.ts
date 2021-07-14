import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {


  pageTitle = 'courses';

 
 constructor(private router:Router, private _snackBar: MatSnackBar, private cservice:CourseService){}

 errorMessage="";
 courses=[];
 id="";
  ngOnInit() {
    this.cservice.getCourses().subscribe(
      (success) => {
              this.courses = success
              // console.log(this.courses);

              
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
enroll(){
    this.openSnackBar('Enrolled successfully', 'OK');
    this.id=localStorage.getItem("email");
    // this.router.navigate(['/employee']);
    // this.cservice.enroll(this.id).subscribe(
    //   (success) => {
    //           this.courses = success
    //         },
    //         (failure) => {
    //           this.errorMessage = failure.error.message;
    //         }
    // )
}

}

