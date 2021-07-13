import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:8082/login";
  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return <Observable<any>>this.http.post(this.url, data);
  }
}
