import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loginRoutes } from './pages/login/login-routing.module';
import { homeRoutes } from './pages/home/home-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


const appRoutes: Routes = [
  { 
    path: 'login',
    component: LoginComponent,     
    // children: [
    //   ...homeRoutes
    // ]   
  },
  { 
    path: 'home',
    component: HomeComponent,
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



