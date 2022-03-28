import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CartComponent } from './cart/cart.component';



import { DealsComponent } from './deals/deals.component';

import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { RegisterComponent } from './register/register.component';





const routes: Routes = [
  {path:'home', component:HomeComponent},
  // {path:"",pathMatch:"full",redirectTo:"/bookings"},
  {path:"",pathMatch:"full",redirectTo:"/bookings"},
  {path:'bookings', component:BookingsComponent},

  {path:'deals', component:DealsComponent},
  {path:"",pathMatch:"full",redirectTo:"/login"},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'help', component:HelpComponent},
  {path:'mybookings', component:MybookingsComponent},
  {path:'cart/:_id', component:CartComponent},
  
 
  
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
