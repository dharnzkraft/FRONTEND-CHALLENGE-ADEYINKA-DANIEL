/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CountryI } from '../core/models/country.interface';
import { CountryResponseI } from '../core/models/getCountries.interface';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  countriesUrl = environment.baseUrl+'Countries';
  holidaysUrl = environment.baseUrl+'List';
  authKey = 'YzkyNmZiMTAtNzMyNC00OGE1LWE0ZDUtN2I5ZmVlY2EzMWZi';
  countryCode: string;

  constructor(
    private http: HttpClient
  ) { }

  getCountriesList(): Observable<CountryI[]>{
    const headers = new HttpHeaders()
             .set('content-type', 'application/json')
             .set('Authorization', `Bearer ${this.authKey}`);

    const body = {};

    return this.http.post(this.countriesUrl, body, { headers }).pipe(
      switchMap((response: CountryResponseI)=>of(response.countries))
    );

  }

  getCountryHolidays(){
    this.countryCode = localStorage.getItem('countryCode');
    const headers = new HttpHeaders()
             .set('content-type', 'application/json')
             .set('Authorization', `Bearer ${this.authKey}`);


    const body = {
      'country_code': this.countryCode,
      'year': 2022
    };

    return this.http.post(this.holidaysUrl, body, { headers });

  }
}
