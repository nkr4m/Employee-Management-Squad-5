import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login/login.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: ProfileService, private logService : LoginService ,private router : Router) { }
employee:any;
flag=false;
  ngOnInit() {
    let id = this.logService.empId
    console.log(id);
    this.service.profileDetails(id).subscribe(
      data=>{
        this.employee = data;
      }
    )
  }

  home(){
    this.router.navigate(['/home']);
  }
 }

