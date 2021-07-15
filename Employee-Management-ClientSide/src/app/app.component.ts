import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Employee';

  isShown: boolean = false
  module = true;
  userLoggedIn: boolean;
  empId: any;
  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.isShown = false;
    this.empId = sessionStorage.getItem('empId')
    if (this.empId) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;

    }
  }

  login() {
    this.empId = sessionStorage.getItem('empId');
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
