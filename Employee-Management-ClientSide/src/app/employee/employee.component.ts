import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  

  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;
  public addEmployee: Employee;
  totalRecords: any;
  page: number=1;
  name: string ="";
  firstName:string ="";
  
  constructor(private employeeService: EmployeeService,private router:Router) { 
  }

  ngOnInit(): void {
  }


  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.employees = this.employees.filter(res=>{
        return res.firstName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  
  public getEmployees() {
    // this.employeeService.getEmployees().subscribe(
    //   (response: Employee[]) => {
    //     this.employees = response;
    //     this.totalRecords = response.length
    //     console.log(this.employees);
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //   }
    // );
    this.employeeService.loggedIn()
      
        localStorage.getItem("firstName");
        localStorage.getItem("lastName");
    
  }
home(){
  this.router.navigate(['/home'])
}
}


