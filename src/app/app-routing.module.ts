import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';


const routes: Routes = [
  {
    path:'landing-page',
    component:LandingPageComponent
  }, 
  {
    path:'login',
    component:LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
