
import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../services/holiday.service';
import { CountryI } from '../core/models/country.interface';
import { CountryResponseI } from '../core/models/getCountries.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  countryList: any[];
  isLoading = true;

  constructor(
    private service: HolidayService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getCountriesList().subscribe((res: CountryI[]) => {
      this.isLoading = false;
      const mappedCountry: CountryI[] = res;
      this.countryList = mappedCountry;
    },(error) =>{
    });
  }


  openHolidays(value){
    localStorage.setItem('countryCode', value);
    this.router.navigate(['/country-holidays']);
  }

}
