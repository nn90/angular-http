import { Component, OnInit } from '@angular/core';
/**
 * Importing the service that provides the data i.e. weather.service 
 */

import { HttpClient } from '@angular/common/http';

import { WeatherService } from './weather.service';
import { ICity } from './city';
import { CityProviderService } from './city-provider.service';

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
  constructor(private weatherDataService: WeatherService, private cityListService: CityProviderService) {

  }
  weatherData: any;
  errorMessage: any;
  cityListError: any
  city: string;
  cityList: ICity[];

  ngOnInit() {
    /**
     * By default we are getting London's Data
     */
    this.weatherDataService.getWeatherData()
      .subscribe(data => this.weatherData = JSON.stringify(data, undefined, 4),
        error => this.errorMessage = error);

    // this.cityListService.getCityList()
    //   .subscribe(data => this.cityList = data,
    //     error => this.cityListError = error);
    this.cityListService.getCityList()
      .subscribe(data => this.cityList = data,
        error => this.cityListError = error);

  }
  getCityWeatherData(city) {
    this.weatherDataService.getCityWeatherData(city.toUpperCase())
      .subscribe(data => this.weatherData = JSON.stringify(data, undefined, 4),
        error => this.errorMessage = error)
  }
  dataReset() {
    this.weatherData = null;
  }
}
