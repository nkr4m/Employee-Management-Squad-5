import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerurl = "http://localhost:8082/registration"
  constructor(private http:HttpClient) { }

  register(registerform: any):Observable<string>{
    return  <Observable<string>> this.http.post(this.registerurl,registerform)
  }
}
