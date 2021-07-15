import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewdetailsService {

  private url = "http://localhost:8082/employee-api/"
  constructor(private http:HttpClient) { }

  viewDetails(courseTech: string): Observable<any>{
    return this.http.get(this.url+courseTech)
  }
}
