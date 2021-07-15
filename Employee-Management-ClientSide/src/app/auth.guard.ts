import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService} from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,public loginservice:LoginService){ }
  canActivate(
    ): boolean
     {
      //  if(localStorage.getItem("email")==null && localStorage.getItem("password")==null)
      //  {
      //    alert("please login to view the Employee Details")
      //    this.router.navigate(["/login"])
      //    return false;
      //  }
      //  if(localStorage.getItem("employeeID")==="1234567" && localStorage.getItem("password")==="Admin@123")
      if (this.loginservice.empId) {
        return true;
      } else {
        this.router.navigate(["/login"]);
        return false;
      }
  }
  
}
