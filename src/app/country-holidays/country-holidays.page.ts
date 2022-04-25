import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-country-holidays',
  templateUrl: './country-holidays.page.html',
  styleUrls: ['./country-holidays.page.scss'],
})
export class CountryHolidaysPage implements OnInit {
  holidaysUrl = environment.baseUrl+'/List';
  holidaysList: any;
  isLoading = true;

  constructor(
    private service: HolidayService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getCountryHolidays().subscribe((response: any)=>{
      this.isLoading = false;
      console.log(response);
      this.holidaysList = response.holidays;
    });
  }

  backHome(){
    localStorage.removeItem('countryCode');
    this.router.navigate(['/home']);
  }


}
