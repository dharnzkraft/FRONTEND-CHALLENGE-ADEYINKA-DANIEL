import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { CountryHolidaysPage } from './country-holidays.page';
import { HolidayService } from '../services/holiday.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('CountryHolidaysPage', () => {
  let component: CountryHolidaysPage;
  let fixture: ComponentFixture<CountryHolidaysPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryHolidaysPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule,RouterTestingModule.withRoutes([]),]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryHolidaysPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.backHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);
  });
});
