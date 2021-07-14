import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  employees: any = [];
  courses: any[]
  selectedCourses: any = [];
  constructor(private http: HttpClient) {
    
  }





}
