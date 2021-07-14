import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {


  pageTitle = 'courses';

 
 constructor(private router:Router, private _snackBar: MatSnackBar){}

  ngOnInit() {

  }
Search(){
  
}
getDetails(){
    
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
    this.router.navigate(['/employee']);

}

}

