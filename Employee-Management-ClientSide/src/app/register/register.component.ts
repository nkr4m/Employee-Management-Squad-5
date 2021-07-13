import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  submitted:boolean=true;
  LoginPage: boolean = false;
  errorMessage: null;

  constructor(private fb: FormBuilder,private registerService:RegisterService,private router:Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)]],
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }
  
  register(){
    this.registerService.register(this.registerForm.value).subscribe(
      (success) => {
        this.openSnackBar('Registered successfully. Please Login to continue', 'OK');
        this.router.navigate(['/home'])
        this.errorMessage = null;
      },
      (failure) => {
        this.errorMessage = failure.error.message
      }
    )
  }

  getLoginPage(){
    this.LoginPage =true;
    this.router.navigate(['/login'])

  }
}
