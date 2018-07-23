import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Import the HttpClientModule module from angular common http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';


//Now using the imported HttpClientModule from angular common http
@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
