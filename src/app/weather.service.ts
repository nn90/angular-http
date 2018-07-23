import { Injectable } from '@angular/core';
//Import HTTP CLIENT FROM ANGULAR COMMON HTTP O MAKE HTTP CALLS
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from '../../node_modules/rxjs';
/**
 * Importing Error handling and other modules from rxjs
 */
import { catchError } from 'rxjs/operators';


import { errorHandler } from '../../node_modules/@angular/platform-browser/src/browser';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//Declaring a Private instance for Http in the constrcutor to use and execute the same.
  constructor(private httpAgent : HttpClient) { }
  

  //Delcaring the config URL harc codded with London Data 
  //Later we will change the London data to our choice of city
  weatherDataUrl = 'https://api.openweathermap.org/data/2.5/find?q=London&APPID=0c31508c95be143d704e876cd1608c09';
  weatherDataUrlCity : string;


  /**
   * We have to use the result of the data in the component that we intend to use. 
   * In order to use we have to SUBSCRIBE to the values EMITTED useing the httpAgent.get method
   */

  /**
   * We cannot have a valid respose form the server always. Incase of lost connection
   * or incase of the server not responding we cannot just leave the data blank
   * For this we would use, .catch method for error handling
   */
  getWeatherData():Observable<any>{
    return this.httpAgent.get(this.weatherDataUrl)
    .pipe( catchError(this.errorHandler));
  }

  /**
   * Function to get the data for our custom city 
   * 1st: We have rewrite the URL
   * 2nd Pass the URL in the get function
   */
  customCityUrl(city):string{
    let Url1st = 'https://api.openweathermap.org/data/2.5/find?q=';
    let Url2nd = '&APPID=0c31508c95be143d704e876cd1608c09';
    return  this.weatherDataUrlCity = Url1st+city+Url2nd;
  }
  getCityWeatherData(city):Observable<any>{
    this.customCityUrl(city);
    return this.httpAgent.get(this.weatherDataUrlCity)
    .pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    
    return throwError(error.message || "ServerCommunication  Error")
  }
}
