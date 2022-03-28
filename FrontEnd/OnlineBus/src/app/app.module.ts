import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { BookingsComponent } from './bookings/bookings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealsComponent } from './deals/deals.component';

import { FlashMessagesModule } from 'flash-messages-angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MatPaginatorModule } from '@angular/material/paginator';

import { MatIconModule } from '@angular/material/icon';
import { ProductsService } from './products.service';
import { MatMenuModule } from '@angular/material/menu';
import { HelpComponent } from './help/help.component';
import { MybookingsComponent } from './mybookings/mybookings.component';
import { CartComponent } from './cart/cart.component';



import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingsComponent,
    DealsComponent,
    LoginComponent,
    RegisterComponent,
    HelpComponent,
    MybookingsComponent,
    CartComponent,
    NavbarComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    FlashMessagesModule.forRoot(),
    MatToolbarModule,

    MatCardModule,
   
    FlexLayoutModule,
    MatPaginatorModule,

    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
    BrowserAnimationsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
