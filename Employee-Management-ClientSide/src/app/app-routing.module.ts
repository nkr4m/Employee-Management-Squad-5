import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewDetailsComponent } from './view-details/view-details.component';



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
    path:'course',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'viewdetails',
    component: ViewDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'profile',
    component: ProfileComponent,
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
