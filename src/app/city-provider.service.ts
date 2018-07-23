/**
 * This service is used to provide a list of CITY via Http Service
 * through a JSON file
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from '../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';

import { ICity } from './city'

@Injectable({
  providedIn: 'root'
})
export class CityProviderService {

  constructor(private http: HttpClient) { }

  cityUrl = '/assets/city.list.json';

  getCityList(): Observable<ICity[]> {
    return this.http.get<ICity[]>(this.cityUrl);
  }

  errorHandler(error: HttpErrorResponse) {

    return throwError(error.message || "ServerCommunication  Error")
  }
}
