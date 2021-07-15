import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url = "http://localhost:8080/employee-api/";
  constructor(private http: HttpClient) { }

  profileDetails(id:any): Observable<any>{
    return this.http.get(this.url+id);
  }
}
