import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  empId:number;
  url = "http://localhost:8082/login";
  constructor(private http: HttpClient) { }

  login(data: Login): Observable<any> {
    return <Observable<any>>this.http.post(this.url, data);
  }

  loggedIn(){
    return true;
  }
}
