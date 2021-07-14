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

  url = "http://localhost:3000/courses";
  url1 = "http://localhost:3000/courses/empid/cid";
  constructor(private http: HttpClient) {
    
  }

  getCourses(): Observable<any> {
    // console.log(<Observable<any>>this.http.get(this.url))
    return <Observable<any>>this.http.get(this.url);
  }

  // enroll(id: string): Observable<any> {
  //   // return <Observable<any>>this.http.get(this.url);
  // }





}
