import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserHomeComponent } from './user-home/user-home.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { MyParkingComponent } from './my-parking/my-parking.component';
import { NewParkingComponent } from './new-parking/new-parking.component';
import { ElementComponent } from './element/element.component';
import { ParkingAreaComponent } from './parking-area/parking-area.component'; 

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Element1Component } from './element1/element1.component'; 
import { InterceptorService } from './loader/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UserHomeComponent,
    CompanyHomeComponent,
    MyParkingComponent,
    NewParkingComponent,
    ElementComponent,
    ParkingAreaComponent,
    Element1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
