import { Component, OnInit } from '@angular/core';
/**
 * Importing the service that provides the data i.e. weather.service 
 */

import { HttpClient } from '@angular/common/http';

import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  /**
   * Now here we Have to SUBSCRIBE the data from the WeatherService 
   * and assign it to a vriable, 1st: We will show the data in the console
   * 2nd: We will show the data on the Browser using a variable
   */
  constructor(private weatherDataService : WeatherService){

  }
  weatherData : any;
  errorMessage: any;

   ngOnInit(){
     this.weatherDataService.getWeatherData()
      .subscribe(data => this.weatherData = JSON.stringify(data,undefined, 4),
                error => this.errorMessage = error         )
     
   }
}
