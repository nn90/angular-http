import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import the HttpClientModule module from angular common http
import { HttpClientModule } from '@angular/common/http';
//Importing forms module for ngModel
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';



//Now using the imported HttpClientModule from angular common http
@NgModule({
  declarations: [
    AppComponent
    
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
