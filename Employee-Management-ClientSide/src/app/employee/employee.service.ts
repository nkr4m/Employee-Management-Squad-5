import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiUrl;
  private url:"http://localhost:4200"
  constructor(private http: HttpClient) { }

  public loggedIn():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }
}
