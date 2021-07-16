import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course/course';
import { Employee } from '../home/employee';
import { ViewdetailsService } from './viewdetails.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  courseName: any;

  constructor(private service : ViewdetailsService, private router: Router) { }
  employees:any;
  // coursetech:any
  ngOnInit() {
    this.courseName = sessionStorage.getItem("courseTech");
    console.log(this.courseName);
    this.service.viewDetails(this.courseName).subscribe(
      data=>{
        this.employees = data;
        console.log(this.employees);
      }
    )
  }

  home() {
    this.router.navigate(['/home']);
  }

}



