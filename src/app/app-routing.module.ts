import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard'


const routes: Routes = [  
  { path: '', redirectTo:'login',pathMatch:'full' },
  
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'login', canActivate:[AuthGuard], component: LoginComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
