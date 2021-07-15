import { Component, OnInit } from '@angular/core';
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

  constructor(private service : ViewdetailsService) { }
  employees:Course;
  // coursetech:any
  ngOnInit() {
    this.courseName = this.service.courseTech
    console.log(this.courseName);
    this.service.viewDetails(this.courseName).subscribe(
      data=>{
        this.employees = data;
      }
    )
  }

}



