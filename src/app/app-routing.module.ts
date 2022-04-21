import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CabsComponent } from './cabs/cabs.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome = () => redirectLoggedInTo(['home'])

const routes: Routes = [
    {path : '',pathMatch:'full',component: LandingComponent},
    {path:'login',component:LoginComponent,...canActivate(redirectToHome)},
    {path:'signup',component:SignupComponent,...canActivate(redirectToHome)},
    {path : 'home',component:HomeComponent, ...canActivate(redirectToLogin)},
    {path : 'api',component:UsersComponent,...canActivate(redirectToLogin)},
    {path : 'api2',component:CabsComponent,...canActivate(redirectToLogin)},
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
