import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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
  loginForm: any;
  hide:boolean=true;
  registerPage: boolean = false;
  errorMessage: null;
  homePage: boolean=false;
 

  constructor(private _snackBar: MatSnackBar,private router: Router,private fb: FormBuilder,private loginService:LoginService,private app: AppComponent) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        email: ['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
        password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]]
      }
    );
  }
 
login(){
  this.validateEmail(this.loginForm.value.email)
  
  this.loginService.login(this.loginForm.value).subscribe(
    (response) => {
      sessionStorage.setItem("email", response.email);
      sessionStorage.setItem("password", response.password);
      this.openSnackBar('Logged in successfully', 'Ok');
      if (this.loginForm.value.email === "admin@gmail.com" && this.loginForm.value.password === "Admin@123") {
        this.router.navigate(['/home'])
      }
      else {
        this.router.navigate(['/register'])
      }
      this.errorMessage = null;
      this.app.reload();
    },
    (errorResponse) => {

      this.errorMessage = errorResponse.error.message;
      sessionStorage.clear();
    }

  )

}

validateEmail(inputtxt: string) {
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputtxt.match(email)) {
    return this.loginForm.value.email = inputtxt;
  }
  else{
    return null;
  }
}

openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 5000,
    verticalPosition: 'top',
    panelClass: ['snackbar-position'],
    horizontalPosition: "center"

  });
}

getRegisterPage() {
  this.registerPage = true;

  this.router.navigate(['/register'])
}
  home(){
    this.homePage = true;
    this.router.navigate(['/home']);
  }

}
