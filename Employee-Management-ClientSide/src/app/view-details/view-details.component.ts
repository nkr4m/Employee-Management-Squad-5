import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { ViewdetailsService } from './viewdetails.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private service : ViewdetailsService) { }
  employees:any;
  coursetech:any
  ngOnInit() {
    this.coursetech = sessionStorage.getItem("courseTech")
    this.service.viewDetails(this.coursetech).subscribe(
      data=>{
        this.employees = data;
      }
    )
  }

}



