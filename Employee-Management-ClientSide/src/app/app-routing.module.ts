import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './course/course.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
     component: HomeComponent,
     canActivate: [AuthGuard]
    },
  {
    path:'login',
   component: LoginComponent
  },
  {
    path:'employee',
   component:EmployeeComponent,
   canActivate: [AuthGuard]
  },
  {
    path:'course',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    children: [
      { path: '', component: CourseComponent }
    ],
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
