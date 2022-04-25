import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HolidayService } from './holiday.service';

describe('HolidayService', () => {
  let service: HolidayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HolidayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
