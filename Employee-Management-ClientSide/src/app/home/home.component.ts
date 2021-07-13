import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShown: boolean = false
  module = true;
  userLoggedIn: boolean;
  email: any;
  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isShown = false;
    this.email = sessionStorage.getItem('name')
    if (this.email) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;

    }
  }

  login() {
    this.email = sessionStorage.getItem('name');
  }

  reload(){
    this.ngOnInit()
  }

  onActivate(_event: any) {
  }

// to signout from a profile
  signout() {
    sessionStorage.clear()
    this.ngOnInit()
    this.openSnackBar('Logged out successfully', 'OK');
    this.router.navigate(['/home'])

  }

  //to open snack bar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      verticalPosition: 'bottom',
      panelClass: ['snackbar-position'],
      horizontalPosition: "center"
    });
  }

  viewSnack() {
    this.openSnackBar('Please login to view Profile', 'OK');
  }
  viewSnack1() {
    this.openSnackBar('Please login to view courses', 'OK');
  }
  viewSnack2() {
    this.openSnackBar('Please login to view Employee Details', 'OK');
  }
}
