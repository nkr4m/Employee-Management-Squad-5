import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Course } from '../course/course';

@Injectable({
  providedIn: 'root'
})


export class ViewdetailsService {
  courseTech:string;

  private url = "http://localhost:8080/employee-api/GET/"
  constructor(private http:HttpClient) { }

  viewDetails(courseName: string): Observable<any>{
    return this.http.get(this.url+courseName)
  }
}
