import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{Routes,RouterModule}from '@angular/router';


import { AppComponent } from './app.component';
import{HeaderComponent} from './comman/header/header.component';
import { RentalComponent } from './rental/rental.component';
import{RentalModule} from './rental/rental.module'

const routes:Routes=[
  {path:'',redirectTo:'rentals',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   
   
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
