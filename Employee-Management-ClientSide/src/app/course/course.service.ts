import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course2 } from './course2';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

employees: any = [];
courses: Course2[]
selectedCourses: any = [];

url = "http://localhost:3000/courses/";
url1 = "http://localhost:3000/courses/1";
constructor(private http: HttpClient) {
  
}

getCourses(): Observable<any> {
  // console.log(<Observable<any>>this.http.get(this.url))
  return <Observable<any>>this.http.get(this.url);
}

enroll(id: number , courseData: any): Observable<any> {
  // courseData.enrolled = courseData.enrolled.push(id);
  return <Observable<any>>this.http.get(this.url1,courseData);
}


}
