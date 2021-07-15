import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from './login.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide:boolean=true;
  registerPage: boolean = false;
  errorMessage: string;
  homePage: boolean=false;
  blockedDocument:boolean=false;
  submit:boolean=false;

  constructor(private _snackBar: MatSnackBar,private router: Router,private fb: FormBuilder,private loginService:LoginService,private app: AppComponent
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        empId: ['',[Validators.required,Validators.minLength(4)]],
        // email: ['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
      }
    );
  }
 
login():void{
  
  
  this.submit=true;
  this.loginService.login(this.loginForm.value).subscribe(
    (data) => {
      console.log(data);
      if (data) {
        this.loginService.empId = this.loginForm.value.empId;
        this.openSnackBar('Logged In Succesfully', 'OK');
        this.router.navigate(['/home'])
      }
      else {
        alert("Invalid Employee Id or password");
        this.router.navigate(['/login'])
      }
      this.errorMessage = "Invalid Employee Id or Password";
      this.submit=false;
    },
    (errorResponse) => {
      console.log(errorResponse.status);
    }

  )
}
//  var res = this.loginService.loggedIn();
//  if(res){
//   //  localStorage.setItem("employeeId",this.loginForm.employeeId);
//    localStorage.setItem("employeeID",this.loginForm.value.employeeID);
//    let a = localStorage.getItem("employeeID");
//    console.log(a);
//    localStorage.setItem("password",this.loginForm.value.password);
//   this.router.navigate(['/home']);
//  }else{
//    alert("invalid user");
//  }

// }

// validateEmail(inputtxt: string) {
//   var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (inputtxt.match(email)) {
//     return this.loginForm.value.email = inputtxt;
//   }
//   else{
//     return null;
//   }
// }

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000,
    verticalPosition: 'bottom',
    panelClass: ['snackbar-position'],
    horizontalPosition: "center"

  });
}


}
