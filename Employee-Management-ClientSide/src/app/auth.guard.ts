import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {
      //  if(localStorage.getItem("email")==null && localStorage.getItem("password")==null)
      //  {
      //    alert("please login to view the Employee Details")
      //    this.router.navigate(["/login"])
      //    return false;
      //  }
      //  if(localStorage.getItem("employeeID")==="1234567" && localStorage.getItem("password")==="Admin@123")
      if(localStorage.getItem("employeeID")==="null" && localStorage.getItem("password")==="null")
       {
        alert("please login to view the Employee Details")
        this.router.navigate(["/login"])
           return false;
       }else{
         return true;
       }
  }
  
}
