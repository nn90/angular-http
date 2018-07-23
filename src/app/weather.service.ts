import { Injectable } from '@angular/core';
//Import HTTP CLIENT FROM ANGULAR COMMON HTTP O MAKE HTTP CALLS
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//Declaring a Private instance for Http in the constrcutor to use and execute the same.
  constructor(private httpAgent : HttpClient) { }
  

  //Delcaring the config URL harc codded with London Data 
  //Later we will change the London data to our choice of city
  weatherDataUrl = 'https://api.openweathermap.org/data/2.5/find?q=London&APPID=0c31508c95be143d704e876cd1608c09';


  /**
   * We have to use the result of the data in the component that we intend to use. 
   * In order to use we have to SUBSCRIBE to the values EMITTED useing the httpAgent.get method
   */
  getWeatherData():Observable<any>{
    return this.httpAgent.get(this.weatherDataUrl);
  }
}
